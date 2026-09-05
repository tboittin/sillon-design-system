import type { Meta, StoryObj } from '@storybook/react'
import { Reveal, RevealGroup, RevealItem, type RevealProps } from '../../components/ui/Reveal'

const meta: Meta<typeof Reveal> = {
  title: 'UI/Reveal',
  component: Reveal,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    delay: { control: { type: 'number', min: 0, max: 2, step: 0.1 } },
    y: { control: { type: 'number', min: 0, max: 48, step: 4 } },
    amount: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
  },
  args: {
    delay: 0,
    y: 16,
    amount: 0.2,
  },
}
export default meta

type Story = StoryObj<typeof Reveal>

const Sample = ({ label }: { label: string }) => (
  <div className="flex items-center justify-between rounded-xl border border-line bg-surface-raised p-5">
    <span className="font-mono text-sm text-ink">{label}</span>
    <span className="legend text-accent">fade + translate-y</span>
  </div>
)

export const BlocUnitaire: Story = {
  render: (args: RevealProps) => (
    <div className="flex flex-col gap-4">
      <Reveal as="div" {...args}>
        <Sample label="Reveal simple" />
      </Reveal>
      <Reveal as="div" {...args}>
        <Sample label="Un bloc, une apparition" />
      </Reveal>
      <Reveal as="div" {...args}>
        <Sample label="whileInView → IntersectionObserver natif" />
      </Reveal>
    </div>
  ),
}

export const GroupeStagger = {
  render: () => (
    <RevealGroup as="div" className="flex flex-col gap-4" stagger={0.08}>
      {['Liste à puces', 'Chiffres clés', 'Cartes de projet', 'Étude de cas'].map((label) => (
        <RevealItem as="div" key={label}>
          <Sample label={label} />
        </RevealItem>
      ))}
    </RevealGroup>
  ),
}

export const ListesAPuces = {
  render: () => (
    <RevealGroup as="ul" className="flex flex-col gap-3" stagger={0.07}>
      {['Conduite d’essais & protocoles statistiques', 'Phytotechnie et itinéraires culturaux', 'Analyse de sols et de données de capteurs'].map(
        (item) => (
          <RevealItem
            as="li"
            key={item}
            className="flex items-start gap-3 text-sm leading-snug text-ink"
          >
            <span className="mt-0.5 size-4 shrink-0 rounded-full bg-accent-soft text-center font-mono text-[10px] leading-4 text-accent-strong">
              ✓
            </span>
            {item}
          </RevealItem>
        ),
      )}
    </RevealGroup>
  ),
}

export const ReducedMotion = {
  parameters: { a11y: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="max-w-xl text-sm leading-relaxed text-ink-soft">
        Les primitives respectent <code className="font-mono text-xs">prefers-reduced-motion</code> : le
        contenu est rendu visible directement, sans animation, quand l'utilisateur le demande.
      </p>
      <Reveal as="div">
        <Sample label="Contenu visible même avec reduced-motion activé" />
      </Reveal>
    </div>
  ),
}