import { useEffect } from 'react'
import type { Decorator, Preview } from '@storybook/react-vite'
import '../src/index.css'

/* Bascule du mode sombre Sillon depuis la barre d'outils Storybook */
const withSillonTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'sombre')
  }, [theme])
  return <Story />
}

const preview: Preview = {
  decorators: [withSillonTheme],
  parameters: {
    backgrounds: {
      default: 'papier',
      values: [
        { name: 'Papier', value: '#F5F1E8' },
        { name: 'Sombre Sillon', value: '#121A12' },
        { name: 'Forêt profonde', value: '#10200F' },
        { name: 'Blanc', value: '#FFFFFF' },
      ],
    },
    controls: { expanded: true },
    a11y: { test: 'error' },
  },
  globalTypes: {
    theme: {
      description: 'Thème Sillon',
      toolbar: {
        title: 'Thème',
        icon: 'contrast',
        items: [
          { value: 'clair', title: 'Clair', icon: 'sun' },
          { value: 'sombre', title: 'Sombre', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'clair',
  },
  tags: ['autodocs'],
}

export default preview