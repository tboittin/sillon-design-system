import type { Variants } from 'motion/react'

/* ============================================================================
   Système de mouvement Sillon — reveals au scroll sobres.
   Règles : fade + léger translate-y, une seule fois, pas de fioritures.
   La courbe reprend le easing déjà utilisé par les keyframes CSS du DS
   (--animate-rise, --animate-grow-bar : cubic-bezier(0.22, 1, 0.36, 1)).
   ========================================================================== */

/** Courbe d'easing maison — identique aux animations CSS du DS */
export const SILLON_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

/** Durée d'un reveal simple, en secondes */
export const REVEAL_DURATION = 0.6

/** Amplitude du translate-y initial d'un reveal, en pixels */
export const REVEAL_Y = 16

/** Écart entre deux enfants d'un stagger, en secondes */
export const STAGGER_GAP = 0.08

/** Reveal unitaire : fondu + remontée légère, une seule fois */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: REVEAL_Y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: SILLON_EASE },
  },
}

/**
 * Conteneur de stagger — les enfants (RevealItem) entrent en cascade.
 * Un enfant légèrement plus rapide que le parent pour rester discret.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: STAGGER_GAP, delayChildren: 0.05 } },
}

/** Enfant d'un RevealGroup — même mouvement que fadeUp, rythme plus court */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: REVEAL_Y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: SILLON_EASE },
  },
}