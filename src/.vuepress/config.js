module.exports ={
    title: 'ざっくりわかるC言語入門',
    description: 'C言語の基本',
    dest: 'docs/',
    base: '/clang-entrance/',
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Tutorial', link: '/tutorial/' },
        ],
        sidebarDepth: 2,
        sidebar: {
            '/tutorial/': [
                '',
                'HelloWorld'
            ],
            '/': [
                '',
                'tutorial/'
            ]
        }
    }
}