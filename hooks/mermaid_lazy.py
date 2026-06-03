"""MkDocs hook: 折り畳み(details)内の Mermaid 図を遅延描画できるようにする。

Material は読み込み時に表示中の `.mermaid` だけを描画する。閉じた <details> 内の図は
0 サイズで描画に失敗し、元のソースも失われてしまう。

対策として、各 Mermaid ブロックを <div class="mmlazy" data-graph="SRC"> でラップし、
ソースを data 属性に保全しておく。表示中の図は従来どおり Material が描画し、
閉じた details 内の図は assets/js/mermaid-lazy.js が開いた瞬間に data-graph から描画する。
"""

import html
import re

_PAT = re.compile(r'<pre class="mermaid"><code>(.*?)</code></pre>', re.S)


def on_page_content(html_content, page, config, files):
    def repl(m):
        raw = html.unescape(m.group(1))          # code 内のエンティティを生ソースへ戻す
        attr = html.escape(raw, quote=True)       # data 属性用にエスケープ
        return f'<div class="mmlazy" data-graph="{attr}">{m.group(0)}</div>'

    return _PAT.sub(repl, html_content)
