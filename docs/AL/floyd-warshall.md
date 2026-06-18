# ワーシャルフロイド法 — ステップ実行アニメーション

全頂点対間の最短経路を求める **ワーシャルフロイド法 (Floyd–Warshall)** を、
距離行列 `dist[i][j]` が更新されていく様子で理解するためのページ。

!!! abstract "核心は一行"
    **「中継点 `k` を 1 つずつ許可しながら、すべての経路 `i → j` を見直す」**

    ```
    for k:            # 経由してよい中継点を 1 つずつ追加
      for i:
        for j:
          dist[i][j] = min( dist[i][j], dist[i][k] + dist[k][j] )
    ```

    `k` のループが **一番外側** にあるのがポイント。
    「`k` までの頂点を中継に使ってよいときの最短距離」を、`k` を増やしながら確定していく。

## 動かして理解する

下のボタンで **1 ステップずつ** 進めてみてください。

- 🟧 オレンジ＝中継点 `k` / 🟦 青＝始点 `i` / 🟩 緑＝終点 `j`
- 行列の **黄色い行・列** が「いま中継に使う `k`」、**青枠** が参照する 2 セル（`dist[i][k]` と `dist[k][j]`）、**書き換え対象** が `dist[i][j]`。
- `dist[i][k] + dist[k][j]` が今の値より小さければ **緑色で更新**、そうでなければ据え置き。

<div id="floyd-viz">
  <div class="fw-presets">
    <button data-fw-preset="nonneg">非負の重みの例</button>
    <button data-fw-preset="neg">負の辺を含む例</button>
  </div>
  <div id="fw-header" class="fw-header"></div>
  <div class="fw-stage">
    <div class="fw-pane">
      <div id="fw-matrix"></div>
    </div>
    <div class="fw-pane">
      <div id="fw-graph"></div>
    </div>
  </div>
  <div id="fw-formula" class="fw-formula"></div>
  <div class="fw-controls">
    <button id="fw-reset" type="button">⏮ 最初へ</button>
    <button id="fw-prev" type="button">◀ 戻る</button>
    <button id="fw-play" type="button">▶ 再生</button>
    <button id="fw-next" type="button">次へ ▶</button>
    <label>速度 <input id="fw-speed" type="range" min="100" max="1200" value="700"></label>
    <span id="fw-progress" class="fw-progress"></span>
  </div>
</div>

!!! tip "負の辺の例も試してみて"
    「負の辺を含む例」を選ぶと、**直接行くより `k` を経由した方が短くなる**セルが緑に光ります。
    これがダイクストラには無い、フロイドの強み（負の辺を扱える）。
    ※ ただし **負閉路**（一周すると総和が負になる閉路）があると最短距離が定義できず、フロイドでも解けません。

## ダイクストラ法との使い分け

| | ダイクストラ | ワーシャルフロイド |
|---|---|---|
| 求めるもの | **単一始点** → 各点の最短 | **全頂点対**間の最短（全 `i→j`） |
| 負の辺 | **不可**（非負のみ） | **可**（負閉路は不可） |
| 計算量 | `O((V+E) log V)` | `O(V³)` |
| 実装 | 優先度付きキュー | 3 重ループだけ |

- **全頂点ペアの距離が欲しい / 負の辺がある** → ワーシャルフロイド
- **1 点からの最短で、グラフが疎** → ダイクストラ

関連: [AL-Foundational 採点記録 Q20](AL-Foundational-Quiz.md#quiz-q20)
