import { motion, useReducedMotion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'
import { REVEAL_DURATION, REVEAL_Y, SILLON_EASE, STAGGER_GAP } from '../../lib/motion'

/* ============================================================================
   Reveal — apparition au scroll (fade + léger translate-y), une seule fois.
   Basé sur `whileInView` (IntersectionObserver natif sous le capot).
   Respecte prefers-reduced-motion : le contenu reste simplement visible.
   ----------------------------------------------------------------------------
   - <Reveal>            : bloc unitaire qui se révèle au scroll.
   - <RevealGroup>       : conteneur de stagger (liste à puces, chiffres clés…).
   - <RevealItem>        : enfant d'un RevealGroup, entrée en cascade.
                          (Utilisé seul, il reste visible — dégradation douce.)
   ========================================================================== */

/** Rendu typé commun — évite l'union des composants motion par tag */
type MotionTag = typeof motion.div

const tags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  ul: motion.ul,
  li: motion.li,
  figure: motion.figure,
  header: motion.header,
  footer: motion.footer,
  nav: motion.nav,
  p: motion.p,
  span: motion.span,
  dl: motion.dl,
  dt: motion.dt,
  dd: motion.dd,
  blockquote: motion.blockquote,
  aside: motion.aside,
} as const

export type RevealTag = keyof typeof tags

/* Props DOM minimales de passage (accessibilité, ancres) */
interface DomPassthrough {
  id?: string
  role?: string
  title?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-hidden'?: boolean
}

interface RevealBaseProps extends DomPassthrough {
  as?: RevealTag
  children?: ReactNode
  className?: string
  /** Fraction de l'élément visible qui déclenche l'apparition (0 à 1) */
  amount?: number
}

export interface RevealProps extends RevealBaseProps {
  /** Délai avant l'apparition, en secondes */
  delay?: number
  /** Amplitude du translate-y initial, en pixels */
  y?: number
}

function fadeUpVariants(delay = 0, y = REVEAL_Y): Variants {
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: REVEAL_DURATION, delay, ease: SILLON_EASE },
    },
  }
}

/** Bloc unitaire qui apparaît au scroll : fondu + remontée légère. */
export function Reveal({
  as = 'div',
  children,
  className = '',
  delay = 0,
  y = REVEAL_Y,
  amount = 0.2,
  ...dom
}: RevealProps) {
  const reduce = useReducedMotion()
  const Tag = tags[as] as MotionTag
  if (reduce) return <Tag className={className} {...dom}>{children}</Tag>
  return (
    <Tag
      className={className}
      {...dom}
      variants={fadeUpVariants(delay, y)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </Tag>
  )
}

export interface RevealGroupProps extends RevealBaseProps {
  /** Écart entre deux enfants, en secondes */
  stagger?: number
  /** Délai avant l'entrée du premier enfant, en secondes */
  delayChildren?: number
}

/** Conteneur de stagger : les RevealItem enfants entrent en cascade. */
export function RevealGroup({
  as = 'div',
  children,
  className = '',
  stagger = STAGGER_GAP,
  delayChildren = 0.05,
  amount = 0.15,
  ...dom
}: RevealGroupProps) {
  const reduce = useReducedMotion()
  const Tag = tags[as] as MotionTag
  if (reduce) return <Tag className={className} {...dom}>{children}</Tag>
  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren } },
  }
  return (
    <Tag
      className={className}
      {...dom}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </Tag>
  )
}

export interface RevealItemProps extends RevealBaseProps {}

/** Enfant d'un RevealGroup — même mouvement que Reveal, rythme plus court. */
export function RevealItem({ as = 'div', children, className = '', ...dom }: RevealItemProps) {
  const reduce = useReducedMotion()
  const Tag = tags[as] as MotionTag
  if (reduce) return <Tag className={className} {...dom}>{children}</Tag>
  return (
    <Tag
      className={className}
      {...dom}
      variants={{
        hidden: { opacity: 0, y: REVEAL_Y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: SILLON_EASE },
        },
      }}
    >
      {children}
    </Tag>
  )
}