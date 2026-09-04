import type { Meta } from '@storybook/react'
import { Header } from '../../components/Header'

const meta: Meta<typeof Header> = {
  title: 'Patterns/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
}
export default meta

export const Defaut = {}

export const SurFondClair = {
  parameters: { backgrounds: { default: 'Papier' } },
}

export const AvecFondSombre = {
  parameters: { backgrounds: { default: 'Sombre Sillon' } },
}

export const EnPage = {
  decorators: [
    (Story: React.FC) => (
      <div className="min-h-svh bg-surface">
        <Story />
        <div className="flex h-svh items-center justify-center">
          <p className="max-w-md text-center text-sm leading-relaxed text-ink-soft">
            Le header reste fixe pendant le défilement : il passe en surface floutée
            (backdrop-blur) dès 8 px de scroll. Menu burger sous <span className="font-mono text-xs">md</span>.
          </p>
        </div>
      </div>
    ),
  ],
}