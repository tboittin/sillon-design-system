import type { Meta } from '@storybook/react'
import { Contact } from '../../components/Contact'

const meta: Meta<typeof Contact> = {
  title: 'Patterns/Contact',
  component: Contact,
  parameters: { layout: 'fullscreen' },
}
export default meta

export const Defaut = {}

export const DansLeRecit = {
  decorators: [
    (Story: React.FC) => (
      <div className="min-h-svh bg-surface">
        <Story />
        <div className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
          <p className="max-w-md text-sm leading-relaxed text-ink-soft">
            Formulaire simple (démo sans backend) : soumettre le formulaire affiche l'état de confirmation inline —
            aucune popup. La validation est native (champs requis).
          </p>
        </div>
      </div>
    ),
  ],
}