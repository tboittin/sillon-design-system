import { animated } from '@react-spring/web'
import { skills } from '../data/content'
import { iconMap } from '../lib/icons'
import { useSpringBar, useStaggeredSlideIn } from '../hooks'
import { SectionHeader } from './ui/SectionHeader'

/* ============================================================================
   Skills — compétences par groupe (agronomie / développement), barres de
   progression animées par ressort physique (React Spring), pourcentages en
   monospace. Les barres se remplissent quand la section entre dans le
   viewport, avec un léger décalage entre chaque compétence.
   ========================================================================== */

export const skillsSection = {
  eyebrow: 'Compétences',
  title: 'Un socle technique et agronomique complet.',
  lead: 'Des compétences exercées sur des projets réels — du calcul de dose au déploiement d’application. Les niveaux reflètent une pratique régulière et vérifiable.',
}

export function Skills() {
  const [groupsRef, groupsSprings] = useStaggeredSlideIn(skills.length, {
    y: 28,
    stagger: 140,
    config: { mass: 1, tension: 220, friction: 28 },
  })

  return (
    <section id="competences" className="scroll-mt-24 bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow={skillsSection.eyebrow} title={skillsSection.title} lead={skillsSection.lead} />

        <div ref={groupsRef} className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14">
          {skills.map((group, gi) => {
            const GroupIcon = iconMap[group.icon]
            return (
              <animated.div key={group.group} style={groupsSprings[gi]}>
                <div className="flex items-center gap-3 border-b border-line pb-4">
                  <span className="flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                    <GroupIcon className="size-5" />
                  </span>
                  <h3 className="font-display text-xl font-medium text-ink">{group.group}</h3>
                </div>

                <ul className="mt-7 flex flex-col gap-6">
                  {group.items.map((skill, si) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={gi * 0.1 + si * 0.08} />
                  ))}
                </ul>
              </animated.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* Barre individuelle : ressort physique piloté par useSpringBar */
function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [barRef, barSpring] = useSpringBar<HTMLDivElement>(level, {
    config: { mass: 0.9, tension: 190, friction: 26 },
    delay: delay * 1000,
  })

  return (
    <li>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-medium text-ink">{name}</span>
        <span className="font-mono text-sm tabular-nums text-accent">{level}%</span>
      </div>
      <div
        ref={barRef}
        className="mt-2 h-2 overflow-hidden rounded-full bg-ink/10"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={name}
      >
        <animated.div style={barSpring} className="h-full rounded-full bg-accent" />
      </div>
    </li>
  )
}