import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/portfolio-research-career-exploration/',
  title: 'FDE Career Research',
  description: 'Research into forward deployed engineering roles and skills',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Overview', link: '/' },
      { text: 'What FDEs Do', link: '/fde-overview' },
      { text: 'Job Research', link: '/jobs/' },
      { text: 'Skills', link: '/skills' },
      { text: 'Career Path', link: '/career-path' },
      { text: 'Sources', link: '/sources' }
    ],
    sidebar: [
      {
        text: 'Research',
        items: [
          { text: 'Home', link: '/' },
          { text: 'What FDEs Do', link: '/fde-overview' },
          { text: 'Job Listings', link: '/jobs/' },
          { text: 'Skills', link: '/skills' },
          { text: 'Internship vs. Full-Time', link: '/career-path' },
          { text: 'Sources & Method', link: '/sources' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/victoriap537/portfolio-research-career-exploration' }
    ],
    footer: {
      message: 'Independent career research',
      copyright: 'Research snapshot: November 12, 2026'
    },
    search: { provider: 'local' }
  }
})
