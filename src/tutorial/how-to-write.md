# C言語の書き方/慣習

この節では、C言語の書き方や慣習などをそれっぽく説明します。

## ソースコードの分解

日本語にも文、文節といった区切りがあるように、C言語でも同様に区切りがあります。

そのなかでも非常に重要なのが**トークン**(token)と呼ばれる日本語で言う単語にあたるものがあります。

基本的にどんなプログラミング言語も命令の文となるものは、このトークンが複雑に混ざり作られています。

このトークンとトークンの間は必ずスペースを開ける必要があります。

チュートリアルで作成したソースコードをトークンに分けると以下のようになります。

```c
int main(void){

    printf("Hello World");

    return 0;
}
```

```c
int
main
(
void
)
{
printf
(
"Hello World"
)
;
return
0
;
}
```

人間が見てもこれならギリギリなんとか意味が読み取れます。

ですが、``void``が``vo id``のようになると、どうでしょうか？

これらは別のトークンであると認識され、コンパイルエラーになります。

また、``int main``を``intmain``のようにトークン同士を結合しても同様にコンパイルエラーになります。

:::tip
ちなみにトークンの順序さえ正しければ以下のように一行で書くこともできます。
```c
int main(void){ printf("Hello World"); return 0;}
```
:::

また、トークンを複数まとめて一つの命令にしたものを**文**(statement)と呼びます。

## 大文字小文字の区別

``HOGE``と``hoge``では全く別物のトークンとして扱われます。

うっかり間違えないようにしましょう。


## 超重要なセミコロン

C言語で最もやりがちなミスなんじゃないでしょうか。

C言語では文の最後には必ず**セミコロン**( ; ←こいつ)を置く必要があります。

ついつい置き忘れてコンパイルエラーなんてことはよくあります。

そんなときは落ち着いて忘れた行に付け足しましょう。

:::danger
しれっと書いていますが、非常に重要なので忘れないようにしてください
:::

## 他人のためのインデント(字下げ)

先程、トークンの順序が正しければどんな風に書いても問題はないと説明しました。

ではそれに則ってこんなプログラムを書いてみました。

```c
#include <stdio.h>

int             main(
    void
)

{
printf("The best of KUSO Code"   
                                        )

;           return 0;
        }
```

どうでしょうか。

明らかに見にくいのが分かることでしょう。

仮に私がこのコードを受け取ったら今すぐパソコンを窓から投げ捨てることでしょう。

では、どのようにすれば他人が見ても見やすくなるでしょう。

それは**インデント**(字下げ)を使用することです。

ある程度、意味がまとまるようトークンを整理した後、今自分がどの階層にいるのかを分かりやすくインデントを使用して空白を開けてみましょう。

```c
#include <stdio.h>

int main(void){
    printf("The best of KUSO Code...?");

    return 0;
}
```

するとどうでしょう。圧倒的に見やすくなったことでしょう。

普段から他人が見てもわかりやすいようなソースコードを意識して書いておきましょう。

:::tip
インデントを使用するときは TABキー を入力すると自動で空白を開けてくれます。</br>
非常に便利なので覚えておきましょう。
:::

ちなみにこれに関する面白い動画があるので共有しておきます。(真に受けてプログラミングやめるなんてことは駄目ですよ)

<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe src="https://www.youtube.com/embed/qNHfKNjX8Us?rel=0" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe></div>

## 忘れないようにコメントする

「あれ、このコードなんの処理だっけ？」

なんてことが、今後一回は起きるはずです。

そんな事態を解決するために **コメント** を必ず残しておきましょう。

コメントとは、プログラム内に記すことができるメッセージのことです。

以下のように使用します。

```c{4}
#include <stdio.h>

int main(void){
    // Hello Worldを出力する
    printf("Hello World");

    return 0;
}
```

このハイライトされた部分がコメントになります。

先頭に ``//`` とすることでその行全体をコメントにすることができます。

それに対して以下のようにすることで範囲を指定してコメントにすることができます。

```c{4,5,6,7}
#include <stdio.h>

int main(void){
    /*
     Hello World
        を出力する
    */
    printf("Hello World");

    return 0;
}
```

``/* */``で囲むことで囲まれた部分をそのままコメントにできます。

ちなみにこの、コメントにする動作のことをコメントアウトと言ったりします。

コメントはプログラムの動作には一切影響しないので積極的に活用してください。


