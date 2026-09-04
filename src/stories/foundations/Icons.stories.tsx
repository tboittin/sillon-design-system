import type { Meta } from '@storybook/react'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CalendarIcon,
  ChartBarsIcon,
  CheckIcon,
  ChevronDownIcon,
  ClockIcon,
  CloseIcon,
  CodeIcon,
  DatabaseIcon,
  DropletIcon,
  FlaskIcon,
  FurrowMark,
  GithubIcon,
  LayersIcon,
  LeafIcon,
  LinkedinIcon,
  MailIcon,
  MapIcon,
  MapPinIcon,
  MenuIcon,
  MoonIcon,
  PlantIcon,
  RulerIcon,
  SendIcon,
  SproutIcon,
  SunIcon,
  UserIcon,
  WheatIcon,
} from '../../lib/icons'

const meta: Meta = {
  title: 'Fondations/Icônes',
  parameters: { layout: 'padded' },
}
export default meta

const icons = [
  ['Logo furrow', FurrowMark],
  ['Menu', MenuIcon],
  ['Fermer', CloseIcon],
  ['Flèche droite', ArrowRightIcon],
  ['Flèche gauche', ArrowLeftIcon],
  ['Flèche sortante', ArrowUpRightIcon],
  ['Chevron bas', ChevronDownIcon],
  ['Soleil', SunIcon],
  ['Lune', MoonIcon],
  ['Mail', MailIcon],
  ['Position', MapPinIcon],
  ['Envoyer', SendIcon],
  ['Valider', CheckIcon],
  ['Calendrier', CalendarIcon],
  ['Horloge', ClockIcon],
  ['Utilisateur', UserIcon],
  ['Plante', PlantIcon],
  ['Pousse', SproutIcon],
  ['Blé', WheatIcon],
  ['Code', CodeIcon],
  ['Fiole', FlaskIcon],
  ['Règle', RulerIcon],
  ['Feuille', LeafIcon],
  ['Graphique', ChartBarsIcon],
  ['Couches', LayersIcon],
  ['Base de données', DatabaseIcon],
  ['Goutte', DropletIcon],
  ['Carte', MapIcon],
  ['GitHub', GithubIcon],
  ['LinkedIn', LinkedinIcon],
] as const

export const Catalogue = () => (
  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
    {icons.map(([label, Icon]) => (
      <div key={label} className="flex flex-col items-center gap-3 rounded-xl border border-line bg-surface-raised p-5">
        <Icon className="size-7 text-accent" />
        <span className="font-mono text-[11px] text-ink-soft">{label}</span>
      </div>
    ))}
  </div>
)

export const Tailles = () => (
  <div className="flex flex-wrap items-end gap-8">
    {[16, 20, 24, 32, 48].map((size) => (
      <div key={size} className="flex flex-col items-center gap-2">
        <SunIcon style={{ width: size, height: size }} className="text-accent" />
        <span className="font-mono text-[10px] text-ink-soft">{size}px</span>
      </div>
    ))}
  </div>
)

export const Coussin = () => (
  <div className="flex flex-col gap-6">
    <p className="max-w-md text-sm leading-relaxed text-ink-soft">
      Les icônes sont des SVG à trait (<code className="font-mono text-xs">stroke-width 1.8</code>), extrémités
      arrondies, dans un espace 24×24. Elles héritent de la couleur du texte (<code className="font-mono text-xs">currentColor</code>)
      et sont décoratives (<code className="font-mono text-xs">aria-hidden</code>).
    </p>
    <div className="flex flex-wrap items-center gap-4 rounded-xl border border-line bg-surface-raised p-6">
      <span className="flex size-12 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
        <PlantIcon className="size-6" />
      </span>
      <span className="flex size-12 items-center justify-center rounded-full bg-bark-soft text-bark-600 dark:text-bark-300">
        <CodeIcon className="size-6" />
      </span>
      <span className="flex size-12 items-center justify-center rounded-full bg-accent text-paper-50">
        <WheatIcon className="size-6" />
      </span>
    </div>
  </div>
)