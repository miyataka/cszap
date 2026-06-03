# AL-Foundational Q&A

[AL-Foundational](AL-Foundational.md) の内容について出た疑問と、その回答を記録するページ。質問するたびにここへ追記していく。

!!! info "使い方"
    - 新しい質問は下に追記され、新しいものほど上（最新が先頭）に並ぶ。
    - 関連する用語メモへは本文中からリンクする。
    - 各 Q&A には日付と通し番号を付ける。

---

<!-- 新しい Q&A はこの下に、最新を上にして追記する -->

## Q1. 一覧の中で ADT にあたるものはどれ？ Dictionary だけ？

*(2026-06-04)*

**A.** Dictionary だけではない。[AL-Foundational](AL-Foundational.md#0) の一覧は「**ADT（仕様）**」と「**その実装にあたる具体構造**」が混在して並んでいる。

| 区分 | 一覧中の項目 |
|---|---|
| **ADT（操作で定義される仕様）** | **Dictionary/Map**、**Set**、**Stack**、**Queue / Deque**、**Priority Queue** |
| **具体的な実装（表現が決まっている構造）** | **Array**、**Linked list**、**Hash table**、**Heap**、**Trees: BST / AVL / Red-Black**、**Records/Structs/Tuples/Objects** |
| **中間（抽象構造＋具体表現が両方列挙）** | **Graph**（→ 隣接リスト / 隣接行列）、**Tree**（→ 二分・n分・探索木…）|

### ポイント：一覧には「ADT ↔ 実装」のペアが隠れている

CS2023 が Dictionary を ADT の例として**明示**しているだけで、操作で定義される他の型も ADT。むしろ同じ一覧の中に ADT とその実装が**両方**入っているのが要点。

- **Dictionary / Set**（ADT）↔ **Hash table** / **探索木**（実装）
- **Priority Queue**（ADT）↔ **Heap**（実装） ← 一覧6番「Heap-based priority queue」がまさにこれ
- **List / Sequence**（ADT）↔ **Array** / **Linked list**（実装）
- **Stack / Queue / Deque**（ADT、LIFO/FIFO の操作で定義）↔ Array や Linked list で実装

??? note "補足"
    - **Array** は「添字つき連続メモリ」という物理表現が決まっているので実装側。抽象側に対応するのは List/Sequence ADT。
    - **Stack / Queue** は教科書により「データ構造」とも「ADT」とも呼ばれるが、本質は**操作で定義される ADT**で、配列でも連結リストでも実装できる。
    - **Graph / Tree** は操作で見れば ADT 的だが、この一覧では具体表現（隣接リスト/行列、BST/AVL/heap）まで並ぶため中間に置いた。

関連: [ADT / 抽象データ型](AL-Foundational.md#0-基礎概念)
