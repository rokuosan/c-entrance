module.exports ={
    title: 'ざっくりわかるC言語入門',
    description: 'C言語の基本',
    dest: 'docs/c-entrance',
    base: '/c-entrance/',
    publicPath: './',
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    themeConfig: {
        nav: [
            { text: 'ホーム', link: '/' },
            { text: '環境構築', link: '/environment/'},
            { text: 'チュートリアル', link: '/tutorial/' },
            { text: '基本的な文法', link: '/basic-syntax/'},
        ],
        sidebarDepth: 2,
        sidebar: {
            '/environment/': [
                '',
                'compiler',
                'editor-atom',
                'editor-vscode'
            ],
            '/tutorial/': [
                '',
                'empty_function'
            ],
            '/basic-syntax/':[
                '',
                'variable',
                'if',
                'for',
                'while',
                'switch'
            ],
            '/': [
                '',
                'environment/',
                'tutorial/',
                'basic-syntax/'
            ]
        }
    }
}