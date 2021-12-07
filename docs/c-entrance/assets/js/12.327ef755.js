(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{406:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数値と文字列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数値と文字列"}},[t._v("#")]),t._v(" 数値と文字列")]),t._v(" "),a("p",[t._v("ここで数値と文字列のデータについて知ることができます。")]),t._v(" "),a("p",[t._v("ここでの内容は今後の理解において"),a("strong",[t._v("非常に重要")]),t._v("です。")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("目次")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#文字列とは"}},[t._v("文字列とは")])]),a("li",[a("a",{attrs:{href:"#数値とは"}},[t._v("数値とは")])]),a("li",[a("a",{attrs:{href:"#数値と文字列の見分け方"}},[t._v("数値と文字列の見分け方")])]),a("li",[a("a",{attrs:{href:"#printf-で数値を表示する"}},[t._v("printf()で数値を表示する")])]),a("li",[a("a",{attrs:{href:"#ちょっと応用"}},[t._v("ちょっと応用")])]),a("li",[a("a",{attrs:{href:"#復習問題"}},[t._v("復習問題")])])])]),a("p")]),t._v(" "),a("h2",{attrs:{id:"文字列とは"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文字列とは"}},[t._v("#")]),t._v(" 文字列とは")]),t._v(" "),a("p",[t._v("数値を知る前に、まず今まで使ってきた文字列とはなにか考えてみましょう。")]),t._v(" "),a("p",[t._v("文字列はその名の通り、文字の集合です。")]),t._v(" "),a("p",[t._v("文字として存在するのなら殆どの文字を扱うことができます。")]),t._v(" "),a("p",[t._v("しかしこれには大きな欠点があります。")]),t._v(" "),a("p",[t._v("それは、計算に利用できないということです。")]),t._v(" "),a("p",[t._v("計算をするのがコンピュータの仕事なのに計算ができないとなれば本末転倒です。")]),t._v(" "),a("p",[t._v("では、計算に利用するにはどのようにすれば良いでしょうか。")]),t._v(" "),a("p",[t._v("そこで、数値の登場です。")]),t._v(" "),a("h2",{attrs:{id:"数値とは"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数値とは"}},[t._v("#")]),t._v(" 数値とは")]),t._v(" "),a("p",[t._v("数値とは、数字そのものです。")]),t._v(" "),a("p",[t._v("文字列とは違い、計算に利用することができます。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 結果は 2 となる。")]),t._v("\n")])])]),a("h2",{attrs:{id:"数値と文字列の見分け方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数値と文字列の見分け方"}},[t._v("#")]),t._v(" 数値と文字列の見分け方")]),t._v(" "),a("p",[t._v("すこし難しそうに思えますが、実はとてもわかりやすい特徴を持っています。")]),t._v(" "),a("p",[t._v("C言語では文字列は以下のように"),a("code",[t._v('""')]),t._v("(ダブルクオーテーション)で囲われた範囲のことを意味します。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"これが文字列です。"')]),t._v("\n")])])]),a("p",[t._v("ダブルクオーテーションで囲われていれば、その部分が全て文字列と認識されます。")]),t._v(" "),a("p",[t._v("ここでprintf()を思い出してみましょう。")]),t._v(" "),a("p",[t._v("printf()は以下のように使用しました。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"文字列"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("printf()は文字列を表示する関数ですから、引数として文字列が渡されています。")]),t._v(" "),a("p",[t._v("ちなみにこの"),a("code",[t._v('""')]),t._v("で囲われた範囲のことを文字列リテラルと呼ばれたりするので本などで見かけても驚かないようにしましょう。")]),t._v(" "),a("p",[t._v("次に、数値です。")]),t._v(" "),a("p",[t._v('数値は文字列の逆で""で囲われていない部分です。')]),t._v(" "),a("p",[t._v("つまり、以下のように見分けることができます。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456789")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// これは数値")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456789"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//これは文字列")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("ちなみに、シングルクォーテーションで囲われているものは単に文字と呼びます。"),a("br"),t._v("\n一文字でもダブルクォーテーションの中であれば、文字列となり扱いが変わります。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// これは文字")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// これは文字列")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"printf-で数値を表示する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#printf-で数値を表示する"}},[t._v("#")]),t._v(" printf()で数値を表示する")]),t._v(" "),a("p",[t._v("先程、printf()では文字列を表示すると説明しましたが、数値を表示することもできます。")]),t._v(" "),a("p",[t._v("printf()で数値を表示するには以下のように書きます。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(">>出力結果\n512\n")])])]),a("p",[t._v("なにやら見慣れない書き方ですね。")]),t._v(" "),a("p",[t._v("この"),a("code",[t._v("%d")]),t._v("は"),a("strong",[t._v("変換指定子")]),t._v("と呼びます。また、"),a("strong",[t._v("出力変換指定子")]),t._v("ともいいます。")]),t._v(" "),a("p",[t._v("これはprintf()の"),a("strong",[t._v("最初の引数内で記述することができ、後に続く引数の数値を10進数の文字列に変換")]),t._v("してくれます。")]),t._v(" "),a("h2",{attrs:{id:"ちょっと応用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ちょっと応用"}},[t._v("#")]),t._v(" ちょっと応用")]),t._v(" "),a("p",[t._v("printf()を利用して、数値と文字列を同時に表示することができます。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文字列の中に変換指定子を埋め込む")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"今日の気温は%d度です"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("今日の気温は26度です\n")])])]),a("p",[t._v("また、変換指定子は2つ以上書くこともできます。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引数を増やしてみる。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"今日は%d月%d日です。今日の気温は%d度です。"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("今日は12月25日です。今日の気温は13度です。\n")])])]),a("p",[t._v("計算結果を表示することもできます。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 計算してみる。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"計算結果: %d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("計算結果: 3\n")])])]),a("h2",{attrs:{id:"復習問題"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#復習問題"}},[t._v("#")]),t._v(" 復習問題")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("問, 1")]),t._v(" "),a("p",[t._v("C言語において文字列であることを示すためには何の記号を使用するか")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答え")]),t._v(" "),a("p",[t._v('ダブルクォーテーション, "')])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("問, 2")]),t._v(" "),a("p",[t._v("プログラム内に以下を記述したときの実行結果を答えろ。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答え")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("64\n")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("問, 3")]),t._v(" "),a("p",[t._v("プログラム内に以下を記述したときの実行結果を答えろ。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答え")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("64\n")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);