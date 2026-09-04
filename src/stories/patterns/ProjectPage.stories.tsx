import type { Meta, StoryObj } from '@storybook/react'
import { ProjectPage } from '../../pages/ProjectPage'

const meta: Meta<typeof ProjectPage> = {
  title: 'Pages/Étude de cas',
  component: ProjectPage,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    slug: { control: 'select', options: ['observatoire-ferme', 'irrigation-pilotee', 'carto-sols', 'reseau-essais'] },
  },
  args: { slug: 'observatoire-ferme' },
}
export default meta

type Story = StoryObj<typeof ProjectPage>

export const ObservatoireDeLaFerme: Story = { args: { slug: 'observatoire-ferme' } }
export const IrrigationPilotee: Story = { args: { slug: 'irrigation-pilotee' } }
export const CartoSols: Story = { args: { slug: 'carto-sols' } }
export const ReseauEssais: Story = { args: { slug: 'reseau-essais' } }