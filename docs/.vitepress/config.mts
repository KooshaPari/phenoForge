import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'Phenotype Forge',
  description: 'Code generation and project scaffolding toolkit',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
    ],
    
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/' },
            { text: 'Templates', link: '/guide/templates' },
            { text: 'Scaffolding', link: '/guide/scaffolding' },
            { text: 'Code Generation', link: '/guide/code-generation' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Template API', link: '/api/template' },
            { text: 'Generator API', link: '/api/generator' },
          ]
        }
      ]
    },
    
    search: { provider: 'local' },
  },
  
  markdown: {
    config: (md) => {
      md.set({ html: true })
    }
  }
}))
