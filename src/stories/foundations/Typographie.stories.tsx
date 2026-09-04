import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Fondations/Typographie',
  parameters: { layout: 'padded' },
}
export default meta

export const Familles = () => (
  <div className="flex flex-col gap-10">
    <div>
      <p className="legend text-accent">Titres — Fraunces (serif organique)</p>
      <p className="mt-3 font-display text-5xl font-medium text-ink md:text-6xl">Du champ au code</p>
      <p className="mt-2 font-display text-2xl italic text-ink-soft">L'agronomie a besoin de meilleurs outils.</p>
    </div>
    <div>
      <p className="legend text-accent">Texte — Inter (sans)</p>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink md:text-lg">
        Ingénieur agronome et développeur web, je conçois des outils de terrain qui transforment des données
        complexes en décisions claires — du protocole d'essai au tableau de bord.
      </p>
    </div>
    <div>
      <p className="legend text-accent">Données — IBM Plex Mono</p>
      <p className="mt-3 font-mono text-4xl font-medium tabular-nums text-accent">−30 % · +40 % · 12 structures</p>
      <p className="mt-2 font-mono text-sm text-ink-soft">Figure 01 — Parcelle d'essai variétal, septembre 2025.</p>
    </div>
  </div>
)

export const Echelle = () => (
  <div className="flex flex-col gap-2">
    {[
      ['text-6xl', 'Titre héro — Fraunces 60'],
      ['text-5xl', 'Titre h2 — Fraunces 48'],
      ['text-3xl', 'Titre h3 — Fraunces 30'],
      ['text-lg', 'Chapô — Inter 18'],
      ['text-base', 'Corps — Inter 16'],
      ['text-sm', 'Secondaire — Inter 14'],
      ['text-xs', 'Légende — Mono 12 uppercase'],
    ].map(([size, label]) => (
      <div key={size} className="flex items-baseline justify-between gap-6 border-b border-line py-3">
        <p className={`${size} ${size.startsWith('text-') && ['text-6xl', 'text-5xl', 'text-3xl'].includes(size) ? 'font-display font-medium' : ''} text-ink`}>
          {label.split('—')[1] ?? label}
        </p>
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">{size}</span>
      </div>
    ))}
  </div>
)

export const Mesures = () => (
  <div className="flex flex-col gap-6">
    {[
      { classe: 'text-xs tracking-[0.2em] uppercase', label: 'Eyebrow mono — 12 / capitales / 0.2em' },
      { classe: 'text-2xl font-medium', label: 'Métrique — Mono 24, tabular-nums' },
      { classe: 'text-sm leading-relaxed', label: 'Interluète — Inter 14, interligne 1.7' },
    ].map(({ classe, label }) => (
      <div key={label} className="flex flex-col gap-1.5">
        <p className={`font-mono text-xs uppercase tracking-[0.18em] text-accent ${classe.includes('text-2xl') ? 'not-italic' : ''}`}>
          {classe.includes('text-2xl') ? '−30%' : label.split('—')[0]}
        </p>
        <span className="font-mono text-[10px] text-ink-soft">{label}</span>
      </div>
    ))}
  </div>
)