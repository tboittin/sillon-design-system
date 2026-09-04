import type { ReactNode } from 'react'
import { FurrowMark } from '../../lib/icons'

/* ============================================================================
   SectionHeader — sur-titre mono (eyebrow) + titre serif + chapô.
   Signature éditoriale Sillon : petit sillon décoratif avant l'eyebrow.
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
  return (
    <header className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      <p
        className={`flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-accent ${
          centered ? 'justify-center' : ''
        }`}
      >
        <FurrowMark className="size-4" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl leading-tight text-ink md:text-5xl md:leading-[1.08]">{title}</h2>
      {lead && <p className={`mt-5 text-base leading-relaxed text-ink-soft md:text-lg ${centered ? 'mx-auto max-w-xl' : ''}`}>{lead}</p>}
    </header>
  )
}