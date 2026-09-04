import type { Meta, StoryObj } from '@storybook/react'
import { SectionHeader } from '../../components/ui/SectionHeader'

const meta: Meta<typeof SectionHeader> = {
  title: 'UI/SectionHeader',
  component: SectionHeader,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    align: { control: 'select', options: ['left', 'center'] },
  },
  args: {
    eyebrow: 'La double expertise',
    title: 'Deux regards, une même rigueur.',
    lead: 'Comprendre le vivant pour mieux le mesurer ; mesurer pour mieux décider. Chaque projet est mené de la parcelle au déploiement.',
    align: 'left',
  },
}
export default meta

type Story = StoryObj<typeof SectionHeader>

export const Gauche: Story = {}
export const Centre: Story = { args: { align: 'center' } }

export const TitreAvecEmphase = () => (
  <SectionHeader
    eyebrow="Études de cas"
    title={
      <>
        Des projets qui ont <em className="font-light italic text-accent">pris racine</em>.
      </>
    }
    lead="Quatre réalisations récentes, du relevé de terrain à la plateforme de données."
  />
)