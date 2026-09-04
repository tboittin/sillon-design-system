import type { Meta, StoryObj } from '@storybook/react'
import { Metric } from '../../components/ui/Metric'

const meta: Meta<typeof Metric> = {
  title: 'UI/Metric',
  component: Metric,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['md', 'lg', 'xl'] },
  },
  args: {
    value: '−30%',
    label: 'de temps de saisie',
    detail: 'par notation, à protocole identique',
    size: 'lg',
  },
}
export default meta

type Story = StoryObj<typeof Metric>

export const Defaut: Story = {}
export const BandeauHero: Story = {
  args: { size: 'xl' },
  decorators: [
    (Story) => (
      <div className="flex gap-12 border-l-2 border-accent/40 pl-5">
        <Story />
      </div>
    ),
  ],
}

export const TroisMetriques = () => (
  <div className="grid gap-10 sm:grid-cols-3">
    <Metric value="−30%" label="de temps de saisie économisé" detail="campagne 2025 vs 2024" />
    <Metric value="12" label="structures agricoles accompagnées" detail="coopératives et chambres" />
    <Metric value="8 ans" label="entre le champ et le code" detail="expérience cumulée" />
  </div>
)

export const ResultatsProjet = () => (
  <div className="flex flex-col gap-7 rounded-2xl border border-line bg-surface-raised p-8">
    <Metric value="−30%" label="Temps de saisie" detail="par notation, à protocole identique" />
    <Metric value="−22%" label="Erreurs de saisie" detail="sur les campagnes comparées" />
    <Metric value="J+1" label="Délai de restitution" detail="au lieu de 10 jours ouvrés" />
  </div>
)