import type { Project } from '../data/content'
import { projects } from '../data/content'
import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  LayersIcon,
  UserIcon,
  ChartBarsIcon,
  FurrowMark,
} from '../lib/icons'
import { Breadcrumb } from '../components/ui/Breadcrumb'
import { FieldFigure } from '../components/FieldFigure'
import { Metric } from '../components/ui/Metric'
import { Tag } from '../components/ui/Tag'
import { ProjectNav } from '../components/ui/Pagination'
import { Reveal, RevealGroup, RevealItem } from '../components/ui/Reveal'

/* ============================================================================
   ProjectPage — gabarit d'étude de cas :
   fil d'Ariane -> en-tête (client, durée) -> grande image -> contexte ->
   objectifs -> solutions techniques -> résultats (métriques + graphique) ->
   outils utilisés -> navigation précédent/suivant.
   Reveals au scroll (fade + léger translate-y) ; les listes à puces et les
   encadrés de résultats entrent en cascade discrète.
   ========================================================================== */

interface ChartBarProps {
  data: { label: string; value: number }[]
}

function ResultsChart({ data }: ChartBarProps) {
  const max = Math.max(...data.map((d) => d.value))
  return (
    <div className="rounded-2xl border border-line bg-surface-raised p-6 md:p-8">
      <div className="flex items-center gap-2.5">
        <ChartBarsIcon className="size-5 text-accent" />
        <h3 className="font-display text-lg font-medium text-ink">Résultats dans le temps</h3>
      </div>
      <div className="mt-8 flex h-48 items-end gap-6 px-2 md:gap-10" role="img" aria-label="Graphique des résultats par période">
        {data.map((d, i) => (
          <div key={d.label} className="group flex h-full flex-1 flex-col items-center justify-end gap-3">
            <span className="font-mono text-sm tabular-nums text-accent opacity-0 transition-opacity group-hover:opacity-100">
              {d.value}
            </span>
            <div
              className="w-full origin-bottom animate-grow-bar rounded-t-lg bg-gradient-to-t from-accent to-forest-300 transition-all group-hover:opacity-80"
              style={{ height: `${(d.value / max) * 100}%`, animationDelay: `${0.2 + i * 0.12}s` }}
            />
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">{d.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
        Lecture : période en abscisse, valeur indexée en ordonnée.
      </p>
    </div>
  )
}

export interface ProjectPageProps {
  /** Slug du projet à afficher (défaut : le premier de la liste) */
  slug?: string
}

export function ProjectPage({ slug }: ProjectPageProps) {
  const index = Math.max(0, projects.findIndex((p) => p.slug === slug))
  const project: Project = projects[index] ?? projects[0]
  const previous = projects[index - 1]
  const next = projects[index + 1]

  return (
    <article className="bg-surface">
      {/* En-tête */}
      <Reveal as="header" className="border-b border-line bg-surface-sunken pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '#' },
              { label: 'Projets', href: '#projets' },
              { label: project.title },
            ]}
            className="justify-start"
          />

          <p className="mt-8 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <FurrowMark className="size-4" />
            {project.category} — {project.year}
          </p>

          <h1 className="mt-5 text-4xl font-medium leading-[1.08] text-ink md:text-6xl">{project.title}</h1>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <div className="flex items-center gap-2.5">
              <UserIcon className="size-4.5 text-ink-soft" />
              <dt className="legend text-ink-soft">Client</dt>
              <dd className="text-sm font-medium text-ink">{project.client}</dd>
            </div>
            <div className="flex items-center gap-2.5">
              <ClockIcon className="size-4.5 text-ink-soft" />
              <dt className="legend text-ink-soft">Durée</dt>
              <dd className="text-sm font-medium text-ink">{project.duration}</dd>
            </div>
            <div className="flex items-center gap-2.5">
              <CalendarIcon className="size-4.5 text-ink-soft" />
              <dt className="legend text-ink-soft">Année</dt>
              <dd className="text-sm font-medium text-ink">{project.year}</dd>
            </div>
          </dl>
        </div>
      </Reveal>

      {/* Grande image */}
      <Reveal as="figure" className="relative">
        <FieldFigure variant={project.figure} className="h-[42vh] w-full md:h-[62vh]" />
        <figcaption className="mx-auto max-w-4xl px-5 py-4 md:px-8">
          <span className="legend text-ink-soft">{project.figureCaption}</span>
        </figcaption>
      </Reveal>

      <div className="mx-auto max-w-4xl px-5 pb-24 pt-6 md:px-8 md:pb-32">
        {/* Contexte */}
        <Reveal as="section" aria-labelledby="contexte">
          <p className="legend text-accent">01 — Contexte</p>
          <p id="contexte" className="mt-4 text-lg leading-relaxed text-ink md:text-xl">
            {project.contexte}
          </p>
        </Reveal>

        {/* Objectifs */}
        <Reveal as="section" aria-labelledby="objectifs" className="mt-16">
          <p className="legend text-accent">02 — Objectifs</p>
          <h2 id="objectifs" className="mt-4 font-display text-2xl font-medium text-ink md:text-3xl">
            Ce que le projet devait résoudre
          </h2>
          <RevealGroup as="ul" className="mt-7 flex flex-col gap-4" stagger={0.08}>
            {project.objectifs.map((o) => (
              <RevealItem as="li" key={o} className="flex items-start gap-3.5 rounded-xl border border-line bg-surface-raised p-5 text-[15px] leading-relaxed text-ink">
                <CheckIcon className="mt-1 size-5 shrink-0 text-accent" />
                {o}
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>

        {/* Solutions */}
        <Reveal as="section" aria-labelledby="solutions" className="mt-16">
          <p className="legend text-accent">03 — Solutions techniques</p>
          <h2 id="solutions" className="mt-4 font-display text-2xl font-medium text-ink md:text-3xl">
            Les choix de conception
          </h2>
          <RevealGroup as="div" className="mt-7 flex flex-col gap-4" stagger={0.08} delayChildren={0.1}>
            {project.solutions.map((s, i) => (
              <RevealItem as="p" key={s} className="flex items-start gap-3.5 text-[15px] leading-relaxed text-ink-soft">
                <span className="mt-0.5 font-mono text-sm tabular-nums text-accent">{String(i + 1).padStart(2, '0')}</span>
                {s}
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>

        {/* Résultats */}
        <Reveal as="section" aria-labelledby="resultats" className="mt-16">
          <p className="legend text-accent">04 — Résultats mesurés</p>
          <h2 id="resultats" className="mt-4 font-display text-2xl font-medium text-ink md:text-3xl">
            Des effets chiffrés
          </h2>
          <RevealGroup as="div" className="mt-8 grid gap-8 md:grid-cols-[1fr_1.15fr] md:items-start" stagger={0.12}>
            <RevealItem as="div" className="flex flex-col gap-6 rounded-2xl border border-line bg-surface-raised p-6 md:p-8">
              {project.resultats.map((r) => (
                <Metric key={r.label} value={r.value} label={r.label} detail={r.detail} />
              ))}
            </RevealItem>
            <RevealItem as="div">
              <ResultsChart data={project.chart} />
            </RevealItem>
          </RevealGroup>
        </Reveal>

        {/* Outils */}
        <Reveal as="section" aria-labelledby="outils" className="mt-16">
          <p className="legend text-accent">05 — Outils utilisés</p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {project.outils.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        </Reveal>

        {/* Précédent / suivant */}
        <ProjectNav
          previous={previous ? { title: previous.title, slug: previous.slug } : undefined}
          next={next ? { title: next.title, slug: next.slug } : undefined}
          className="mt-20"
        />

        <p className="mt-8 flex items-center gap-2 font-mono text-xs text-ink-soft">
          <LayersIcon className="size-4" />
          Étude de cas {index + 1} / {projects.length} — Sillon
        </p>
      </div>
    </article>
  )
}