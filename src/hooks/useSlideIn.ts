import { useSpring } from '@react-spring/web'
import { useEffect, useRef, useState } from 'react'

/* ============================================================================
   useSlideIn — Scroll-triggered entrance animation via IntersectionObserver.

   Utilise `useInView` de React Spring en mode options (retourne un booléen)
   puis déclenche un `useSpring` manuellement pour un typage propre.
   ========================================================================== */

export interface SlideInOptions {
  /** Décalage vertical initial en px (défaut: 24) */
  y?: number
  /** Opacité initiale (défaut: 0) */
  opacity?: number
  /** Configuration du ressort (masse, tension, friction) */
  config?: { mass?: number; tension?: number; friction?: number }
  /** rootMargin pour IntersectionObserver */
  rootMargin?: string
  /** Délai avant le déclenchement du ressort en ms (enchaînement) */
  delay?: number
}

const defaultConfig = { mass: 1, tension: 220, friction: 26 }

export function useSlideIn<T extends HTMLElement = HTMLDivElement>(opts: SlideInOptions = {}) {
  const { y = 24, opacity: fromOpacity = 0, config = defaultConfig, rootMargin = '-40px', delay = 0 } = opts
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  const spring = useSpring({
    from: { opacity: fromOpacity, y },
    to: inView ? { opacity: 1, y: 0 } : { opacity: fromOpacity, y },
    config,
    delay,
  })

  return [ref, spring] as const
}
