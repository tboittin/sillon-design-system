import { animated } from '@react-spring/web'
import { projects } from '../data/content'
import { ProjectCard } from './ProjectCard'
import { SectionHeader } from './ui/SectionHeader'
import { PagesPagination } from './ui/Pagination'
import { useStaggeredSlideIn } from '../hooks'

/* ============================================================================
   ProjectsGrid — projets sélectionnés présentés en études de cas.
   Les cartes entrent en cascade (staggered) quand la grille apparaît.
   ========================================================================== */

export const projectsSection = {
  eyebrow: 'Études de cas',
  title: 'Des projets qui ont pris racine.',
  lead: 'Quatre réalisations récentes, du relevé de terrain à la plateforme de données. Chaque étude de cas documente le contexte, les choix techniques et les résultats mesurés.',
}

export function ProjectsGrid() {
  const [gridRef, cardSprings] = useStaggeredSlideIn(projects.length, {
    y: 28,
    stagger: 110,
    config: { mass: 1, tension: 230, friction: 28 },
  })

  return (
    <section id="projets" className="scroll-mt-24 bg-surface-sunken py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow={projectsSection.eyebrow} title={projectsSection.title} lead={projectsSection.lead} className="mx-auto text-center [&>p:first-child]:justify-center" />

        <div ref={gridRef} className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, i) => (
            <animated.div key={project.slug} style={cardSprings[i]} className="h-full">
              <ProjectCard project={project} className="h-full" />
            </animated.div>
          ))}
        </div>

        <PagesPagination total={3} current={1} className="mt-14" />
      </div>
    </section>
  )
}