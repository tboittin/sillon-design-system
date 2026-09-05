import { useSpring } from '@react-spring/web'

/* ============================================================================
   useOscillate — Oscillation continue sur un axe (feuille, graine, semence).

   Usage :
     const spring = useOscillate({ range: 4, axis: 'x' })
     <animated.span style={spring}>🍃</animated.span>
   ========================================================================== */

export interface OscillateOptions {
  /** Amplitude (px pour translate, deg pour rotate) */
  range?: number
  /** Axe d'oscillation */
  axis?: 'x' | 'y' | 'rotate'
  /** Masse du ressort (0.3-0.8 pour léger, 1+ pour lourd) */
  mass?: number
}

export function useOscillate({
  range = 3,
  axis = 'x',
  mass = 0.5,
}: OscillateOptions = {}) {
  const transformFrom =
    axis === 'rotate'
      ? `rotate(-${range}deg)`
      : `translate${axis.toUpperCase()}(${-range}px)`

  const transformTo =
    axis === 'rotate'
      ? `rotate(${range}deg)`
      : `translate${axis.toUpperCase()}(${range}px)`

  return useSpring({
    loop: { reverse: true },
    from: { transform: transformFrom },
    to: { transform: transformTo },
    config: { mass, tension: 120, friction: 8 },
  })
}

/* ---------------------------------------------------------------------------
   Oscillation 2D (balancement naturel, ex: feuille au vent).
   ------------------------------------------------------------------------ */

export function useOscillate2D(opts: {
  xRange?: number
  yRange?: number
  rotateRange?: number
  mass?: number
} = {}) {
  const { xRange = 2, yRange = 3, rotateRange = 1.5, mass = 0.4 } = opts
  return useSpring({
    loop: { reverse: true },
    from: {
      transform: `translate(${-xRange}px, ${-yRange}px) rotate(${-rotateRange}deg)`,
    },
    to: {
      transform: `translate(${xRange}px, ${yRange}px) rotate(${rotateRange}deg)`,
    },
    config: { mass, tension: 100, friction: 10 },
  })
}
