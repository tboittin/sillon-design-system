import type { SVGProps } from 'react'

/* ============================================================================
   FieldFigure — photographie de terrain stylisée (placeholder SVG).
   Direction : couleur naturelle, grain léger, légende documentaire.
   NOTE : remplacez le contenu SVG par une vraie photographie de terrain
   (voir README — section « Images ») ; l'API du composant reste identique.
   ========================================================================== */

export type FigureVariant = 'field' | 'plots' | 'macro' | 'data'

interface FieldFigureProps extends SVGProps<SVGSVGElement> {
  variant?: FigureVariant
}

/* Palette « photographie » — identique en clair et en sombre */
const C = {
  skyTop: '#dbe3cf',
  skyBottom: '#f0ead9',
  sun: '#e9d9a8',
  trees: '#7d9a76',
  treeDark: '#4a6b52',
  rowA: '#6d8f66',
  rowB: '#8baa7c',
  rowC: '#4a6b52',
  soil: '#a67c52',
  soilDark: '#6f4f37',
  grainLight: '#f5f1e8',
  grainDark: '#1a2e1a',
}

function Grain({ id }: { id: string }) {
  return (
    <filter id={id}>
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
  )
}

/** Champ vu en perspective : ciel, horizon boisé, rangs convergeant. */
function FieldScene() {
  const rows = [
    { d: 'M-40 675 C 300 560, 560 520, 640 495 L 660 520 C 620 560, 300 620, -40 700 Z', fill: C.rowA },
    { d: 'M-40 620 C 320 520, 580 480, 660 450 L 690 470 C 640 505, 320 575, -40 660 Z', fill: C.rowC },
    { d: 'M1240 675 C 940 560, 680 520, 600 495 L 580 520 C 620 560, 940 620, 1240 700 Z', fill: C.rowA },
    { d: 'M1240 620 C 920 520, 660 480, 580 450 L 550 470 C 600 505, 920 575, 1240 660 Z', fill: C.rowC },
    { d: 'M-40 520 C 300 440, 540 420, 620 400 L 640 425 C 560 450, 300 480, -40 545 Z', fill: C.rowB },
    { d: 'M1240 560 C 900 450, 660 425, 620 405 L 590 425 C 660 455, 900 485, 1240 590 Z', fill: C.rowB },
  ]
  return (
    <g>
      <rect width="1200" height="440" fill={`url(#sky)`} />
      <circle cx="930" cy="130" r="70" fill={C.sun} opacity="0.9" />
      {/* Ligne d'arbres à l'horizon */}
      <path d="M0 330 Q 150 285 300 320 T 600 310 T 900 325 T 1200 300 L 1200 440 L 0 440 Z" fill={C.treeDark} />
      <path d="M0 355 Q 180 320 360 348 T 700 340 T 1000 352 T 1200 330 L 1200 440 L 0 440 Z" fill={C.trees} />
      {/* Rangées de culture */}
      <rect y="400" width="1200" height="275" fill={C.soil} />
      <rect y="400" width="1200" height="275" fill={C.soilDark} opacity="0.18" />
      {rows.map((r, i) => (
        <path key={i} d={r.d} fill={r.fill} opacity={i % 2 === 0 ? 0.95 : 0.8} />
      ))}
      <rect y="440" width="1200" height="235" fill={C.grainDark} opacity="0.1" />
    </g>
  )
}

/** Vue aérienne : quadrillage de parcelles instrumentées. */
function PlotsScene() {
  const plots = [
    { x: 60, y: 140, w: 250, h: 170, f: C.rowA },
    { x: 340, y: 130, w: 260, h: 180, f: C.rowB },
    { x: 630, y: 150, w: 240, h: 160, f: C.rowC },
    { x: 890, y: 120, w: 250, h: 190, f: C.rowA },
    { x: 60, y: 340, w: 250, h: 170, f: C.rowC },
    { x: 340, y: 340, w: 260, h: 170, f: C.rowA },
    { x: 630, y: 340, w: 240, h: 180, f: C.rowB },
    { x: 890, y: 340, w: 250, h: 170, f: C.rowC },
  ]
  return (
    <g>
      <rect width="1200" height="675" fill={C.skyTop} />
      <rect width="1200" height="675" fill={C.grainDark} opacity="0.08" />
      {plots.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y={p.y} width={p.w} height={p.h} rx="6" fill={p.f} opacity="0.85" />
          <rect x={p.x} y={p.y} width={p.w} height={p.h} rx="6" fill="none" stroke={C.grainDark} strokeOpacity="0.35" strokeWidth="3" />
          {/* lignes intra-parcelle */}
          <path d={`M${p.x + 14} ${p.y + p.h / 2} l ${p.w - 28} 0`} stroke={C.grainLight} strokeOpacity="0.5" strokeWidth="2" strokeDasharray="6 8" />
          <circle cx={p.x + p.w / 2} cy={p.y + p.h / 2} r="8" fill={C.sun} opacity="0.9" />
        </g>
      ))}
      {/* chemins */}
      <path d="M0 315 H1200 M565 0 V675" stroke={C.soil} strokeWidth="26" opacity="0.7" />
      <path d="M0 315 H1200 M565 0 V675" stroke={C.soilDark} strokeWidth="3" opacity="0.5" strokeDasharray="14 10" />
    </g>
  )
}

