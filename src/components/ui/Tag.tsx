import type { ReactNode } from 'react'

/* ============================================================================
   Tag — puce technique (outils utilisés sur la page projet).
   ========================================================================== */

export interface TagProps {
  children: ReactNode
  className?: string
}

export function Tag({ children, className = '' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-line bg-surface-raised px-2.5 py-1 font-mono text-xs text-ink-soft ${className}`}
    >
      {children}
    </span>
  )
}