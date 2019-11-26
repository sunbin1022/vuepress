module.exports = {
  title: '土豆数据-web', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: '土豆数据-前端文档纪录', // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],  //浏览器的标签栏的网页图标
  ],
  markdown: {
    lineNumbers: true
  },
  serviceWorker: true,
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: 'lastUpdate',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'sunbin1022/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',
    docsRepo: 'sunbin1022/vuepress',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '分类',
        ariaLabel: '分类',
        items: [
          { text: 'potato-ui', link: '/pages/potato-ui/log.md' },
          { text: 'potato-utils', link: '/pages/potato-utils/log.md' },
        ]
      },
    ],
    sidebar: [
      {
        title: 'project',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          {
            title: '新建本地项目',
            path: '/pages/project/create.md',
          }
        ]
      },
      {
        title: 'potato-ui',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          {
            title: '更新日志',
            path: '/pages/potato-ui/log.md',
          }
        ]
      },
      {
        title: 'potato-utils',
        collapsable: false,
        children: [
          {
            title: '更新日志',
            path: '/pages/potato-utils/log.md',
          }
        ]
      }
    ],
    smoothScroll: true
  }
}