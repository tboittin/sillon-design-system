import type { Meta } from '@storybook/react'
import { Hero } from '../../components/Hero'

const meta: Meta<typeof Hero> = {
  title: 'Patterns/Hero',
  component: Hero,
  parameters: { layout: 'fullscreen' },
}
export default meta

export const Defaut = {}

export const CadreComplet = {
  decorators: [
    (Story: React.FC) => (
      <div className="min-h-svh bg-surface pb-24">
        <Story />
        <div className="mx-auto max-w-6xl px-5 pt-16 md:px-8">
          <p className="max-w-md text-sm leading-relaxed text-ink-soft">
            Le héro enchaîne sur les sections du récit : expertise, projets, compétences, contact.
            La photographie de terrain est assombrie (overlay forêt) pour garantir le contraste du titre serif.
          </p>
        </div>
      </div>
    ),
  ],
}