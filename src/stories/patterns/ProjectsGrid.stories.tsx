import type { Meta } from '@storybook/react'
import { ProjectsGrid } from '../../components/ProjectsGrid'

const meta: Meta<typeof ProjectsGrid> = {
  title: 'Patterns/ProjectsGrid',
  component: ProjectsGrid,
  parameters: { layout: 'fullscreen' },
}
export default meta

export const Defaut = {}