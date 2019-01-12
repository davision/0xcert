module.exports = {
  title: "0xcert Docs",
  description: "Create, own, and validate unique assets on the blockchain. 0xcert is the first open protocol built to support the future of digital assets, powered by the non-fungible tokens.",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  ga: 'UA-114983924-2',
  serviceWorker: true,
  themeConfig: {
    logo: '/0xcert-logo.svg',
    displayAllHeaders: false,
    lastUpdated: 'Last Updated', // string | boolean
    repo: '0xcert/framework',
    repoLabel: 'GitHub',
    docsRepo: '0xcert/framework',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page.',
    serviceWorker: {
      updatePopup: true
    },
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          ['/guide/introduction', 'Introduction'],
          ['/guide/getting-started', 'Getting started'],
          ['/guide/communication', 'Communication'],
          ['/guide/using-providers', 'Using providers'],
          ['/guide/about-assets', 'About assets'],
          ['/guide/certification', 'Certification'],
          ['/guide/asset-management', 'Asset management'],
          ['/guide/about-cryptocurrency', 'About cryptocurrency'],
          ['/guide/value-management', 'Value management'],
          ['/guide/atomic-orders', 'Atomic orders'],
        ],
      },
      {
        title: 'API',
        collapsable: false,
        children: [
          ['/api/core', 'Core'],
          ['/api/ethereum', 'Ethereum'],
        ],
      },
      {
        title: 'Plugins',
        collapsable: false,
        children: [
          ['/plugins/vuejs', 'VueJS'],
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: false,
    extendMarkdown: (md) => {
      md.use(require('markdown-it-container'))
    },
    externalLinks: {
      target: '_self',
      rel: 'noopener noreferrer alternate',
    },
  },
}
