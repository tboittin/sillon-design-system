import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb, StepList } from '../../components/ui/Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'Accueil', href: '#' },
      { label: 'Projets', href: '#projets' },
      { label: 'Cahier de champ' },
    ],
  },
}
export default meta

type Story = StoryObj<typeof Breadcrumb>

export const Defaut: Story = {}

export const PageProjet = () => (
  <div className="w-[32rem] max-w-full">
    <Breadcrumb
      items={[
        { label: 'Accueil', href: '#' },
        { label: 'Projets', href: '#projets' },
        { label: 'Irrigation pilotée par le sol' },
      ]}
    />
  </div>
)

export const EtapesDuRecit = () => (
  <div className="flex flex-col gap-8">
    <Breadcrumb items={[{ label: 'Accueil' }, { label: 'Expertise' }, { label: 'Projets' }, { label: 'Compétences' }, { label: 'Contact' }]} />
    <StepList steps={['Présentation de la double expertise', 'Projets sélectionnés', 'Compétences', 'Contact']}>
      <p className="mt-3 max-w-sm text-sm text-ink-soft">
        Le parcours utilisateur suit un récit : chaque section du site enchaîne sur la suivante, sans rupture.
      </p>
    </StepList>
  </div>
)