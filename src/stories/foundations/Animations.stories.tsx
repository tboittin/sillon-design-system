import type { Meta } from '@storybook/react'
import { REVEAL_DURATION, REVEAL_Y, SILLON_EASE, STAGGER_GAP } from '../../lib/motion'

const meta: Meta = {
  title: 'Fondations/Animations',
  parameters: { layout: 'padded' },
}
export default meta

const easingPoints = SILLON_EASE.map((v) => v.toFixed(2)).join(', ')

export const TokensDeMouvement = () => (
  <div className="flex flex-col gap-10">
    <section>
      <h2 className="mb-4 font-display text-lg text-ink">Motion — reveals au scroll</h2>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink-soft">
        Les reveals au scroll (primitives <code className="font-mono text-xs">Reveal</code>,{' '}
        <code className="font-mono text-xs">RevealGroup</code>,{' '}
        <code className="font-mono text-xs">RevealItem</code>) sont pilotés par{' '}
        <code className="font-mono text-xs">motion</code> + IntersectionObserver natif : fade + léger
        translate-y, une seule fois. Les tokens vivent dans{' '}
        <code className="font-mono text-xs">src/lib/motion.ts</code>.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['SILLON_EASE', `cubic-bezier(${easingPoints})`, 'Courbe d’easing — identique aux keyframes CSS du DS'],
          ['REVEAL_DURATION', `${REVEAL_DURATION}s`, 'Durée d’un reveal simple'],
          ['REVEAL_Y', `${REVEAL_Y}px`, 'Amplitude du translate-y initial'],
          ['STAGGER_GAP', `${STAGGER_GAP}s`, 'Écart entre deux enfants d’un stagger'],
        ].map(([token, value, note]) => (
          <div key={token} className="rounded-xl border border-line bg-surface-raised p-4">
            <p className="font-mono text-sm text-accent">{token}</p>
            <p className="mt-1 font-mono text-xs text-ink">{value}</p>
            <p className="mt-2 text-xs leading-snug text-ink-soft">{note}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="mb-4 font-display text-lg text-ink">Keyframes CSS — ambiances décoratives</h2>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink-soft">
        Les animations continues et légères restent en CSS (<code className="font-mono text-xs">@theme</code>{' '}
        dans <code className="font-mono text-xs">index.css</code>) : elles ne bloquent pas le JS et
        respectent les performances.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['animate-rise', 'rise 0.7s — entrée verticale avec fondu'],
          ['animate-pulse-dot', 'pulse-dot 2.4s — pulsation d’une pastille de statut'],
          ['animate-grow-bar', 'grow-bar 1.1s — remplissage de barre (compétences)'],
          ['animate-float-slow', 'float 6s — flottement vertical doux (chevron)'],
        ].map(([classe, note]) => (
          <div key={classe} className="rounded-xl border border-line bg-surface-raised p-4">
            <p className="font-mono text-sm text-accent">{classe}</p>
            <p className="mt-2 text-xs leading-snug text-ink-soft">{note}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="mb-4 font-display text-lg text-ink">Règle d’usage</h2>
      <ul className="flex max-w-2xl flex-col gap-3">
        {[
          'Motion (Reveal*) pour tout ce qui réagit au scroll : apparitions, cascades discrètes.',
          'Keyframes CSS pour les ambiances permanentes : flottement, pulsation, remplissage.',
          'Pas de fioritures : fade + léger translate-y, une seule fois, respect de prefers-reduced-motion.',
        ].map((regle) => (
          <li key={regle} className="flex items-start gap-3 text-sm leading-relaxed text-ink">
            <span className="mt-0.5 size-4 shrink-0 rounded-full bg-accent-soft text-center font-mono text-[10px] leading-4 text-accent-strong">
              ✓
            </span>
            {regle}
          </li>
        ))}
      </ul>
    </section>
  </div>
)