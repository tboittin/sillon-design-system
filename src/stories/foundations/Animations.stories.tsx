import { animated } from '@react-spring/web'
import type { Meta } from '@storybook/react'
import { useOscillate, useOscillate2D, useSlideIn, useSpringBar, useStaggeredSlideIn } from '../../hooks'

/* ============================================================================
   Fondations — Animations
   Deux familles :
   - React Spring (hooks) : entrées au scroll, cascades, oscillations.
   - Keyframes CSS (tokens Tailwind) : animations décoratives continues.
   ========================================================================== */

const meta: Meta = {
  title: 'Fondations/Animations',
  parameters: { layout: 'padded' },
}
export default meta

/* ---------------------------------------------------------------------------
   React Spring — useSlideIn : apparition au scroll
   ------------------------------------------------------------------------ */

export function SlideIn() {
  const [ref, spring] = useSlideIn({ y: 40 })
  return (
    <div className="flex flex-col gap-4">
      <p className="legend text-accent">useSlideIn — apparition au scroll</p>
      <p className="text-sm text-ink-soft">Faites défiler jusqu’à la carte : elle glisse vers le haut avec un ressort naturel.</p>
      <div className="min-h-[80vh] flex items-end">
        <animated.div
          ref={ref}
          style={spring}
          className="w-full rounded-2xl border border-line bg-surface-raised p-8 shadow-paper"
        >
          <p className="font-display text-2xl font-medium text-ink">Une carte qui apparaît en glissant</p>
          <p className="mt-2 text-sm text-ink-soft">Config par défaut : masse 1, tension 220, friction 26 — un retour souple, sans rebond excessif.</p>
        </animated.div>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------------------
   React Spring — useStaggeredSlideIn : cascade d'enfants
   ------------------------------------------------------------------------ */

export function Staggered() {
  const [ref, springs] = useStaggeredSlideIn<HTMLUListElement>(5, { y: 20, stagger: 90 })
  return (
    <div className="flex flex-col gap-4">
      <p className="legend text-accent">useStaggeredSlideIn — cascade d’enfants</p>
      <ul ref={ref} className="flex flex-col gap-3">
        {['—30 % de temps de saisie', '12 structures accompagnées', '8 ans entre le champ et le code', '40 sondes en un tableau de bord', '+120 essais partagés'].map((item, i) => (
          <animated.li
            key={item}
            style={springs[i]}
            className="flex items-center gap-3 rounded-xl border border-line bg-surface-raised px-5 py-4 text-sm text-ink"
          >
            <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
            {item}
          </animated.li>
        ))}
      </ul>
    </div>
  )
}

/* ---------------------------------------------------------------------------
   React Spring — useOscillate : balancement continu
   ------------------------------------------------------------------------ */

export function Oscillations() {
  const xSpring = useOscillate({ range: 4, axis: 'x' })
  const ySpring = useOscillate({ range: 6, axis: 'y', mass: 0.8 })
  const rotSpring = useOscillate({ range: 5, axis: 'rotate' })
  const twoDSpring = useOscillate2D({ xRange: 3, yRange: 4, rotateRange: 2.5 })

  const items = [
    { spring: xSpring, label: 'axe x — feuille qui oscille' },
    { spring: ySpring, label: 'axe y — flottement vertical' },
    { spring: rotSpring, label: 'rotation — semence qui balance' },
    { spring: twoDSpring, label: '2D — balancement naturel (feuille au vent)' },
  ]

  return (
    <div className="flex flex-col gap-6">
      <p className="legend text-accent">useOscillate — balancement continu</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map(({ spring, label }) => (
          <div key={label} className="flex items-center gap-5 rounded-2xl border border-line bg-surface-raised p-6">
            <animated.div
              style={spring}
              className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="size-7">
                <path d="M5 19C5 9 12 4 20 4c0 8-5 15-15 15Z" />
                <path d="M5 19c2.5-5 6-8.5 10-10.5" />
              </svg>
            </animated.div>
            <div>
              <p className="font-mono text-xs text-ink">{label}</p>
              <p className="mt-1 text-xs text-ink-soft">
                {label.includes('2D') ? 'translate + rotate combinés' : 'boucle infinie, inversion douce'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------------------
   React Spring — useSpringBar : remplissage par ressort
   ------------------------------------------------------------------------ */

export function SpringBars() {
  const levels = [30, 55, 75, 90]
  return (
    <div className="flex flex-col gap-4">
      <p className="legend text-accent">useSpringBar — remplissage par ressort physique</p>
      <p className="text-sm text-ink-soft">
        La barre se remplit avec une physique de ressort — on sent « l’élan » au départ puis le ralentissement.
      </p>
      <div className="flex flex-col gap-6 rounded-2xl border border-line bg-surface-raised p-6">
        {levels.map((level, i) => (
          <SpringBarDemo key={level} level={level} delay={i * 150} />
        ))}
      </div>
    </div>
  )
}

function SpringBarDemo({ level, delay }: { level: number; delay: number }) {
  const [ref, spring] = useSpringBar<HTMLDivElement>(level, { delay, config: { mass: 0.9, tension: 200, friction: 28 } })
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-ink">Compétence — {level}%</span>
        <span className="font-mono text-sm tabular-nums text-accent">{level}%</span>
      </div>
      <div ref={ref} className="mt-2 h-2.5 overflow-hidden rounded-full bg-ink/10">
        <animated.div style={spring} className="h-full rounded-full bg-accent" />
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------------------
   Keyframes CSS — tokens décoratifs
   ------------------------------------------------------------------------ */

const cssAnimations = [
  { classe: 'animate-float-slow', label: 'flottement vertical (chevron de scroll)' },
  { classe: 'animate-sway', label: 'balancement horizontal (feuille)' },
  { classe: 'animate-sway-rotate', label: 'balancement + rotation (semence)' },
  { classe: 'animate-drift', label: 'dérive lente (nuage, particule)' },
  { classe: 'animate-shimmer', label: 'scintillement subtil (reflet)' },
  { classe: 'animate-pulse-dot', label: 'pulsation (pastille de statut)' },
  { classe: 'animate-spin-slow', label: 'rotation lente (icône data)' },
]

export function TokensCSS() {
  return (
    <div className="flex flex-col gap-4">
      <p className="legend text-accent">Tokens CSS — keyframes décoratifs continus</p>
      <div className="flex flex-col">
        {cssAnimations.map(({ classe, label }) => (
          <div key={classe} className="flex items-center justify-between gap-6 border-b border-line py-4">
            <div className="flex items-center gap-5">
              <span className={`${classe} flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent`} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="size-5">
                  <path d="M12 22V9" />
                  <path d="M12 9c0-2.4 1.6-4 4-4 .1 2.4-1.6 4-4 4Z" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-medium text-ink">{label}</p>
                <p className="font-mono text-[11px] text-ink-soft">{classe}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}