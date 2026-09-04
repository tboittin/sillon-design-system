import type { ReactNode } from 'react'

/* ============================================================================
   Breadcrumb — fil d'Ariane (Accueil / Projets / Cahier de champ).
   Séparateur mono, page courante non cliquable.
   ========================================================================== */

export interface Crumb {
  label: string
  href?: string
}

export interface BreadcrumbProps {
  items: Crumb[]
  className?: string
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Fil d’Ariane" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-ink-soft">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-x-2">
              {i > 0 && <span aria-hidden="true" className="text-ink/30">/</span>}
              {item.href && !isLast ? (
                <a href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </a>
              ) : (
                <span className={isLast ? 'text-ink' : ''} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/* Encapsulation pratique pour une liste d'étapes d'un récit (ex. : parcours) */
export function StepList({ steps, children }: { steps: string[]; children: ReactNode }) {
  return (
    <div>
      <ol className="flex flex-col gap-1 font-mono text-xs text-ink-soft">
        {steps.map((s, i) => (
          <li key={s}>
            <span className="mr-2 text-accent">{String(i + 1).padStart(2, '0')}</span>
            {s}
          </li>
        ))}
      </ol>
      {children}
    </div>
  )
}