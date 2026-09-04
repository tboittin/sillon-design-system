import type { Meta } from '@storybook/react'
import { HomePage } from '../../pages/HomePage'

const meta: Meta<typeof HomePage> = {
  title: 'Pages/Accueil',
  component: HomePage,
  parameters: { layout: 'fullscreen' },
}
export default meta

export const Defaut = {}

export const ModeSombre = {
  globals: { theme: 'sombre' },
  name: 'Défaut (sombre)',
}