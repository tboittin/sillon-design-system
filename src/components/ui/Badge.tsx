import type { ReactNode } from 'react'

/* ============================================================================
   Badge — étiquette contextuelle (catégorie, statut, filtre).
   Tonalités : accent (vert forêt), bark (brun), neutral (encre).
   ========================================================================== */

export type BadgeTone = 'accent' | 'bark' | 'neutral'

export interface BadgeProps {
  tone?: BadgeTone
  children: ReactNode
  className?: string
}

const toneClasses: Record<BadgeTone, string> = {
  accent: 'bg-accent-soft text-accent-strong',
  bark: 'bg-bark-soft text-bark-700 dark:text-bark-300',
  neutral: 'bg-ink/8 text-ink-soft',
}

export function Badge({ tone = 'accent', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

/** Pastille de statut (ex. : disponibilité) avec pulsation */
export function StatusDot({ color = 'bg-accent', pulse = true }: { color?: string; pulse?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`size-2 rounded-full ${color} ${pulse ? 'animate-pulse-dot' : ''}`} />
    </span>
  )
}