import type { Meta } from '@storybook/react'
import { PagesPagination, ProjectNav } from '../../components/ui/Pagination'

const meta: Meta = {
  title: 'UI/Pagination',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

export const NumeroTee = {
  render: () => <PagesPagination total={3} current={1} />,
}

export const NavigationProjet = {
  render: () => (
    <div className="w-[36rem] max-w-full">
      <ProjectNav
        previous={{ title: 'Cartographie des sols', slug: 'carto-sols' }}
        next={{ title: 'Réseau d’essais partagé', slug: 'reseau-essais' }}
      />
    </div>
  ),
}

export const NavigationBords = {
  render: () => (
    <div className="w-[36rem] max-w-full">
      <ProjectNav previous={{ title: 'Observatoire de la Ferme', slug: 'observatoire-ferme' }} />
    </div>
  ),
}