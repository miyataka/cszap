# NC-Applications 採点記録

[NC-Applications](NC-Applications.md) の内容について出題したクイズと、その回答・採点を記録するページ。学習者へ**出題 → 回答 → 採点**の流れを残す（[NC-Applications Q&A](NC-Applications-QA.md) が「学習者が抱いた疑問とその解説」なのに対し、こちらは「理解度の評価」）。

!!! info "使い方"
    - 設問は常に表示。**「回答・模範解答・採点を開く」をクリックすると本人の回答・模範解答・採点が開く**。再テストのときは開かずに自分で答えてから照合する。
    - 採点は**辛口基準**（本質＋理由付け＋正しい用語が揃って満点。簡潔すぎ・論拠が弱い・用語が出ないものは減点。誤答／未回答／書きかけは 0〜0.3）。

---

## 2026-09-08 出題分（Day10: NC-Applications/NC-Reliability/NC-Routing/NC-SingleHop 横断クイズ 全22問中 Q1, 2, 3, 4, 5, 6, 9, 10）

!!! abstract "総合スコア"
    **5.2 / 8 ≒ 65 点 / 100**（辛口基準）

    | 評価帯 | 問数 | 該当 |
    |---|---|---|
    | 満点（1.0） | 1 | Q6 |
    | 良（0.7〜0.8） | 3 | Q2, Q3, Q10 |
    | 半分（0.4） | 3 | Q1, Q5, Q9 |
    | 低（0.3） | 0 | — |
    | ゼロ（0.0） | 0 | — |

### 講評

- **強み**: Q6（well-known ポート番号）は満点。Q2・Q3（DNS の名前解決手順と分散設計）も階層・キャッシュ・冗長構成の3点を的確に押さえた。
- **弱み**:
    1. **用語の取り違え** — Q1 で **URI を「Unique Resource Identifier」と誤記**（正しくは Uniform Resource Identifier）。scheme/host/path 等の内部構造にも触れず、命名・アドレス指定・資源位置特定という3分類の説明も無い。
    2. **設問後半の読み落とし** — Q5「Status Code, **Header** を可能な限り並べてほしい」で、Status Code は11個列挙できたが **Header は一つも書かれていない**（実質的な未回答）。
    3. **核心語の欠落** — Q9（well-known port の一意性の保証）が「団体が管理している」のみで、**IANA** という固有名詞まで到達していない。
