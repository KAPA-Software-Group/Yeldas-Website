/**
 * SilkBackground
 *
 * Full-area animated silk canvas texture.
 * Sized to window dimensions (reliable across all layout modes).
 *
 * To adjust appearance, edit the constants in the useEffect below:
 *   speed          — how fast the pattern moves (default 0.02)
 *   scale          — zoom of the pattern (default 2)
 *   noiseIntensity — grain roughness 0–1 (default 0.8)
 *   r / g / b      — color tint (currently tuned to site navy palette)
 */

import { useEffect, useRef } from "react"

export default function SilkBackground({ className = "" }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let time = 0
    let animationId

    const speed          = 0.02
    const scale          = 2
    const noiseIntensity = 0.8

    // Use window dimensions — reliable regardless of layout/flex context
    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const noise = (x, y) => {
      const G  = 2.71828
      const rx = G * Math.sin(G * x)
      const ry = G * Math.sin(G * y)
      return (rx * ry * (1 + x)) % 1
    }

    const animate = () => {
      const { width, height } = canvas

      const imageData = ctx.createImageData(width, height)
      const data      = imageData.data

      for (let x = 0; x < width; x += 2) {
        for (let y = 0; y < height; y += 2) {
          const u = (x / width)  * scale
          const v = (y / height) * scale

          const tOffset = speed * time
          const tex_x   = u
          const tex_y   = v + 0.03 * Math.sin(8.0 * tex_x - tOffset)

          const pattern =
            0.6 +
            0.4 *
              Math.sin(
                5.0 *
                  (tex_x +
                    tex_y +
                    Math.cos(3.0 * tex_x + 5.0 * tex_y) +
                    0.02 * tOffset) +
                  Math.sin(20.0 * (tex_x + tex_y - 0.1 * tOffset))
              )

          const rnd       = noise(x, y)
          const intensity = Math.max(0, pattern - (rnd / 15.0) * noiseIntensity)

          // ── Silk color — tuned to site navy palette ─────────────────────
          // Adjust the [base + range * intensity] values to shift the hue.
          const r = Math.floor(10 + 28 * intensity)
          const g = Math.floor(14 + 22 * intensity)
          const b = Math.floor(35 + 60 * intensity)
          // ────────────────────────────────────────────────────────────────

          const index = (y * width + x) * 4
          if (index + 3 < data.length) {
            data[index]     = r
            data[index + 1] = g
            data[index + 2] = b
            data[index + 3] = 255
          }

          // Fill adjacent pixel to avoid a sparse dotted look
          const index2 = (y * width + x + 1) * 4
          if (index2 + 3 < data.length) {
            data[index2]     = r
            data[index2 + 1] = g
            data[index2 + 2] = b
            data[index2 + 3] = 255
          }
        }
      }

      ctx.putImageData(imageData, 0, 0)
      time += 1
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  )
}