/** Détail macro : tiges au stade tallage, fond sombre, bokeh. */
function MacroScene() {
  const stalks = [
    { x: 140, w: 26, h: 560, f: C.rowA, tilt: 0 },
    { x: 300, w: 32, h: 600, f: C.rowC, tilt: 22 },
    { x: 480, w: 24, h: 540, f: C.rowB, tilt: -18 },
    { x: 640, w: 30, h: 590, f: C.rowA, tilt: 12 },
    { x: 820, w: 26, h: 560, f: C.rowC, tilt: -8 },
    { x: 980, w: 34, h: 610, f: C.rowB, tilt: 16 },
  ]
  return (
    <g>
      <rect width="1200" height="675" fill={C.treeDark} />
      <rect width="1200" height="675" fill={C.grainDark} opacity="0.25" />
      {/* bokeh */}
      <circle cx="180" cy="120" r="46" fill={C.sun} opacity="0.14" />
      <circle cx="860" cy="90" r="64" fill={C.sun} opacity="0.1" />
      <circle cx="1060" cy="300" r="30" fill={C.sun} opacity="0.12" />
      {stalks.map((s, i) => (
        <g key={i} transform={`rotate(${s.tilt} ${s.x} 675)`}>
          <path d={`M${s.x - s.w / 2} 675 Q ${s.x} 400 ${s.x - s.w / 4} 90`} stroke={s.f} strokeWidth={s.w} fill="none" strokeLinecap="round" />
          <path d={`M${s.x} 675 Q ${s.x + s.w / 2} 420 ${s.x + s.w / 3} 75`} stroke={C.rowB} strokeWidth={s.w * 0.55} fill="none" strokeLinecap="round" />
          <path d={`M${s.x} 160 v -70`} stroke={C.grainLight} strokeWidth="3" opacity="0.6" />
        </g>
      ))}
      <rect y="560" width="1200" height="115" fill={C.grainDark} opacity="0.4" />
    </g>
  )
}

/** Profil de sol / données : strates, contours, repères de mesure. */
function DataScene() {
  const strata = [
    { y: 0, h: 130, f: C.skyTop },
    { y: 130, h: 120, f: C.soil },
    { y: 250, h: 150, f: C.soilDark },
    { y: 400, h: 110, f: C.rowC },
    { y: 510, h: 165, f: C.treeDark },
  ]
  return (
    <g>
      <rect width="1200" height="675" fill={C.grainDark} />
      {strata.map((s, i) => (
        <g key={i}>
          <rect y={s.y} width="1200" height={s.h} fill={s.f} opacity={i === 0 ? 1 : 0.7} />
          <path
            d={`M0 ${s.y} Q 300 ${s.y + 28} 600 ${s.y + 10} T 1200 ${s.y + 16}`}
            stroke={C.grainLight}
            strokeOpacity="0.55"
            strokeWidth="3"
            fill="none"
          />
        </g>
      ))}
      {/* repère vertical type profil */}
      <path d="M1010 30 V 640" stroke={C.grainLight} strokeWidth="3" strokeDasharray="10 8" opacity="0.85" />
      {[130, 250, 400, 510].map((y) => (
        <g key={y}>
          <path d={`M990 ${y} h 40`} stroke={C.grainLight} strokeWidth="3" opacity="0.85" />
          <path d={`M990 ${y} l -7 -7 M990 ${y} l -7 7`} stroke={C.grainLight} strokeWidth="3" opacity="0.85" />
        </g>
      ))}
      <g transform="translate(80 60)">
        <rect width="330" height="86" rx="8" fill={C.grainDark} opacity="0.55" />
        <circle cx="34" cy="43" r="9" fill={C.rowB} />
        <path d="M60 30 h 180 M60 56 h 210" stroke={C.grainLight} strokeWidth="4" opacity="0.9" strokeLinecap="round" />
        <path d="M60 30 h 96 M60 56 h 150" stroke={C.grainDark} strokeWidth="4" opacity="0.35" strokeLinecap="round" />
      </g>
    </g>
  )
}

const scenes: Record<FigureVariant, () => React.JSX.Element> = {
  field: FieldScene,
  plots: PlotsScene,
  macro: MacroScene,
  data: DataScene,
}

export function FieldFigure({ variant = 'field', className = '', ...props }: FieldFigureProps) {
  const Scene = scenes[variant]
  return (
    <svg
      viewBox="0 0 1200 675"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={`Photographie de terrain — ${variant}`}
      {...props}
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.skyTop} />
          <stop offset="100%" stopColor={C.skyBottom} />
        </linearGradient>
        <radialGradient id="vignette" cx="50%" cy="45%" r="75%">
          <stop offset="62%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.28" />
        </radialGradient>
        <Grain id="fig-grain" />
      </defs>
      <Scene />
      <rect width="1200" height="675" fill="url(#vignette)" />
      <rect width="1200" height="675" filter="url(#fig-grain)" opacity="0.3" style={{ mixBlendMode: 'overlay' }} />
    </svg>
  )
}