import type { ReactNode } from 'react'

/* ============================================================================
   Metric — donnée chiffrée mise en scène (monospace, aspect « data »).
   ========================================================================== */

export interface MetricProps {
  value: ReactNode
  label: ReactNode
  detail?: ReactNode
  size?: 'md' | 'lg' | 'xl'
  className?: string
}

const valueSize: Record<NonNullable<MetricProps['size']>, string> = {
  md: 'text-3xl',
  lg: 'text-4xl md:text-5xl',
  xl: 'text-5xl md:text-6xl',
}

export function Metric({ value, label, detail, size = 'lg', className = '' }: MetricProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <span className={`font-mono font-medium tabular-nums tracking-tight text-accent ${valueSize[size]}`}>
        {value}
      </span>
      <span className="text-sm leading-snug text-ink">{label}</span>
      {detail && <span className="font-mono text-xs text-ink-soft">{detail}</span>}
    </div>
  )
}