- **次の一手**: URI の正式名称と5要素（scheme/host/port/path/query/fragment）を [§1](NC-Applications.md#uri) で確認し直す。Q5 は代表的なヘッダ（`Host`, `Content-Type`, `Content-Length`, `User-Agent`, `Cookie`, `Authorization` 等）を最低5個は挙げられるようにする。

**Q1.** URI とは? domain とは?

??? note "回答・模範解答・採点を開く"

    **本人の回答**

    > URI: Unique Resource Identifier
    > Domain: IPv4やIPv6のaliasとなる文字列．人間が理解しやすく文字列とピリオドで構成される．階層構造になっている．

    **模範解答**

    **URI (Uniform Resource Identifier)**——「Unique」ではなく **Uniform**——は資源を指すための統一書式で、`scheme://host:port/path?query#fragment` のように **命名・アドレス指定・資源位置特定を1本に畳み込んだもの**（[§1](NC-Applications.md#naming-addressing)、[§1-URI](NC-Applications.md#uri)）。**domain（ドメイン名）**は、IP アドレスという場所を表す識別子に対する**安定した名前**であり、`.`（ルート）→ TLD → 権威 → ホストという階層構造を持つ（[§1-DNS](NC-Applications.md#dns)）。名前とアドレスを分けておくことで、実体（サーバ）が移転しても名前だけ知っていればよいという**間接参照**の利点が生まれる。

    **採点 0.4 / 1.0** — **「Unique Resource Identifier」は誤り**（正は Uniform）。domain の説明（人間可読・階層構造）は方向として正しいが、命名/アドレス指定/資源位置特定という3分類や URI の内部構造への言及が無く、掘り下げ不足。

**Q2.** DNS はどうやって domain から IP を取得する (解決する)のか?

??? note "回答・模範解答・採点を開く"

    **本人の回答**

    > DNSは，Domain Name Serverの略であり，DomainNameからIPを解決する
    > DNSは世界中にドメインを管理する権威サーバーというものがあり，それはTLD（Top Level Domain）から始まり，入れ子の階層構造になっている．
    > ブラウザがdomainを解決する時は，まずローカルのDNSサーバーに問い合わせ，ローカルDNSサーバーは，cacheがなければ，TLD(jp)→次の階層（or.jp)→そのまた次の階層（swe.or.jp)のように権威サーバーを辿ったすえ，最終的にFQDN（fully quolified domain name)を管理するDNSサーバーが返すドメインに対応したIPを取得する．

    **模範解答**

    クライアントの**リゾルバ**がローカル DNS サーバへ問い合わせ、キャッシュが無ければルート → TLD → 権威サーバの順に階層をたどって、最終的に対象ドメインを管理する権威サーバから IP アドレスを得る（[§1-DNS](NC-Applications.md#dns)）。名前の階層がそのまま**管理権限の委譲の階層**になっている点が設計の要。

    **採点 0.8 / 1.0** — 階層的な名前解決の手順（TLD → 権威サーバ、FQDN）を正確に説明できている。**DNS = Domain Name **System**** であり「Domain Name Server」は誤記（DNS が指すサーバ群の1つ1つが name server）。この訂正があれば満点。

**Q3.** 世界中の端末からの DNS リクエストを受けても DNS のシステムはなぜ過負荷にならずに動いているのか?

??? note "回答・模範解答・採点を開く"

    **本人の回答**

    > まず，そもそも（たとえばTLDのDNSサーバーは）冗長構成されている，というのが一点
    > さらに，階層構造になっていることと，上位階層のレスポンスを下位階層のDNSサーバーはcacheしているというのが一点
    > さらにローカルのDNS resolverもcacheを持っている．
    > これらを組み合わせることで過負荷にならずに済んでいる

    **模範解答**

    (1) **階層的な名前空間**による権限の分散——単一の巨大な表を持つ主体がいない、(2) **分散したサーバ群**（ルート・TLD・権威）による負荷分散と単一障害点の排除、(3) **キャッシュ**（TTL の間、各段で結果を再利用）により実際の問い合わせの大半がキャッシュで済む、の3点（[§1-DNS](NC-Applications.md#dns)）。

    **採点 0.8 / 1.0** — 冗長構成・階層＋キャッシュ・ローカルリゾルバのキャッシュの3点を的確に説明できている。「分散処理により単一障害点/単一ボトルネックが無い」という言葉まで添えれば満点。

**Q4.** domain から IP を引き、IP から domain を逆引きするともとの domain になるか?

??? note "回答・模範解答・採点を開く"

    **本人の回答**

    > なるとは限らない．複数のDomainに同一IPを割り当てることができるため．

    **模範解答**

    ならないことがある。1つの IP アドレスに複数のドメインが割り当てられうる（バーチャルホスティング等）ため、逆引き（PTR レコード）は正引きとは別に管理された1つの答えしか返さず、必ずしも元のドメインと一致しない。

    **採点 0.7 / 1.0** — 核心（1 IP に複数ドメインが対応しうる）を正しく指摘。逆引き（PTR レコード）という用語まで出せると満点。

**Q5.** HTTP のStatus Code, Header を可能な限り並べてほしい。

??? note "回答・模範解答・採点を開く"

    **本人の回答**

    > 100 continue
    > 200 ok
    > 204 no content
    > 301 moved permanent
    > 302 temporary redirect
    > 304 Not Modified
    > 400 Bad Request
    > 409 conflict
    > 422 Unprocessable Entity
    > 500 Server Error
    > 501
    > 502

    **模範解答**

    Status Code は 2xx 成功（200 OK, 201 Created, 204 No Content）、3xx リダイレクト（301, 302, 304）、4xx クライアント誤り（400, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409, 422）、5xx サーバ誤り（500, 502 Bad Gateway, 503 Service Unavailable）に分類できる（[§4-HTTP](NC-Applications.md#http)）。**Header** の代表例は `Host`（対象ホスト指定）、`Content-Type`／`Content-Length`（本文の種類・長さ）、`User-Agent`、`Cookie`、`Authorization`、`Cache-Control`、`Location`（リダイレクト先）など。

    **採点 0.4 / 1.0** — Status Code は11個を正しく列挙できている（501/502 は数字のみで説明が無い点はやや惜しい）。だが**設問後半の Header が一つも列挙されておらず、実質的に半分が未回答**。

**Q6.** FTP / SFTP / HTTP / HTTPS / SSH / DNS の(デフォルト)ポート番号は?

??? note "回答・模範解答・採点を開く"

    **本人の回答**

    > FTP 20, 21
    > SFTP 22
    > HTTP 80
    > HTTPS 443
    > SSH 22
    > DNS 53

    **模範解答**

    FTP: 20（データ）/21（制御）、SFTP: 22（SSH 経由）、HTTP: 80、HTTPS: 443、SSH: 22、DNS: 53。

    **採点 1.0 / 1.0** — すべて正確。満点。

**Q9.** port 80 は HTTP である、といった well know port はどのようにして一意であることが保証されていますか?

??? note "回答・模範解答・採点を開く"

    **本人の回答**

    > 団体が管理している

    **模範解答**

    **IANA (Internet Assigned Numbers Authority)** が well-known port（0〜1023）の割り当てを一元的に登録・管理しており、その台帳（IANA Service Name and Transport Protocol Port Number Registry）が唯一の権威になっている。ポート番号自体は [§5-ソケット](NC-Applications.md#sockets) で見た「(IP アドレス, ポート番号)」でプロセスを特定する仕組みの一部。

    **採点 0.4 / 1.0** — 「団体が管理している」という方向性は正しいが、**IANA という固有名詞に到達していない**。「団体」の中身を言えるかどうかが辛口基準では差になる。

**Q10.** 一つのコンピュータから同じサーバの同じサービス (HTTP/DNS)に複数の接続を行ったとき、接続はどのように区別されますか?

??? note "回答・模範解答・採点を開く"

    **本人の回答**

    > 接続元のportが異なり，それで区別される

    **模範解答**

    接続元ポート番号が接続ごとに異なる値を使うため区別できる。厳密には **(送信元 IP, 送信元ポート, 宛先 IP, 宛先ポート)** の4つ組（＋プロトコル）が1本の接続を一意に決める（[§5-ソケット](NC-Applications.md#sockets)）。

    **採点 0.7 / 1.0** — 核心（送信元ポートで区別）は正しい。4つ組全体（送信元/宛先 IP・ポート）まで言えると満点。

---

<!--
新しい採点記録はこの下に、次の折り畳み形式で追記する:

**QN.** 設問文

??? note "回答・模範解答・採点を開く"

    **本人の回答**

    > 回答（引用）

    **模範解答**

    模範解答（全体を4スペース字下げ）。

    **採点 x.x / 1.0** — 講評。
-->
