import { defineConfig } from 'vitepress'

export default async () => {
  return defineConfig({
    base: "/steve-planet-ui",
    title: 'Planet UI',
    themeConfig: {
      logo: '/images/planet.svg',
      nav: [
        {
          text: 'Github',
          link: 'https://github.com/Steve245270533/planet-ui',
        },
        { text: '指南', link: '/guide/started' }
      ],
      sidebar: [
        {
          text: '基础',
          items: [
            { text: '快速开始', link: '/guide/started' },
          ]
        },
        {
          text: '组件',
          collapsed: true,
          items: [
            { text: '赛博按钮', link: '/guide/button' },
          ]
        }
      ],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2024-present Steve'
      }
    },
  })
}
