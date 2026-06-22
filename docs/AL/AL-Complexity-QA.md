# AL-Complexity Q&A

[AL-Complexity](AL-Complexity.md) の内容について出た疑問と、その回答を記録するページ。質問するたびにここへ追記していく。

!!! info "使い方"
    - **質問をクリックすると回答が開く**（折り畳み式）。
    - 古い質問が先頭（上）、最新が末尾（下）に並ぶ（新しいものを下に追記）。
    - 関連する用語メモへは本文中からリンクする。
    - 各 Q&A には日付と通し番号を付ける。

---

<a id="q1"></a>

??? question "Q1. little-o / little-ω / little-θ の読み方は？"

    *(2026-06-23)*

    **A.** 小文字版は "**little-**"（または "small-"）を付けて、大文字版（big-）と区別して読む。

    | 記法 | 英語 | 日本語 |
    |---|---|---|
    | **o(g)** | "little-o of g"（small-o） | リトルオー（スモールオー） |
    | **ω(g)** | "little-omega of g" | リトルオメガ |
    | **θ(g)** | "little-theta of g" | リトルシータ |

    - 大文字 `O/Ω/Θ` は "**big-**oh / big-omega / big-theta"、小文字 `o/ω/θ` は "**little-**…"。**音だけでは `O` と `o` が区別できない**ので、会話で計算量を話すときは "big" / "little" を明示するのが実用上のコツ。
    - ω・θ は文字自体が「オメガ」「シータ」（ギリシャ文字）。"little-" は「小文字版だよ」という目印にすぎない。
    - 意味の対応（→ [§7 本文](AL-Complexity.md#little-notations)）: 大文字 `O/Ω/Θ` が **≤・≥・=**、小文字 `o/ω` が **<・>**（タイトな等号を含まない厳密な上界・下界）。

    関連: [§7 little-o / little-ω / little-θ](AL-Complexity.md#little-notations)、[§2 漸近記法 O/Ω/Θ](AL-Complexity.md#asymptotic-notation)
