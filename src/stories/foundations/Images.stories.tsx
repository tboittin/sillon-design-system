import type { Meta } from '@storybook/react'
import { FieldFigure } from '../../components/FieldFigure'

const meta: Meta<typeof FieldFigure> = {
  title: 'Fondations/Images (terrain)',
  component: FieldFigure,
  parameters: { layout: 'padded' },
  argTypes: {
    variant: { control: 'select', options: ['field', 'plots', 'macro', 'data'] },
  },
}
export default meta

export const Figure = {
  args: { variant: 'field', className: 'w-full max-w-3xl rounded-xl aspect-[16/9]' },
}

export const QuatreVariantes = () => (
  <div className="grid gap-6 md:grid-cols-2">
    {(
      [
        ['field', 'Champ — rangs en perspective'],
        ['plots', 'Aérien — mailles instrumentées'],
        ['macro', 'Macro — stade tallage'],
        ['data', 'Données — profil de sol'],
      ] as const
    ).map(([variant, label]) => (
      <figure key={variant} className="overflow-hidden rounded-xl border border-line">
        <FieldFigure variant={variant} className="aspect-[4/3] w-full" />
        <figcaption className="flex items-center justify-between border-t border-line bg-surface-raised px-4 py-3">
          <span className="font-mono text-xs text-ink">{label}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">{variant}</span>
        </figcaption>
      </figure>
    ))}
  </div>
)

export const AvecGrainEtLegende = () => (
  <figure>
    <div className="grain overflow-hidden rounded-xl border border-line">
      <FieldFigure variant="field" className="aspect-[16/9] w-full" />
    </div>
    <figcaption className="mt-3 flex items-baseline gap-4">
      <span className="font-mono text-xs font-medium text-accent">Fig. 06</span>
      <span className="legend text-ink-soft">
        Vue de la parcelle nord au semis — la classe « grain » ajoute le bruit photographique léger (feTurbulence).
      </span>
    </figcaption>
  </figure>
)