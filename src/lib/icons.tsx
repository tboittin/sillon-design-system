import type { ReactNode, SVGProps } from 'react'

/* ---------------------------------------------------------------------------
   Système d'icônes Sillon — cohérence : viewBox 24, stroke 1.8, extrémités
   arrondies. Icônes purement décoratives -> aria-hidden.
--------------------------------------------------------------------------- */

export type IconProps = SVGProps<SVGSVGElement>

function Base({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

/** Marque Sillon : trois sillons parallèles et une semence */
export const FurrowMark = (props: IconProps) => (
  <Base {...props}>
    <path d="M3 6.5c3-2 6 2 9 0s6 2 9 0" />
    <path d="M3 12c3-2 6 2 9 0s6 2 9 0" />
    <path d="M3 17.5c3-2 6 2 9 0s6 2 9 0" />
    <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
  </Base>
)

export const MenuIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h10" />
  </Base>
)

export const CloseIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M6 6l12 12" />
    <path d="M18 6L6 18" />
  </Base>
)

export const ArrowRightIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M4 12h15" />
    <path d="M13 6l6 6-6 6" />
  </Base>
)

export const ArrowLeftIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M20 12H5" />
    <path d="M11 6l-6 6 6 6" />
  </Base>
)

export const ArrowUpRightIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M7 17L17 7" />
    <path d="M9 7h8v8" />
  </Base>
)

export const ChevronDownIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M6 9l6 6 6-6" />
  </Base>
)

export const SunIcon = (props: IconProps) => (
  <Base {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
  </Base>
)

export const MoonIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M20 13.5A8 8 0 1 1 10.5 4 6.5 6.5 0 0 0 20 13.5Z" />
  </Base>
)

export const MailIcon = (props: IconProps) => (
  <Base {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </Base>
)

export const MapPinIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M12 21s-6.5-5.4-6.5-10a6.5 6.5 0 0 1 13 0c0 4.6-6.5 10-6.5 10Z" />
    <circle cx="12" cy="10.6" r="2.2" />
  </Base>
)

export const SendIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="m21.5 2.5-10 10" />
    <path d="M21.5 2.5 15 21.5l-3.5-9-9-3.5 19-6.5Z" />
  </Base>
)

export const CheckIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Base>
)

export const ClockIcon = (props: IconProps) => (
  <Base {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Base>
)

export const CalendarIcon = (props: IconProps) => (
  <Base {...props}>
    <rect x="3.5" y="5" width="17" height="16" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </Base>
)

export const UserIcon = (props: IconProps) => (
  <Base {...props}>
    <circle cx="12" cy="8" r="3.6" />
    <path d="M5 20.5c1.4-3.2 4-4.8 7-4.8s5.6 1.6 7 4.8" />
  </Base>
)

export const PlantIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M12 21v-8" />
    <path d="M12 13c0-3.4-2.6-5.7-5.8-5.7.2 3.3 2.7 5.3 5.8 5.7Z" />
    <path d="M12 10.4c0-3 2.3-5 5-5-.2 2.9-2.4 4.6-5 5Z" />
  </Base>
)

export const SproutIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M12 21v-8" />
    <path d="M12 13c0-3-2.3-5.2-5.3-5.2.2 3 2.5 4.8 5.3 5.2Z" />
  </Base>
)

export const WheatIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M12 22V9" />
    <path d="M12 9c0-2.4 1.6-4 4-4 .1 2.4-1.6 4-4 4Z" />
    <path d="M12 13c0-2.4 1.6-4 4-4 0 2.4-1.5 4-4 4Z" />
    <path d="M12 9c0-2.4-1.6-4-4-4-.1 2.4 1.6 4 4 4Z" />
    <path d="M12 13c0-2.4-1.6-4-4-4 0 2.4 1.6 4 4 4Z" />
    <path d="M7 21l5-7" />
  </Base>
)

export const CodeIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="m8 7-5 5 5 5" />
    <path d="m16 7 5 5-5 5" />
    <path d="m13.5 4-3 16" />
  </Base>
)

export const FlaskIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M9.5 3h5" />
    <path d="M10 3v6L4.8 16.2A2.4 2.4 0 0 0 6.9 20h10.2a2.4 2.4 0 0 0 2.1-3.8L14 9V3" />
    <path d="M7.5 15h9" />
  </Base>
)

export const RulerIcon = (props: IconProps) => (
  <Base {...props}>
    <rect x="2.5" y="9" width="19" height="6" rx="1" transform="rotate(-20 12 12)" />
    <path d="m8.4 6.6 1.2 2.4M12.4 4.9l1.2 2.4M16.4 3.2l1.2 2.4" transform="rotate(-20 12 12)" />
  </Base>
)

export const LeafIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M5 19C5 9 12 4 20 4c0 8-5 15-15 15Z" />
    <path d="M5 19c2.5-5 6-8.5 10-10.5" />
  </Base>
)

export const ChartBarsIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M4 20h16" />
    <path d="M7 20v-6M12 20V9M17 20v-9" />
  </Base>
)

export const LayersIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m4.5 12.5 7.5 4 7.5-4" />
    <path d="m4.5 16.5 7.5 4 7.5-4" />
  </Base>
)

export const DatabaseIcon = (props: IconProps) => (
  <Base {...props}>
    <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
    <path d="M4.5 5.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
    <path d="M4.5 11.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
  </Base>
)

export const DropletIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M12 3.5S6 10.3 6 14.3a6 6 0 0 0 12 0c0-4-6-10.8-6-10.8Z" />
  </Base>
)

export const MapIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="m9 4.5-6 3v12l6-3 6 3 6-3v-12l-6 3-6-3Z" />
    <path d="M9 4.5v12M15 7.5v12" />
  </Base>
)

export const GithubIcon = (props: IconProps) => (
  <Base {...props}>
    <path d="M12 2.8a9.6 9.6 0 0 0-3.04 18.7c.48.09.66-.21.66-.46v-1.8c-2.7.59-3.27-1.17-3.27-1.17-.44-1.13-1.08-1.43-1.08-1.43-.88-.6.07-.59.07-.59.97.07 1.49 1 1.49 1 .87 1.48 2.27 1.05 2.83.8.09-.63.34-1.05.62-1.3-2.16-.24-4.43-1.08-4.43-4.82 0-1.07.38-1.94 1-2.62-.1-.25-.44-1.24.1-2.58 0 0 .82-.26 2.68 1a9.3 9.3 0 0 1 4.88 0c1.86-1.26 2.68-1 2.68-1 .54 1.34.2 2.33.1 2.58.62.68 1 1.55 1 2.62 0 3.75-2.28 4.58-4.45 4.82.35.3.66.9.66 1.82v2.7c0 .25.18.55.67.46A9.6 9.6 0 0 0 12 2.8Z" />
  </Base>
)

export const LinkedinIcon = (props: IconProps) => (
  <Base {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2.5" />
    <path d="M8 10.5V17M8 7.2v.1" />
    <path d="M12 17v-3.8a2.1 2.1 0 0 1 4.2 0V17" />
  </Base>
)

/* Cartographie icône -> composant (pour les listes/groupes) */
export const iconMap = {
  plant: PlantIcon,
  sprout: SproutIcon,
  wheat: WheatIcon,
  code: CodeIcon,
  flask: FlaskIcon,
  ruler: RulerIcon,
  leaf: LeafIcon,
  chart: ChartBarsIcon,
  layers: LayersIcon,
  database: DatabaseIcon,
  droplet: DropletIcon,
  map: MapIcon,
} as const

export type IconName = keyof typeof iconMap