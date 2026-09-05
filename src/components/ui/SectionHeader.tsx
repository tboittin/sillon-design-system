import { animated } from '@react-spring/web'
import type { ReactNode } from 'react'
import { FurrowMark } from '../../lib/icons'
import { useSlideIn } from '../../hooks'

/* ============================================================================
   SectionHeader — sur-titre mono (eyebrow) + titre serif + chapô.
   Signature éditoriale Sillon : petit sillon décoratif avant l'eyebrow.
   Entrée en trois temps (eyebrow → titre → chapô) via React Spring.
   ========================================================================== */

export interface SectionHeaderProps {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ eyebrow, title, lead, align = 'left', className = '' }: SectionHeaderProps) {
  const centered = align === 'center'
  const [eyebrowRef, eyebrowSpring] = useSlideIn<HTMLParagraphElement>({ y: 16, config: { mass: 1, tension: 260, friction: 30 } })
  const [titleRef, titleSpring] = useSlideIn<HTMLHeadingElement>({ y: 20, delay: 70 })
  const [leadRef, leadSpring] = useSlideIn<HTMLParagraphElement>({ y: 16, delay: 140, config: { mass: 1, tension: 200, friction: 28 } })

  return (
    <header className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      <animated.p
        ref={eyebrowRef}
        style={eyebrowSpring}
        className={`flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-accent ${
          centered ? 'justify-center' : ''
        }`}
      >
        <FurrowMark className="size-4" />
        {eyebrow}
      </animated.p>
      <animated.h2 ref={titleRef} style={titleSpring} className="mt-4 text-3xl leading-tight text-ink md:text-5xl md:leading-[1.08]">
        {title}
      </animated.h2>
      {lead && (
        <animated.p
          ref={leadRef}
          style={leadSpring}
          className={`mt-5 text-base leading-relaxed text-ink-soft md:text-lg ${centered ? 'mx-auto max-w-xl' : ''}`}
        >
          {lead}
        </animated.p>
      )}
    </header>
  )
}