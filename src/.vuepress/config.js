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
            { text: 'C言語の基礎', items: [{ text: '基礎', link: '/tutorial/' }, { text: '特性', link: '/tutorial/characteristic' }, { text: '書き方/慣習', link: '/tutorial/how-to-write' }]},
            { text: '基本構文', link: '/syntax/'},
            { text: '問題集', link: '/questions/' },
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
                'characteristic',
                'how-to-write',
                'question'
            ],
            '/questions/':[
                ''
            ],
            '/syntax/':[
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
                'syntax/',
                'questions/'
            ]
        }
    }
}