import type { Meta, StoryObj } from '@storybook/react'
import { Badge, StatusDot } from '../../components/ui/Badge'
import { Tag } from '../../components/ui/Tag'

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge & Tag',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['accent', 'bark', 'neutral'] },
  },
  args: { children: 'Étude de cas — 2025' },
}
export default meta

type Story = StoryObj<typeof Badge>

export const BadgeAccent: Story = {}
export const BadgeEcorce: Story = { args: { tone: 'bark', children: 'Durée : 6 mois' } }
export const BadgeNeutre: Story = { args: { tone: 'neutral', children: 'Catégorie : OAD' } }

export const Etats = () => (
  <div className="flex flex-col items-start gap-5">
    <div className="flex flex-wrap gap-2.5">
      <Badge tone="accent">Accent — catégorie</Badge>
      <Badge tone="bark">Brun — durée</Badge>
      <Badge tone="neutral">Neutre — statut</Badge>
    </div>
    <div className="flex items-center gap-2.5">
      <StatusDot color="bg-accent" />
      <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">
        Disponible pour de nouvelles missions — Q3 2026
      </span>
    </div>
    <div className="flex flex-wrap gap-2.5 pt-2">
      <Tag>React</Tag>
      <Tag>TypeScript</Tag>
      <Tag>MapLibre</Tag>
      <Tag>PostgreSQL</Tag>
    </div>
  </div>
)

export const Tags = () => (
  <div className="flex max-w-md flex-wrap gap-2.5">
    {['React', 'D3.js', 'Python', 'FastAPI', 'InfluxDB', 'pdfme', 'Tailwind CSS'].map((t) => (
      <Tag key={t}>{t}</Tag>
    ))}
  </div>
)