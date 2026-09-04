import type { Project } from '../data/content'
import { ArrowUpRightIcon, ChartBarsIcon, MapIcon, SproutIcon } from '../lib/icons'
import { FieldFigure, type FigureVariant } from './FieldFigure'

/* ============================================================================
   ProjectCard — carte d'étude de cas : image, meta, titre, description,
   métrique clé, lien. Interaction : zoom image + flèche.
   ========================================================================== */

const figureIcon: Record<FigureVariant, typeof SproutIcon> = {
  field: SproutIcon,
  plots: MapIcon,
  macro: SproutIcon,
  data: ChartBarsIcon,
}

export interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const FigureIcon = figureIcon[project.figure]
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface-raised shadow-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${className}`}
    >
      {/* Visuel */}
      <a href={`#${project.slug}`} className="relative block aspect-[4/3] overflow-hidden" aria-hidden="true" tabIndex={-1}>
        <FieldFigure variant={project.figure} className="size-full transition-transform duration-500 group-hover:scale-[1.04]" />
        <span className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-full bg-paper-50/90 text-accent backdrop-blur-sm">
          <FigureIcon className="size-4.5" />
        </span>
      </a>

      {/* Corps */}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="legend text-ink-soft">
          {project.year} — {project.client}
        </p>
        <h3 className="mt-3 font-display text-2xl font-medium leading-snug text-ink">
          <a href={`#${project.slug}`} className="transition-colors group-hover:text-accent">
            {project.title}
          </a>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.description}</p>

        {/* Métrique clé */}
        <div className="mt-5 flex items-baseline gap-3 border-t border-line pt-5">
          <span className="font-mono text-2xl font-semibold tabular-nums tracking-tight text-accent">
            {project.metric.value}
          </span>
          <span className="text-xs uppercase tracking-[0.14em] text-ink-soft">{project.metric.label}</span>
        </div>

        <span className="mt-auto flex items-center gap-2 pt-6 font-mono text-xs uppercase tracking-[0.16em] text-ink-soft transition-colors group-hover:text-accent">
          Étude de cas
          <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  )
}