import { useEffect, useRef } from "react";

// ── Fragment shader ───────────────────────────────────────────────────────────
const FRAGMENT_SRC = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
uniform vec3 u_color;

#define FC gl_FragCoord.xy
#define R resolution
#define T (time+660.)

float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;for(int i=0;i<5;i++){t+=a*noise(p);p*=mat2(1,-1.2,.2,1.2)*2.;a*=.5;}return t;}

void main(){
  vec2 uv=(FC-.5*R)/R.y;
  vec3 col=vec3(1);
  uv.x+=.25;
  uv*=vec2(2,1);

  float n=fbm(uv*.28-vec2(T*.01,0));
  n=noise(uv*3.+n*2.);

  col.r-=fbm(uv+vec2(0,T*.015)+n);
  col.g-=fbm(uv*1.003+vec2(0,T*.015)+n+.003);
  col.b-=fbm(uv*1.006+vec2(0,T*.015)+n+.006);

  col=mix(col, u_color, dot(col,vec3(.21,.71,.07)));
  col=mix(vec3(.08),col,min(time*.1,1.));
  col=clamp(col,.08,1.);
  O=vec4(col,1);
}`;

const VERTEX_SRC = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

// ── WebGL renderer ────────────────────────────────────────────────────────────
class Renderer {
  constructor(canvas, fragmentSource) {
    this.canvas   = canvas;
    this.gl       = canvas.getContext("webgl2");
    this.program  = null;
    this.vs       = null;
    this.fs       = null;
    this.buffer   = null;
    this.color    = [0.5, 0.5, 0.5];
    this.vertices = [-1, 1, -1, -1, 1, 1, 1, -1];
    this._setup(fragmentSource);
    this._init();
  }

  updateColor(rgb) { this.color = rgb; }

  updateScale() {
    const dpr = Math.min(Math.max(1, window.devicePixelRatio), 1.25);
    const { clientWidth: w, clientHeight: h } = this.canvas.parentElement || this.canvas;
    this.canvas.width  = w * dpr;
    this.canvas.height = h * dpr;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  _compile(shader, source) {
    const { gl } = this;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
      console.error("Shader error:", gl.getShaderInfoLog(shader));
  }

  _setup(fragmentSource) {
    const { gl } = this;
    this.vs = gl.createShader(gl.VERTEX_SHADER);
    this.fs = gl.createShader(gl.FRAGMENT_SHADER);
    this.program = gl.createProgram();
    this._compile(this.vs, VERTEX_SRC);
    this._compile(this.fs, fragmentSource);
    gl.attachShader(this.program, this.vs);
    gl.attachShader(this.program, this.fs);
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS))
      console.error("Link error:", gl.getProgramInfoLog(this.program));
  }

  _init() {
    const { gl, program } = this;
    if (!program) return;
    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    program._res   = gl.getUniformLocation(program, "resolution");
    program._time  = gl.getUniformLocation(program, "time");
    program._color = gl.getUniformLocation(program, "u_color");
  }

  render(now = 0) {
    const { gl, program, buffer, canvas } = this;
    if (!program || !gl.isProgram(program)) return;
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.uniform2f(program._res,  canvas.width, canvas.height);
    gl.uniform1f(program._time, now * 1e-3);
    gl.uniform3fv(program._color, this.color);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  reset() {
    const { gl, program, vs, fs } = this;
    if (!program) return;
    if (vs) { gl.detachShader(program, vs); gl.deleteShader(vs); }
    if (fs) { gl.detachShader(program, fs); gl.deleteShader(fs); }
    gl.deleteProgram(program);
    this.program = null;
  }
}

// ── Hex → [r, g, b] floats ───────────────────────────────────────────────────
function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r
    ? [parseInt(r[1], 16) / 255, parseInt(r[2], 16) / 255, parseInt(r[3], 16) / 255]
    : null;
}

// ── Component ─────────────────────────────────────────────────────────────────
/**
 * SmokeBackground
 *
 * Full-area WebGL2 smoke animation. Place inside a `relative` container.
 *
 * Props:
 *   smokeColor — hex string (default "#B8933F" — site gold)
 *   className  — extra classes on the canvas
 */
export function SmokeBackground({ smokeColor = "#B8933F", className = "", style = {} }) {
  const canvasRef   = useRef(null);
  const rendererRef = useRef(null);

  // Init WebGL renderer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new Renderer(canvas, FRAGMENT_SRC);
    rendererRef.current = renderer;

    let resizeTimer = null;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => renderer.updateScale(), 150);
    };
    renderer.updateScale();
    window.addEventListener("resize", handleResize);

    let rafId;
    let paused = false;
    let lastRender = 0;

    const loop = (now) => {
      if (!paused && now - lastRender >= 48) {
        lastRender = now;
        renderer.render(now);
      }
      rafId = requestAnimationFrame(loop);
    };

    // Pause when off-screen
    const obs = new IntersectionObserver(
      ([entry]) => { paused = !entry.isIntersecting; },
      { threshold: 0 }
    );
    obs.observe(canvas);

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
      cancelAnimationFrame(rafId);
      obs.disconnect();
      renderer.reset();
    };
  }, []);

  // Update color when prop changes
  useEffect(() => {
    const rgb = hexToRgb(smokeColor);
    if (rgb && rendererRef.current) rendererRef.current.updateColor(rgb);
  }, [smokeColor]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full block pointer-events-none ${className}`}
      style={style}
    />
  );
}
