import { animated } from '@react-spring/web'
import { hero } from '../data/content'
import { ArrowRightIcon, ChevronDownIcon } from '../lib/icons'
import { useSlideIn, useStaggeredSlideIn } from '../hooks'
import { FieldFigure } from './FieldFigure'
import { Button } from './ui/Button'

/* ============================================================================
   Hero — titre serif pleine largeur sur photographie de terrain assombrie,
   légende documentaire, bandeau de chiffres clés.
   Entrée staggered par ressort : titre + chapô + CTA, puis les métriques
   en cascade.
   ========================================================================== */

export function Hero() {
  /* Bloc titre : un seul ressort pour l'ensemble (eyebrow → CTA) */
  const [titleRef, titleSpring] = useSlideIn({ y: 28, rootMargin: '0px' })
  /* Légende + chevron de scroll */
  const [captionRef, captionSpring] = useSlideIn({ y: 12 })
  /* Bandeau de métriques en cascade */
  const [metricsRef, metricsSprings] = useStaggeredSlideIn(hero.metrics.length, {
    y: 24,
    stagger: 120,
    config: { mass: 1, tension: 200, friction: 26 },
  })

  return (
    <section id="accueil" className="relative">
      {/* Photographie de terrain assombrie + grain */}
      <div className="absolute inset-0">
        <FieldFigure variant="field" className="size-full" />
        <div className="absolute inset-0 bg-overlay" />
      </div>

      <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-5 pb-10 pt-32 md:px-8 md:pb-14">
        <animated.div ref={titleRef} style={titleSpring} className="max-w-3xl">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-paper-200/90">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 text-4xl font-medium leading-[1.06] text-paper-50 sm:text-5xl md:text-6xl lg:text-7xl">
            L’agronomie a besoin de{' '}
            <span className="font-light italic text-forest-300">meilleurs</span> outils.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-100/85 md:text-lg">{hero.lead}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#projets" size="lg" iconRight={<ArrowRightIcon />}>
              {hero.ctaPrimary}
            </Button>
            <Button href="#contact" size="lg" variant="outline" className="border-paper-50/40 text-paper-50 hover:border-accent hover:text-accent">
              {hero.ctaSecondary}
            </Button>
          </div>
        </animated.div>

        {/* Légende documentaire + indice de scroll */}
        <animated.div ref={captionRef} style={captionSpring} className="mt-12 flex items-end justify-between gap-6">
          <p className="legend text-paper-100/70">{hero.figureCaption}</p>
          <a
            href="#expertise"
            aria-label="Descendre vers la double expertise"
            className="hidden shrink-0 animate-float-slow text-paper-100/70 transition-colors hover:text-accent sm:block"
          >
            <ChevronDownIcon className="size-6" />
          </a>
        </animated.div>
      </div>

      {/* Bandeau de chiffres clés (sur la surface, hors photo) */}
      <div className="relative border-t border-line bg-surface">
        <div ref={metricsRef} className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-10 sm:grid-cols-3 md:px-8 md:py-12">
          {hero.metrics.map((m, i) => (
            <animated.div key={m.label} style={metricsSprings[i]} className="border-l-2 border-accent/40 pl-5">
              <span className="font-mono text-3xl font-semibold tabular-nums tracking-tight text-accent md:text-4xl">
                {m.value}
              </span>
              <p className="mt-1.5 text-sm leading-snug text-ink-soft">{m.label}</p>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  )
}