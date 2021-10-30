module.exports ={
    title: 'ざっくりわかるC言語入門',
    description: 'C言語の基本を自分なりにまとめてみました',
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
            { text: 'C言語入門', items: [{ text: 'C言語入門', link: '/tutorial/introduction' },{ text: 'HelloWorld', link: '/tutorial/hello-world' }, { text: '特性', link: '/tutorial/characteristic' }, { text: '書き方/慣習', link: '/tutorial/how-to-write' }]},
            { text: 'C言語基礎', link: '/basic/introduction' },
            { text: '基本構文', items: [{ text: '基本構文', link: '/syntax/introduction' },{ text: '変数について', link: '/syntax/variable' }, { text: 'if 文', link: '/syntax/if' }, { text: 'for 文', link: '/syntax/for' }, { text: 'while 文', link: '/syntax/while' }, { text: 'switch 文', link: '/syntax/switch' }]},
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
                'introduction',
                'hello-world',
                'characteristic',
                'how-to-write',
                'question'
            ],
            '/basic/': [
                'introduction',
                'display',
                'number-and-string'
            ],
            '/questions/':[
                ''
            ],
            '/syntax/':[
                'introduction',
                'variable',
                'if',
                'for',
                'while',
                'switch'
            ],
            '/': [
                '',
                'environment/',
                'tutorial/introduction',
                'basic/introduction',
                'syntax/introduction',
                'questions/'
            ]
        }
    }
}