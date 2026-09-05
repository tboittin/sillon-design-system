import { useSprings } from '@react-spring/web'
import { useEffect, useRef, useState } from 'react'

/* ============================================================================
   useStaggeredSlideIn — Entrée décalée pour une liste d'enfants.

   Usage :
     const [ref, springs] = useStaggeredSlideIn(items.length)
     <div ref={ref}>
       {springs.map((style, i) => (
         <animated.div key={i} style={style}>{items[i]}</animated.div>
       ))}
     </div>
   ========================================================================== */

export interface StaggeredOptions {
  y?: number
  opacity?: number
  stagger?: number
  config?: { mass?: number; tension?: number; friction?: number }
  rootMargin?: string
}

const defaultConfig = { mass: 1, tension: 240, friction: 28 }

export function useStaggeredSlideIn<T extends HTMLElement = HTMLDivElement>(
  count: number,
  opts: StaggeredOptions = {},
) {
  const { y = 20, opacity: fromOpacity = 0, stagger = 80, config = defaultConfig, rootMargin = '-40px' } = opts
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

  const [springs] = useSprings(
    count,
    (i) => ({
      from: { opacity: fromOpacity, y },
      to: inView ? { opacity: 1, y: 0 } : { opacity: fromOpacity, y },
      config,
      delay: i * stagger,
    }),
    [inView],
  )

  return [ref, springs] as const
}
