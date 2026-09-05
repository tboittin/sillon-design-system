import { skills } from '../data/content'
import { iconMap } from '../lib/icons'
import { SectionHeader } from './ui/SectionHeader'
import { RevealGroup, RevealItem } from './ui/Reveal'

/* ============================================================================
   Skills — compétences par groupe (agronomie / développement), barres de
   progression animées, pourcentages en monospace.
   Les groupes se révèlent en cascade au scroll.
   ========================================================================== */

export const skillsSection = {
  eyebrow: 'Compétences',
  title: 'Un socle technique et agronomique complet.',
  lead: 'Des compétences exercées sur des projets réels — du calcul de dose au déploiement d’application. Les niveaux reflètent une pratique régulière et vérifiable.',
}

export function Skills() {
  return (
    <section id="competences" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow={skillsSection.eyebrow} title={skillsSection.title} lead={skillsSection.lead} />

        <RevealGroup as="div" className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14" stagger={0.12}>
          {skills.map((group, gi) => {
            const GroupIcon = iconMap[group.icon]
            return (
              <RevealItem as="div" key={group.group}>
                <div className="flex items-center gap-3 border-b border-line pb-4">
                  <span className="flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                    <GroupIcon className="size-5" />
                  </span>
                  <h3 className="font-display text-xl font-medium text-ink">{group.group}</h3>
                </div>

                <ul className="mt-7 flex flex-col gap-6">
                  {group.items.map((skill, si) => (
                    <li key={skill.name}>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm font-medium text-ink">{skill.name}</span>
                        <span className="font-mono text-sm tabular-nums text-accent">{skill.level}%</span>
                      </div>
                      <div
                        className="mt-2 h-2 overflow-hidden rounded-full bg-ink/10"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={skill.name}
                      >
                        <div
                          className="h-full origin-left animate-grow-bar rounded-full bg-accent"
                          style={{ width: `${skill.level}%`, animationDelay: `${0.15 + gi * 0.1 + si * 0.08}s` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}