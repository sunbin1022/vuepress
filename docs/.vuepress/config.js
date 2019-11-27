const path = require('path')
const docs = path.resolve('./docs/pages')
const utils = require('./index.js');
const filehelper=require('./getFilenames.js')

module.exports = {
  title: '土豆数据-web', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: '土豆数据-前端文档', // meta 中的描述文字，用于SEO
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
    lastUpdated: '上次更新时间',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'sunbin1022/vuepress',
    repoLabel: '查看源码',
    docsRepo: 'sunbin1022/vuepress',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '新建项目', link: '/pages/project/' },
      {
        text: '分类',
        ariaLabel: '分类',
        items: [
          { text: 'potato-ui', link: '/pages/potato-ui/' },
          { text: 'potato-utils', link: '/pages/potato-utils/' },
        ]
      },
    ],
    sidebar:[
      utils.genSidebar('项目', filehelper.getFileName(docs+'/project'), false),
      utils.genSidebar('potato-ui', filehelper.getFileName(docs+'/potato-ui'), false),
      utils.genSidebar('potato-utils', filehelper.getFileName(docs+'/potato-utils'), false),
      utils.genSidebar('问题', filehelper.getFileName(docs+'/questions'), true),
    ]
  }
}