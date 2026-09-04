/* ============================================================================
   Pagination — deux variantes :
   - 'pages'   : numérotation 1 2 3 … (liste de projets)
   - 'project' : précédent / suivant avec titres (récit d'études de cas)
   ========================================================================== */

import { ArrowLeftIcon, ArrowRightIcon } from '../../lib/icons'
import type { ReactNode } from 'react'

function PageButton({ active = false, children, className = '' }: { active?: boolean; children: ReactNode; className?: string }) {
  return (
    <a
      href="#"
      aria-current={active ? 'page' : undefined}
      className={`inline-flex size-10 items-center justify-center rounded-full border font-mono text-sm transition-all ${className} ${
        active
          ? 'border-accent bg-accent text-paper-50'
          : 'border-line text-ink-soft hover:border-accent hover:text-accent'
      }`}
    >
      {children}
    </a>
  )
}

export interface PagesPaginationProps {
  total: number
  current: number
  className?: string
}

export function PagesPagination({ total, current, className = '' }: PagesPaginationProps) {
  return (
    <nav aria-label="Pagination des projets" className={`flex items-center justify-center gap-2 ${className}`}>
      <PageButton className="!border-0" aria-label="Page précédente">
        <ArrowLeftIcon className="size-4" />
      </PageButton>
      {Array.from({ length: total }, (_, i) => (
        <PageButton key={i + 1} active={i + 1 === current}>
          {i + 1}
        </PageButton>
      ))}
      <PageButton className="!border-0" aria-label="Page suivante">
        <ArrowRightIcon className="size-4" />
      </PageButton>
    </nav>
  )
}

export interface ProjectNavProps {
  previous?: { title: string; slug: string }
  next?: { title: string; slug: string }
  className?: string
}

export function ProjectNav({ previous, next, className = '' }: ProjectNavProps) {
  return (
    <nav aria-label="Projet précédent et suivant" className={`grid gap-4 sm:grid-cols-2 ${className}`}>
      {previous ? (
        <a
          href={`#${previous.slug}`}
          className="group flex flex-col gap-1 rounded-2xl border border-line bg-surface-raised p-6 transition-all hover:border-accent/50 hover:shadow-paper"
        >
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
            <ArrowLeftIcon className="size-4 transition-transform group-hover:-translate-x-1" />
            Projet précédent
          </span>
          <span className="font-display text-lg text-ink group-hover:text-accent">{previous.title}</span>
        </a>
      ) : (
        <span className="hidden sm:block" />
      )}
      {next ? (
        <a
          href={`#${next.slug}`}
          className="group flex flex-col items-end gap-1 rounded-2xl border border-line bg-surface-raised p-6 text-right transition-all hover:border-accent/50 hover:shadow-paper"
        >
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
            Projet suivant
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="font-display text-lg text-ink group-hover:text-accent">{next.title}</span>
        </a>
      ) : (
        <span className="hidden sm:block" />
      )}
    </nav>
  )
}