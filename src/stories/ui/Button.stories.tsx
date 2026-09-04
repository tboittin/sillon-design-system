import type { Meta, StoryObj } from '@storybook/react'
import { ArrowRightIcon, SendIcon } from '../../lib/icons'
import { Button } from '../../components/ui/Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'outline', 'soft', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    iconRight: { control: false },
    icon: { control: false },
  },
  args: {
    children: 'Voir les projets',
    variant: 'primary',
    size: 'md',
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Primaire: Story = { args: { href: '#projets' } }
export const Contour: Story = { args: { variant: 'outline', children: 'Parlons de votre projet' } }
export const Doux: Story = { args: { variant: 'soft', children: 'Télécharger l’étude' } }
export const Fantome: Story = { args: { variant: 'ghost', children: 'En savoir plus' } }

export const AvecIcone = {
  args: { size: 'lg', children: 'Envoyer le message', iconRight: <SendIcon /> },
}

export const ToutesVariantes = () => (
  <div className="flex flex-col items-center gap-6">
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primaire</Button>
      <Button variant="outline">Contour</Button>
      <Button variant="soft">Doux</Button>
      <Button variant="ghost">Fantôme</Button>
    </div>
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm" variant="primary">Petit</Button>
      <Button size="md" variant="primary">Moyen</Button>
      <Button size="lg" variant="primary">Grand</Button>
    </div>
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" disabled>Désactivé</Button>
      <Button variant="outline" iconRight={<ArrowRightIcon />}>Lien étiquette</Button>
      <Button href="#contact">Rendu &lt;a&gt;</Button>
    </div>
  </div>
)