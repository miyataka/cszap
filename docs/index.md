# CSZAP — CS学習メモ

ACM/IEEE-CS/AAAI による **Computer Science Curricula 2023 (CS2023)** を題材に、コンピュータサイエンスを学ぶ講義とワークのメモ。

## このサイトの進め方

CS2023 の **Body of Knowledge** に登場する用語を、Knowledge Area（KA）ごとに「意味を調べて理解する」のがワーク。各ユニットは **本文**（用語の整理）→ **Q&A**（読んで出た疑問の記録）→ **採点記録**（クイズによる理解度評価）の3層で進める。

!!! tip "使い方"
    - 各ページの折り畳み（▶）を開くと、補足や図解が出ます。
    - 採点記録は設問だけが見える形になっているので、そのまま再テストに使えます。
    - 右上の🌙でダークモードに切り替えられます。
    - 上部の🔍で全文検索できます。

## 進捗ダッシュボード

（2026-09-06 時点。スコアは辛口基準の 100 点換算。）

| KA | ユニット | 本文 | Q&A | 採点記録（最新） |
|---|---|---|---|---|
| AL | [AL-Foundational](AL/AL-Foundational.md) | 済 | [20 問](AL/AL-Foundational-QA.md) | [58 点・再テスト済](AL/AL-Foundational-Quiz.md) |
| AL | [AL-Strategies](AL/AL-Strategies.md) | 済 | [25 問](AL/AL-Strategies-QA.md) | [51 点](AL/AL-Strategies-Quiz.md) |
| AL | [AL-Complexity](AL/AL-Complexity.md) | 済 | [4 問](AL/AL-Complexity-QA.md) | [51 点](AL/AL-Complexity-Quiz.md) |
| AL | [AL-Models](AL/AL-Models.md) | 済 | [7 問](AL/AL-Models-QA.md) | 未出題 |
| AL | AL-SEP | 未作成 | | |
| OS | [OS-Purpose](OS/OS-Purpose.md) | 済 | 0 問 | 未出題 |
| OS | [OS-Principles](OS/OS-Principles.md) | 済 | 0 問 | 未出題 |
| OS | [OS-Concurrency](OS/OS-Concurrency.md) | 済 | 0 問 | 未出題 |
| OS | [OS-Protection](OS/OS-Protection.md) | 済 | 0 問 | [80 点・再テスト済](OS/OS-Protection-Quiz.md) |
| OS | [OS-Scheduling](OS/OS-Scheduling.md) | 済 | 0 問 | 未出題 |
| OS | [OS-Process](OS/OS-Process.md) | 済 | 0 問 | [95 点・再テスト済](OS/OS-Process-Quiz.md) |
| OS | [OS-Memory](OS/OS-Memory.md) | 済 | 0 問 | [70 点・再テスト済](OS/OS-Memory-Quiz.md) |
| OS | [OS-Devices](OS/OS-Devices.md) | 済 | 0 問 | [33 点](OS/OS-Devices-Quiz.md) |
| OS | [OS-Files](OS/OS-Files.md) | 済 | 0 問 | [52 点](OS/OS-Files-Quiz.md) |
| OS | [OS-Advanced-Files](OS/OS-Advanced-Files.md) | 済 | 0 問 | [35 点](OS/OS-Advanced-Files-Quiz.md) |
| OS | [OS-Virtualization](OS/OS-Virtualization.md) | 済 | 0 問 | [0 点・未回答](OS/OS-Virtualization-Quiz.md) |
| OS | [OS-Real-time](OS/OS-Real-time.md) | 済 | 0 問 | 未出題 |
| OS | [OS-Faults](OS/OS-Faults.md) | 済 | 0 問 | [0 点・未回答](OS/OS-Faults-Quiz.md) |
| OS | OS-SEP | 未作成 | | |
| NC | [NC-Fundamentals](NC/NC-Fundamentals.md) | 済 | 0 問 | 未出題 |
| NC | [NC-SingleHop](NC/NC-SingleHop.md) | 済 | 0 問 | 未出題 |
| NC | NC-Applications / NC-Reliability / NC-Routing / NC-Security / NC-Mobility / NC-Emerging | 未作成 | | |

次に何を復習するかは [弱点ノート・復習キュー](weak-points.md) にまとめてある。

## 横断ページ

<div class="grid cards" markdown>

-   :material-target: **[弱点ノート・復習キュー](weak-points.md)**

    ---

    採点記録から拾った弱点の推移と、次に復習するユニットの順番。

-   :material-book-alphabet: **[用語索引](glossary.md)**

    ---

    全 KA の主要用語と、それを定義した節へのリンク。

-   :material-table-of-contents: **[CS2023 目次](CS2023-目次.md)**

    ---

    原文PDFの目次（全Knowledge Area）。作成済みユニットはノートへリンク。

</div>

## 運用ルール

- 新しいユニットは OS ノートの構成（導入 → 出典・凡例 → 全体像 → CS2023 のトピックに対応する節 → 学習成果 → 前後のユニット）で書く。
- 本文を読んで出た疑問は各ユニットの Q&A ページに追記する。空のまま nav から外している Q&A ページは、最初の質問を書いた時点で nav に載せる。
- クイズを採点したら採点記録ページに追記し、弱点ノートの一覧とキューを更新する。

## 出典

- *Computer Science Curricula 2023*. ACM/IEEE-CS/AAAI Joint Task Force, January 2024.
  DOI: [10.1145/3664191](https://doi.org/10.1145/3664191)
- 原文PDF: `ComputerScienceCurricula2023.pdf`（リポジトリ同梱）
