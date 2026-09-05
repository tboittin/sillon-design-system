import { animated } from '@react-spring/web'
import { expertise } from '../data/content'
import { CheckIcon, iconMap, FurrowMark } from '../lib/icons'
import { useSlideIn, useOscillate } from '../hooks'
import { SectionHeader } from './ui/SectionHeader'

/* ============================================================================
   DoubleExpertise — deux colonnes (agronome / développeur) reliées par un
   sillon : la ligne qui traverse et la semence au centre.
   Les cartes glissent depuis les bords ; la semence oscille doucement.
   ========================================================================== */

export function DoubleExpertise() {
  const [leftRef, leftSpring] = useSlideIn<HTMLElement>({ y: 32, rootMargin: '-60px' })
  const [rightRef, rightSpring] = useSlideIn<HTMLElement>({ y: 32, config: { mass: 1, tension: 200, friction: 28 } })
  const seedSpring = useOscillate({ range: 2.5, axis: 'rotate', mass: 0.6 })

  return (
    <section id="expertise" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow={expertise.eyebrow} title={expertise.title} lead={expertise.lead} />

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-8">
          {/* Ingénieur agronome */}
          <animated.article
            ref={leftRef}
            style={leftSpring}
            className="flex flex-col rounded-2xl border border-line bg-surface-raised p-7 shadow-paper md:p-9"
          >
            <div className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                {(() => {
                  const Icon = iconMap[expertise.left.icon]
                  return <Icon className="size-6" />
                })()}
              </span>
              <h3 className="font-display text-2xl font-medium text-ink">{expertise.left.title}</h3>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft md:text-base">{expertise.left.description}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {expertise.left.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-snug text-ink">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </animated.article>

          {/* Le sillon connecteur */}
          <div className="flex items-center justify-center md:flex-col" aria-hidden="true">
            <div className="relative h-full w-px bg-line md:h-px md:w-24">
              <animated.span style={seedSpring} className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface">
                <FurrowMark className="size-4 text-accent" />
              </animated.span>
            </div>
          </div>

          {/* Développeur web */}
          <animated.article
            ref={rightRef}
            style={rightSpring}
            className="flex flex-col rounded-2xl border border-line bg-surface-raised p-7 shadow-paper md:p-9"
          >
            <div className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-full bg-bark-soft text-bark-600 dark:text-bark-300">
                {(() => {
                  const Icon = iconMap[expertise.right.icon]
                  return <Icon className="size-6" />
                })()}
              </span>
              <h3 className="font-display text-2xl font-medium text-ink">{expertise.right.title}</h3>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft md:text-base">{expertise.right.description}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {expertise.right.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-snug text-ink">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </animated.article>
        </div>

        <p className="mt-8 text-center font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
          {expertise.connectorNote}
        </p>
      </div>
    </section>
  )
}