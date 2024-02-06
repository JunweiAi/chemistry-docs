import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '专题1. 阿佛加德罗常数',
        items: [
          {
            text: '第一章',
            collapsed: true,
            items: [
              {
                text: '第一节 求微粒数目',
                link: '/求微粒数目'
              },
              {
                text: '第二节 求微粒数目2',
                link: '/求微粒数目2'
              },
              {
                text: '第三节 求微粒数目3',
                link: '/求微粒数目3'
              },
            ]
          },
          {
            text: '第二章',
            items: [
              {
                text: '第一节 求微粒数目',
                link: '/api-examples'
              },
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
