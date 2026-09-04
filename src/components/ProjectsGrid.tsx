import { projects } from '../data/content'
import { ProjectCard } from './ProjectCard'
import { SectionHeader } from './ui/SectionHeader'
import { PagesPagination } from './ui/Pagination'

/* ============================================================================
   ProjectsGrid — projets sélectionnés présentés en études de cas.
   ========================================================================== */

export const projectsSection = {
  eyebrow: 'Études de cas',
  title: 'Des projets qui ont pris racine.',
  lead: 'Quatre réalisations récentes, du relevé de terrain à la plateforme de données. Chaque étude de cas documente le contexte, les choix techniques et les résultats mesurés.',
}

export function ProjectsGrid() {
  return (
    <section id="projets" className="scroll-mt-24 bg-surface-sunken py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow={projectsSection.eyebrow} title={projectsSection.title} lead={projectsSection.lead} className="mx-auto text-center [&>p:first-child]:justify-center" />

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <PagesPagination total={3} current={1} className="mt-14" />
      </div>
    </section>
  )
}