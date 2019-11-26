module.exports = {
    title: 'CLUI组件库',
    description: 'vue组件库',
    base: '/cl-ui/',
    themeConfig: {
        repo: 'chen129/cl-ui',
        repoLabel: 'GitHub',
        nav: [
            { text: '指南', link: '/guide/install' },
            { text: '组件', link: '/components/install' }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    path: 'install'
                }
            ],
            '/components/': [
                {
                    title: '开发指南',
                    collapsable: false,
                    children: [
                        ['install', '安装'],
                        ['quickstart', '快速上手']
                    ]
                },
                {
                    title: '组件',
                    collapsable: false,
                    children: [
                        ['count-up', 'CountUP 数字累加'],
                        ['scroll', 'Scroll 无缝滚动']
                    ]
                }
            ]
        }
    }
}