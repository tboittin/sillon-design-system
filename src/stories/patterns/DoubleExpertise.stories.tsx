import type { Meta } from '@storybook/react'
import { DoubleExpertise } from '../../components/DoubleExpertise'

const meta: Meta<typeof DoubleExpertise> = {
  title: 'Patterns/DoubleExpertise',
  component: DoubleExpertise,
  parameters: { layout: 'fullscreen' },
}
export default meta

export const Defaut = {}

export const MobileEmpile = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
}