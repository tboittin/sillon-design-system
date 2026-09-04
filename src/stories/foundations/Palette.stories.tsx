import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Fondations/Palette',
  parameters: { layout: 'padded' },
}
export default meta

/* Rampe papier / forêt / écorce — extraites de @theme */
const ramps: { name: string; shades: [string, string][] }[] = [
  {
    name: 'Papier',
    shades: [
      ['50', '#fbf9f3'],
      ['100', '#f5f1e8'],
      ['200', '#ece5d6'],
      ['300', '#ddd2bc'],
      ['400', '#c8b99b'],
      ['500', '#b09d7c'],
      ['600', '#947f5f'],
    ],
  },
  {
    name: 'Forêt',
    shades: [
      ['50', '#eff4ef'],
      ['100', '#dce7dc'],
      ['200', '#b8ceb9'],
      ['300', '#8fb092'],
      ['400', '#6a9270'],
      ['500', '#4a7c59'],
      ['600', '#3d6648'],
      ['700', '#34533d'],
      ['800', '#2b4434'],
      ['900', '#1a2e1a'],
      ['950', '#10200f'],
    ],
  },
  {
    name: 'Écorce',
    shades: [
      ['50', '#f6f0e8'],
      ['100', '#ecdfcd'],
      ['200', '#dcc3a6'],
      ['300', '#c8a67e'],
      ['400', '#b88d5f'],
      ['500', '#a67c52'],
      ['600', '#8c6543'],
      ['700', '#6f4f37'],
      ['800', '#58402f'],
      ['900', '#453324'],
    ],
  },
]

function Swatch({ name, hex }: { name: string; hex: string }) {
  const darkText = parseInt(hex.slice(1, 3), 16) + parseInt(hex.slice(3, 5), 16) + parseInt(hex.slice(5, 7), 16) > 420
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-line">
      <div className="flex h-14 items-end justify-between px-2 pb-1.5" style={{ backgroundColor: hex, color: darkText ? '#1a2e1a' : '#f5f1e8' }}>
        <span className="font-mono text-[11px] font-medium">{name}</span>
        <span className="font-mono text-[10px] opacity-75">{hex}</span>
      </div>
    </div>
  )
}

export const Rampes = () => (
  <div className="flex flex-col gap-10">
    {ramps.map((ramp) => (
      <div key={ramp.name}>
        <h2 className="mb-3 font-display text-lg text-ink">Sillon — {ramp.name}</h2>
        <div className="grid grid-cols-6 gap-2 sm:grid-cols-8 lg:grid-cols-11">
          {ramp.shades.map(([name, hex]) => (
            <Swatch key={name} name={name} hex={hex} />
          ))}
        </div>
      </div>
    ))}
    <div>
      <h2 className="mb-3 font-display text-lg text-ink">Surfaces sémantiques (basculent en mode sombre ↗)</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ['surface', 'var(--sillon-surface)'],
          ['surface-raised', 'var(--sillon-surface-raised)'],
          ['ink', 'var(--sillon-ink)'],
          ['accent', 'var(--sillon-accent)'],
          ['accent-strong', 'var(--sillon-accent-strong)'],
          ['accent-soft', 'var(--sillon-accent-soft)'],
          ['bark', 'var(--sillon-bark)'],
          ['line', 'var(--sillon-line)'],
        ].map(([name, cssVar]) => (
          <div key={name} className="flex h-16 items-end justify-between rounded-lg border border-line p-2" style={{ backgroundColor: `var(--${name})` }}>
            <span className="font-mono text-[11px] text-ink">{name}</span>
            <span className="font-mono text-[9px] text-ink/60">{cssVar}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
        Les surfaces sémantiques utilisent des variables runtime (<code className="font-mono text-xs">@theme inline</code>) : elles
        réagissent au mode sombre sans toucher aux composants. Testez avec le bouton « Thème » de la barre d'outils.
      </p>
    </div>
  </div>
)

export const Contrastes = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center justify-between rounded-xl border border-line bg-surface p-6">
      <div>
        <p className="font-display text-2xl text-ink">Encre sur surface</p>
        <p className="text-sm text-ink-soft">6.94:1 — AA / AAA</p>
      </div>
      <span className="legend text-accent">Accent sur surface</span>
    </div>
    <div className="flex items-center justify-between rounded-xl bg-forest-950 p-6">
      <p className="font-display text-2xl text-paper-50">Papier sur forêt profonde</p>
      <span className="legend text-forest-300">Forêt 300 sur 950</span>
    </div>
    <div className="flex items-center justify-between rounded-xl bg-accent p-6">
      <p className="font-display text-2xl text-paper-50">Papier sur accent</p>
      <span className="legend text-paper-50">CTA primaire</span>
    </div>
  </div>
)