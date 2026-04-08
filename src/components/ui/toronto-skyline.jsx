/**
 * TorontoSkyline
 *
 * Hand-crafted SVG outline of the Toronto skyline anchored to the bottom of
 * its container. Designed to be used as a full-width decorative underlay on
 * dark (navy) backgrounds.
 *
 * Key landmarks captured:
 *   — CN Tower (dominant, slightly left-of-center)
 *   — Rogers Centre dome
 *   — Downtown clusters on both sides
 *
 * Props:
 *   className   — extra Tailwind classes
 *   strokeColor — line color (default: white)
 *   opacity     — overall opacity (default: 0.07)
 */
export default function TorontoSkyline({
  className = "",
  strokeColor = "white",
  opacity = 0.85,
}) {
  return (
    <svg
      viewBox="0 0 1440 480"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute bottom-0 left-0 w-full pointer-events-none select-none ${className}`}
      style={{ opacity }}
    >
      {/*
        ── Skyline outline ────────────────────────────────────────────────────
        One continuous stroke from left edge to right edge.
        Ground is at y=460. The CN Tower peaks at y=18.
      */}
      <path
        d={`
          M 0,480
          L 0,428
          L 18,428  L 18,442  L 28,442
          L 28,408  L 46,408  L 46,442  L 58,442
          L 58,392  L 76,392  L 76,442  L 90,442
          L 90,412  L 106,412 L 106,430 L 120,430
          L 120,398 L 140,398 L 140,430 L 155,430
          L 155,415 L 172,415 L 172,440 L 188,440
          L 188,420 L 200,420
          L 200,418
          Q 252,368 305,418
          L 310,435
          L 318,435 L 333,435
          L 333,416 L 348,416 L 348,438 L 362,438
          L 362,410 L 378,410 L 378,442 L 395,442
          L 395,422 L 410,422 L 410,445 L 428,445
          L 436,460 L 448,460
          L 453,442 L 457,422 L 460,400 L 462,375
          L 463,350 L 464,320 L 465,292
          L 460,285 L 455,278 L 448,272
          L 455,265 L 460,260 L 465,255
          L 466,238 L 467,215 L 468,192
          L 464,186 L 458,180 L 452,174
          L 458,168 L 464,163 L 468,158
          L 469,142 L 470,118 L 471,88
          L 472,58  L 473,30  L 474,18
          L 476,18
          L 477,30  L 478,58  L 479,88
          L 480,118 L 481,142
          L 485,158 L 490,163 L 496,168
          L 490,174 L 484,180 L 480,186
          L 481,192 L 482,215 L 483,238
          L 484,255 L 489,260 L 494,265
          L 501,272 L 494,278 L 489,285 L 484,292
          L 485,320 L 486,350 L 487,375
          L 489,400 L 492,422 L 496,442 L 502,460
          L 522,460
          L 522,435 L 538,435
          L 538,418 L 555,418 L 555,440 L 572,440
          L 572,405 L 588,405 L 588,412 L 604,412
          L 604,388 L 622,388 L 622,410 L 640,410
          L 640,438 L 656,438
          L 656,415 L 672,415 L 672,438 L 688,438
          L 688,418 L 706,418 L 706,440
          L 722,440
          L 722,378 L 745,378 L 745,398 L 760,398
          L 760,358 L 782,358 L 782,392 L 796,392
          L 796,368 L 814,368 L 814,358 L 832,358
          L 832,390 L 848,390 L 848,372 L 864,372
          L 864,390 L 880,390 L 880,378 L 896,378
          L 896,396 L 914,396 L 914,412 L 932,412
          L 932,382 L 950,382 L 950,396 L 968,396
          L 968,415 L 985,415
          L 1000,415
          L 1000,392 L 1018,392 L 1018,410 L 1036,410
          L 1036,388 L 1055,388 L 1055,408 L 1072,408
          L 1072,394 L 1090,394 L 1090,416 L 1108,416
          L 1108,438 L 1126,438 L 1126,412 L 1145,412
          L 1145,432 L 1165,432
          L 1180,432
          L 1180,408 L 1200,408 L 1200,420 L 1218,420
          L 1218,400 L 1238,400 L 1238,420 L 1256,420
          L 1256,438 L 1275,438 L 1275,418 L 1295,418
          L 1295,435 L 1315,435 L 1315,415 L 1335,415
          L 1335,438 L 1355,438 L 1355,422 L 1375,422
          L 1375,440 L 1440,440
          L 1440,480
          Z
        `}
        fill="rgba(2,4,10,1)"
        stroke="none"
      />

    </svg>
  );
}
