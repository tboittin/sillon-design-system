import { projects } from '../data/content'
import { ProjectCard } from './ProjectCard'
import { SectionHeader } from './ui/SectionHeader'
import { PagesPagination } from './ui/Pagination'
import { RevealGroup, RevealItem } from './ui/Reveal'

/* ============================================================================
   ProjectsGrid — projets sélectionnés présentés en études de cas.
   Les cartes entrent en cascade discrète au scroll.
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

        <RevealGroup as="div" className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8" stagger={0.1}>
          {projects.map((project) => (
            <RevealItem as="div" key={project.slug}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>

        <PagesPagination total={3} current={1} className="mt-14" />
      </div>
    </section>
  )
}