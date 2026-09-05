import { useSpring } from '@react-spring/web'
import { useEffect, useRef, useState } from 'react'

/* ============================================================================
   useSpringBar — Barre de progression animée par ressort physique.

   Usage :
     const [ref, spring] = useSpringBar(85)
     <div ref={ref}>
       <animated.div style={spring} />
     </div>
   ========================================================================== */

export interface SpringBarOptions {
  config?: { mass?: number; tension?: number; friction?: number }
  delay?: number
  rootMargin?: string
}

export function useSpringBar<T extends HTMLElement = HTMLDivElement>(
  level: number,
  opts: SpringBarOptions = {},
) {
  const { config = { mass: 0.8, tension: 180, friction: 24 }, delay = 0, rootMargin = '-40px' } = opts
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
    from: { width: '0%' as string | number, opacity: 0 },
    to: inView
      ? { width: `${level}%`, opacity: 1 }
      : { width: '0%', opacity: 0 },
    config,
    delay,
  })

  return [ref, spring] as const
}
