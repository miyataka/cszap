# 弱点ノートと復習キュー

採点記録に散らばった弱点を1か所に集め、次に何を復習するかを決めるためのページ。各ユニットの採点記録が「その日の結果」なのに対し、ここは「時間をまたいだ弱点の推移」を追う。

!!! info "使い方"
    - 採点記録を追加したら、**弱点一覧**に行を足す（1弱点 = 1行。採点 0.5 以下の設問と、講評で「積み残し」と書かれた項目が対象）。「初出」には**その設問が初めて出題された日**を書く——初回は解けたのに後で崩れた設問も、最初の出題日のまま動かさない。
    - 再テストで改善したら、その行の「再テスト」と「状態」を更新する。状態は **未対処 / 改善 / 克服** の3つで、**再テストが 1.0 なら克服、0.6 以上かつ初回より上がったなら改善、それ以外（0.6 未満にとどまる・下がった・変わらない・再テスト未実施）は未対処**。0.5 以下のままなら点が動いても未対処のまま——講評が「積み残し」と呼ぶ状態と一致させるための線引き。
    - **復習キュー**は上から順に取り組む。再テストが済んだユニットは下へ送る。

## 横断パターン {#patterns}

同じ失点の仕方が複数ユニットで繰り返されている。個々の設問を覚え直すより、この6パターンを潰す方が伸び幅が大きい。

| パターン | 具体例（採点記録へのリンク） | 対策 |
|---|---|---|
| **1. 原因と結果の取り違え** | KPTI を「カーネル/ユーザーの page-table が TLB に同時に乗らないようにする仕組み」と説明——本体はページテーブル分離で、TLB が冷えるのはその代償（[OS-Protection 2026-07-28](OS/OS-Protection-Quiz.md#2026-07-28-kpti)）。スラッシングのボトルネックを「コンテキストスイッチ」と説明——実際はページイン/アウトのディスク I/O の連発（[OS-Memory 2026-07-28](OS/OS-Memory-Quiz.md#2026-07-28-tlbcow)） | 結論が合っていても止まらず、「機構 → 結果（代償）」の順に一度書き下す。時系列の図に起こすと取り違えに気づきやすい |
| **2. 簡潔に答えすぎ（理由・計算量・用語を書かない）** | Q24 に `min-heap`、Q25 に `二分探索木` とだけ答え、答え自体は正しいのに理由・計算量が無く 0.8 → 0.6 へ退行（[AL-Foundational 2026-06-14](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26)）。逆転数の総当たりで O(n²) を明記せず減点（[AL-Strategies Day2](AL/AL-Strategies-Quiz.md#day2-algorithmic-strategies-12)） | 「○○。理由は△△、計算量は□□」を定型にする。辛口基準では**本質＋理由付け＋計算量＋正式名称**が揃って満点 |
| **3. 設問後半の読み落とし（列挙だけで終える）** | 「知っているファイルシステムを並べ、**特徴を教えてください**」に名前の列挙のみで 0.4（[OS-Files 2026-08-11](OS/OS-Files-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q1-2-3-4-7-8)）。「PCB に含まれる情報を**3つ**挙げよ」に PID のみで 0.3（[OS-Process 2026-07-27](OS/OS-Process-Quiz.md#2026-07-27-os-protection-os-process-os-memory-12-q58)） | 回答前に設問文を区切り、問われている要素を数える。「N個」「かつ〜も」を指差し確認してから書き始める |
| **4. 忘却（前回できた設問が再テストで 0）** | 隣接リスト vs 隣接行列は初回 0.7 だったのに再テストで「わからない」＝0.0。バケツソート/Pseudo も 0.4 → 0.0 へ退行（[AL-Foundational 2026-06-14](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26)） | 一度できた設問こそ間隔をあけて再テストする。下の**弱点一覧**を再テストのチェックリストとして使い、「改善」で止めず「克服」まで運ぶ |
| **5. 用語の混同** | 「メモリマップド I/O」（デバイスのレジスタを写像）と「mmap」（ファイルを写像）を混同（[OS-Devices 2026-08-11](OS/OS-Devices-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q6-10-11-12)）。MultiSet を「キーで複数の値」＝MultiMap の意味で説明、ダイクストラの適用条件を「無向」と誤認（正は**非負の重み**）（[AL-Foundational 2026-06-14](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26)） | 字面が似た用語は単独で覚えず、**対比の形で1枚に並べる**（「レジスタを地図に載せる」vs「ファイルを地図に載せる」）。適用条件は「何が必要で、何は不問か」まで言語化する |
| **6. 未回答** | ホストOSによる VM 制御（[OS-Virtualization 2026-08-11](OS/OS-Virtualization-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q13)）、RAID（[OS-Faults 2026-08-11](OS/OS-Faults-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q14)）、バケツソートとダイクストラ vs ワーシャルフロイド（[AL-Foundational 2026-06-14](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26)）、O(n log n) の読み取りと 3SAT/2SAT（[AL-Complexity Day3](AL/AL-Complexity-Quiz.md#day3-complexity-10)） | 未回答は必ず 0 点で、失点への寄与が最大。分からなくても「分かる範囲＋分からない箇所」を書いて部分点を狙う。本文を読み直してから再テストする方が効率的 |

## 弱点一覧 {#list}

採点 0.5 以下の設問と、講評が「積み残し」「最優先」と名指しした項目を、初出の古い順に並べる。**状態**は再テストの結果で決める——再テストで 1.0 なら **克服**、**0.6 以上**かつ初回より上がったなら **改善**、それ以外（0.6 未満にとどまる・下がった・変わらない・再テスト未実施）は **未対処**。

| # | 弱点 | ユニット | 初出 | 初回 | 再テスト | 状態 | 参照 |
|---|---|---|---|---|---|---|---|
| 1 | Q2 動的配列とリンクリストの使い分け——核心（ランダムアクセス O(1) vs 中間挿入削除 O(1)）が曖昧 | AL-Foundational | 2026-06-09 | 0.5 | 0.9 | 改善 | [2026-06-09](AL/AL-Foundational-Quiz.md#2026-06-09-26) / [2026-06-14](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26) |
| 2 | Q5 スタック/キュー/デックの実装可否——一次で「デックはリンクリストのみ」と誤答。再テストでも根拠（リングバッファ等）が無い | AL-Foundational | 2026-06-09 | 0.5 | 0.6 | 改善 | [2026-06-09](AL/AL-Foundational-Quiz.md#2026-06-09-26) / [2026-06-14](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26) |
| 3 | Q8 ハッシュが O(1) なら O(log n) は不要か——最重要の「順序を保持しない」が書きかけ | AL-Foundational | 2026-06-09 | 0.3 | 0.8 | 改善 | [2026-06-09](AL/AL-Foundational-Quiz.md#2026-06-09-26) / [2026-06-14](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26) |
| 4 | Q10 隣接リスト vs 隣接行列の使い分け——初回は答えられたのに再テストで「わからない」＝**忘却**。採点コメントが「最優先で再記憶」と名指し | AL-Foundational | 2026-06-09 | 0.7 | 0.0 | 未対処 | [2026-06-09](AL/AL-Foundational-Quiz.md#2026-06-09-26) / [2026-06-14](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26) |
| 5 | Q12 Set / SortedSet / MultiSet——MultiSet を「キーで複数の値」と説明（MultiMap との混同。正は「重複を許す集合」） | AL-Foundational | 2026-06-09 | 0.3 | 0.6 | 改善 | [2026-06-09](AL/AL-Foundational-Quiz.md#2026-06-09-26) / [2026-06-14](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26) |
| 6 | Q15 ディスク上のクイックソート——「quicksort は in-place でない」という事実誤認が再テストで新たに発生。核心はランダムシークの多さ | AL-Foundational | 2026-06-09 | 0.4 | 0.3 | 未対処 | [2026-06-09](AL/AL-Foundational-Quiz.md#2026-06-09-26) / [2026-06-14](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26) |
| 7 | Q16 クイックソート vs マージソート——初回は未回答。再テストで計算量・安定性・用途を的確に説明 | AL-Foundational | 2026-06-09 | 0.0 | 0.8 | 改善 | [2026-06-09](AL/AL-Foundational-Quiz.md#2026-06-09-26) / [2026-06-14](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26) |
| 8 | Q18 timsort が速い理由——本質の **run（既存の整列済み区間）の検出・活用**が欠落。講評が「積み残し・次回の最優先」と名指し | AL-Foundational | 2026-06-09 | 0.3 | 0.3 | 未対処 | [2026-06-09](AL/AL-Foundational-Quiz.md#2026-06-09-26) / [2026-06-14](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26) |
| 9 | Q19 ダイクストラ法の説明——適用条件を「無向」と誤認（正は**非負の重み**で有向/無向・閉路は不問）。講評が「積み残し・次回の最優先」と名指し | AL-Foundational | 2026-06-09 | 0.2 | 0.3 | 未対処 | [2026-06-09](AL/AL-Foundational-Quiz.md#2026-06-09-26) / [2026-06-14](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26) |
| 10 | Q20 ダイクストラ vs ワーシャルフロイドの使い分け——2回連続の未回答。講評が「積み残し・次回の最優先」と名指し | AL-Foundational | 2026-06-09 | 0.0 | 0.0 | 未対処 | [2026-06-09](AL/AL-Foundational-Quiz.md#2026-06-09-26) / [2026-06-14](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26) |
| 11 | Q21 トポロジカルソートの説明——「どのように」（Kahn 法／DFS 帰りがけ順の逆）が無い | AL-Foundational | 2026-06-09 | 0.4 | 0.5 | 未対処 | [2026-06-09](AL/AL-Foundational-Quiz.md#2026-06-09-26) / [2026-06-14](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26) |
| 12 | Q23 バケツソートが速い理由と Pseudo（擬似多項式）——再テストで未回答に退行 | AL-Foundational | 2026-06-09 | 0.4 | 0.0 | 未対処 | [2026-06-09](AL/AL-Foundational-Quiz.md#2026-06-09-26) / [2026-06-14](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26) |
| 13 | Q1 逆転数の総当たり——`break` を入れて数え落とすバグ（求めるのはペア数）。O(n²) の明記も無し | AL-Strategies | 2026-06-28 | 0.4 | — | 未対処 | [Day2](AL/AL-Strategies-Quiz.md#day2-algorithmic-strategies-12) |
| 14 | Q2 逆転数の分割統治——核心の「マージ時に跨ぐペアを O(n) で数える」が無く、記述も途中で切れている | AL-Strategies | 2026-06-28 | 0.5 | — | 未対処 | [Day2](AL/AL-Strategies-Quiz.md#day2-algorithmic-strategies-12) |
| 15 | Q9 時間 vs 近似度のトレードオフ（近似アルゴリズム・PTAS/FPTAS）——未回答 | AL-Strategies | 2026-06-28 | 0.0 | — | 未対処 | [Day2](AL/AL-Strategies-Quiz.md#day2-algorithmic-strategies-12) |
| 16 | Q10 時間 vs 正解確率のトレードオフ（乱択アルゴリズム・ミラー–ラビン）——未回答 | AL-Strategies | 2026-06-28 | 0.0 | — | 未対処 | [Day2](AL/AL-Strategies-Quiz.md#day2-algorithmic-strategies-12) |
| 17 | Q11 すべての再帰はループで書ける——核心の**明示スタックで呼び出し履歴を再現する**が欠落（末尾再帰の直感止まり） | AL-Strategies | 2026-06-28 | 0.4 | — | 未対処 | [Day2](AL/AL-Strategies-Quiz.md#day2-algorithmic-strategies-12) |
| 18 | Q2 素朴フィボナッチの空間計算量——O(2ⁿ) は誤りで正は **O(n)**（同時に積まれるコールスタックは最大 n 段） | AL-Complexity | 2026-06-28 | 0.5 | — | 未対処 | [Day3](AL/AL-Complexity-Quiz.md#day3-complexity-10) |
| 19 | Q3 メモ化フィボナッチの時間計算量——O(n²) は数え過ぎで正は **O(n)**（各 n を一度だけ O(1) で計算） | AL-Complexity | 2026-06-28 | 0.4 | — | 未対処 | [Day3](AL/AL-Complexity-Quiz.md#day3-complexity-10) |
| 20 | Q6 ベンチマークから O(n log n) を読み取る——未回答。`時間/(n log n)` が一定になる感覚が未習得 | AL-Complexity | 2026-06-28 | 0.0 | — | 未対処 | [Day3](AL/AL-Complexity-Quiz.md#day3-complexity-10) |
| 21 | Q7 NP・NP完全・NP困難の定義——NP のみ一行で、NP完全・NP困難が空欄 | AL-Complexity | 2026-06-28 | 0.2 | — | 未対処 | [Day3](AL/AL-Complexity-Quiz.md#day3-complexity-10) |
| 22 | Q8 3SAT / 2SAT の複雑性クラス——未回答（3SAT＝NP完全、2SAT＝P） | AL-Complexity | 2026-06-28 | 0.0 | — | 未対処 | [Day3](AL/AL-Complexity-Quiz.md#day3-complexity-10) |
| 23 | Q9 NP完全な問題の例を3つ——TSP・ナップサックの2つ止まりで3つ目が空欄 | AL-Complexity | 2026-06-28 | 0.5 | — | 未対処 | [Day3](AL/AL-Complexity-Quiz.md#day3-complexity-10) |
| 24 | Q1 → T1 ポリシーとメカニズムの違い＋具体例——初回は「わからん」で完全な未回答 | OS-Protection | 2026-07-27 | 0.0 | 1.0 | 克服 | [2026-07-27](OS/OS-Protection-Quiz.md#2026-07-27-os-protection-os-process-os-memory-12-q14) / [2026-07-28](OS/OS-Protection-Quiz.md#2026-07-28-kpti) |
| 25 | Q3 → T2 KPTI が何を分離するか——「投機実行そのものをオフにする」は事実誤認。講評が「最優先で修正」と名指し。再テストでは誤認は消えたが原因（ページテーブル分離）と代償（TLB が冷える）を取り違え | OS-Protection | 2026-07-27 | 0.3 | 0.6 | 改善 | [2026-07-27](OS/OS-Protection-Quiz.md#2026-07-27-os-protection-os-process-os-memory-12-q14) / [2026-07-28](OS/OS-Protection-Quiz.md#2026-07-28-kpti) |
| 26 | Q4 最小権限の原則と多層防御——概念は言い直せたが、設問が要求する**具体例**が無い | OS-Protection | 2026-07-27 | 0.5 | — | 未対処 | [2026-07-27](OS/OS-Protection-Quiz.md#2026-07-27-os-protection-os-process-os-memory-12-q14) |
| 27 | Q5 → T3 PCB に含まれる情報を3つ——PID のみ（設問後半の読み落とし） | OS-Process | 2026-07-27 | 0.3 | 1.0 | 克服 | [2026-07-27](OS/OS-Process-Quiz.md#2026-07-27-os-protection-os-process-os-memory-12-q58) / [2026-07-28](OS/OS-Process-Quiz.md#2026-07-28-pcbipc) |
| 28 | Q8 → T5 IPC の使い分け（大量データを高頻度・同期は自前で書きたくない）——未回答 | OS-Process | 2026-07-27 | 0.0 | 0.9 | 改善 | [2026-07-27](OS/OS-Process-Quiz.md#2026-07-27-os-protection-os-process-os-memory-12-q58) / [2026-07-28](OS/OS-Process-Quiz.md#2026-07-28-pcbipc) |
| 29 | Q9 → T4 TLB 固有の役割——MMU 全般（アドレス変換・分離）の説明に終始し、「変換結果をキャッシュして高速化」に届かず | OS-Memory | 2026-07-27 | 0.3 | 1.0 | 克服 | [2026-07-27](OS/OS-Memory-Quiz.md#2026-07-27-os-protection-os-process-os-memory-12-q912) / [2026-07-28](OS/OS-Memory-Quiz.md#2026-07-28-tlbcow) |
| 30 | Q11 → T6 スラッシングの機構と対策——未回答。再テストでは結論は合ったがボトルネックを「コンテキストスイッチ」と誤認（正はページイン/アウトのディスク I/O） | OS-Memory | 2026-07-27 | 0.0 | 0.6 | 改善 | [2026-07-27](OS/OS-Memory-Quiz.md#2026-07-27-os-protection-os-process-os-memory-12-q912) / [2026-07-28](OS/OS-Memory-Quiz.md#2026-07-28-tlbcow) |
| 31 | Q12 → T7 Dirty COW（COW の競合状態がそのまま権限昇格になる）——未回答。再テストでも「タイミングのスキ」という機構と、共有フレーム経由で被害が全プロセスに波及する規模への言及が無い | OS-Memory | 2026-07-27 | 0.0 | 0.5 | 未対処 | [2026-07-27](OS/OS-Memory-Quiz.md#2026-07-27-os-protection-os-process-os-memory-12-q912) / [2026-07-28](OS/OS-Memory-Quiz.md#2026-07-28-tlbcow) |
| 32 | Q10 I/O 方式の使い分け——**メモリマップド I/O と mmap を混同**し、ポートマップド I/O を IPC 的に誤説明。DMA も CPU 負荷軽減という利点に未言及 | OS-Devices | 2026-08-11 | 0.3 | — | 未対処 | [2026-08-11](OS/OS-Devices-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q6-10-11-12) |
| 33 | Q11 OS がどのデバイスドライバへ振り分けるか（メジャー/マイナー番号とディスパッチテーブル）——未回答 | OS-Devices | 2026-08-11 | 0.0 | — | 未対処 | [2026-08-11](OS/OS-Devices-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q6-10-11-12) |
| 34 | Q12 `ioctl` システムコールの役割（read/write に収まらない固有制御の汎用チャネル）——未回答 | OS-Devices | 2026-08-11 | 0.0 | — | 未対処 | [2026-08-11](OS/OS-Devices-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q6-10-11-12) |
| 35 | Q1 ファイル操作システムコールの列挙——対になる `close` が抜け、`create`/`delete`/`truncate` も出ず、該当しない `NOTIFY` を混入 | OS-Files | 2026-08-11 | 0.5 | — | 未対処 | [2026-08-11](OS/OS-Files-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q1-2-3-4-7-8) |
| 36 | Q2 inode に保存されているもの（メタデータ一式。ファイル名は含まれない）——未回答 | OS-Files | 2026-08-11 | 0.0 | — | 未対処 | [2026-08-11](OS/OS-Files-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q1-2-3-4-7-8) |
| 37 | Q7 ファイルシステムの列挙と**特徴**——名前を5つ挙げたのみで、設問後半の「特徴」に一切答えていない | OS-Files | 2026-08-11 | 0.4 | — | 未対処 | [2026-08-11](OS/OS-Files-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q1-2-3-4-7-8) |
| 38 | Q9 ジャーナリングファイルシステムの利点と欠点——「利点:」「欠点:」の見出しのみで中身が空＝実質未回答 | OS-Advanced-Files | 2026-08-11 | 0.0 | — | 未対処 | [2026-08-11](OS/OS-Advanced-Files-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q5-9) |
| 39 | Q13 ホストOSが VM の CPU・メモリ・デバイスをどう制御するか——未回答。5ユニット横断クイズ中もっとも総合的な設問 | OS-Virtualization | 2026-08-11 | 0.0 | — | 未対処 | [2026-08-11](OS/OS-Virtualization-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q13) |
| 40 | Q14 RAID（0/1/5/6 の仕組みと耐えられる故障）——未回答 | OS-Faults | 2026-08-11 | 0.0 | — | 未対処 | [2026-08-11](OS/OS-Faults-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q14) |

!!! info "状態の内訳"
    全40件のうち **克服** 3件（#24・#27・#29）／**改善** 8件（#1・#2・#3・#5・#7・#25・#28・#30）／**未対処** 29件。改善で止まっている 8 件は「0.6 以上まで戻したが満点ではない」状態なので、克服まで運ぶ余地がまだある。未対処 29 件のうち3件（#9・#11・#31）は**再テストで点は動いたが 0.5 以下にとどまった**もので、講評が「積み残し」と呼ぶ状態と同じ扱いにしてある。

## 復習キュー {#queue}

上から順に取り組む。まず**再テスト未実施のユニットをスコアの低い順**に、次に**再テスト済みだが積み残しがあるユニット**を、最後に**まだ出題していないユニット**を置く。再テストが済んだユニットは下へ送る。

| 優先 | ユニット | 最新スコア | 最終出題日 | 再テスト | 次にやること |
|---|---|---|---|---|---|
| 1 | [OS-Faults](OS/OS-Faults-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q14) | 0 | 2026-08-11 | 未実施 | 講評の指示どおり、まず本文 §2 の RAID 0/1/5/6 の表（仕組み・耐えられる故障・トレードオフ）を暗記し直す。RAID 0 に冗長性が無いこと、RAID がバックアップの代わりにならないことまで言えるように |
| 2 | [OS-Virtualization](OS/OS-Virtualization-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q13) | 0 | 2026-08-11 | 未実施 | 講評の指示どおり本文 §1・§2・§3・§9 を読み直してから再テスト。CPU＝ハイパーバイザによる特権命令のトラップ、メモリ＝ネステッドページング、デバイス＝エミュレーション/準仮想化/パススルー、の3資源で答える型を作る |
| 3 | [OS-Devices](OS/OS-Devices-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q6-10-11-12) | 33 | 2026-08-11 | 未実施 | 講評の名指し2点——「メモリマップド I/O と mmap の区別」（レジスタを地図に載せる vs ファイルを地図に載せる、で対比）、および「`ioctl` とメジャー/マイナー番号」を本文 §1 の「すべてはファイル」抽象から補強する |
| 4 | [OS-Advanced-Files](OS/OS-Advanced-Files-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q5-9) | 35 | 2026-08-11 | 未実施 | 講評の名指しどおり、Q9 は本文 §5 を読み直し「write-ahead logging」「fsck 不要」の2語を軸に再構成する。Q5 は「なぜ保証されないか」の機構（`write` はページキャッシュに書くだけで、書き戻しは OS が非同期に行う）まで踏み込む |
| 5 | [AL-Strategies](AL/AL-Strategies-Quiz.md#day2-algorithmic-strategies-12) | 51 | 2026-06-28 | 未実施 | 講評の「次に上げるなら」どおり、Q9・Q10（近似アルゴリズム・乱択アルゴリズム）を補完し、Q1 の `break` バグを直す。加えて Q5・Q11 で崩れた正式名称（局所最適・明示スタック）を固める |
| 6 | [AL-Complexity](AL/AL-Complexity-Quiz.md#day3-complexity-10) | 51 | 2026-06-28 | 未実施 | 講評の「次に上げるなら」どおり、Q2・Q3 の計算量訂正（再帰の空間は O(n)、メモ化の時間は O(n)）と、Q6（O(n log n)）・Q7・Q8 の補完。NP の語彙は本文 §6 と Q&A Q4 で固める |
| 7 | [OS-Files](OS/OS-Files-Quiz.md#2026-08-11-day8-os-devicesos-filesos-advanced-filesos-virtualizationos-faults-14-q1-2-3-4-7-8) | 52 | 2026-08-11 | 未実施 | 講評の名指しどおり、Q2（inode の中身）を埋め、Q7 は「設問文を最後まで読む練習」として特徴まで書く。伸びしろとして Q3 は「リンク先が消えたときの挙動の違い」、Q8 は「ビットテーブルは1ブロック1ビット」まで踏み込む |
| 8 | [AL-Foundational](AL/AL-Foundational-Quiz.md#2026-06-14-2026-06-09-26) | 58 | 2026-06-14 | 済（2026-06-14） | 講評が「次回の最優先」とした積み残し3点——Q18 の **run**、Q19 の**非負の重み**、Q20 の**使い分け**。あわせて忘却した Q10（隣接リスト vs 行列）と未回答へ退行した Q23（バケツソート/Pseudo）を再記憶する |
| 9 | [OS-Memory](OS/OS-Memory-Quiz.md#2026-07-28-tlbcow) | 70 | 2026-07-28 | 済（2026-07-28） | 講評の「伸びしろ」どおり、「なぜそのタイミングで問題が起きるか」の機構の解像度を上げる。T6 はボトルネックがページイン/アウトのディスク I/O であること、T7 は Dirty COW のタイミングのスキと共有フレーム経由の波及。本文 §4・§8 を時系列の図に起こす |
| 10 | [OS-Protection](OS/OS-Protection-Quiz.md#2026-07-28-kpti) | 80 | 2026-07-28 | 済（2026-07-28） | 講評の名指しどおり、T2 は原因（ページテーブル分離）と代償（TLB が冷えて遅くなる）を意識して区別する。Q4 は未再テストのままなので、「具体例を1つ挙げる」練習（LSM/SELinux、ASLR/NX/サンドボックス）で埋める |
| 11 | [OS-Process](OS/OS-Process-Quiz.md#2026-07-28-pcbipc) | 95 | 2026-07-28 | 済（2026-07-28） | 講評どおり残りは T5 の詰めだけ——「共有メモリの方が速いが同期は自前」という比較を明示すれば満点。3ユニット中もっとも安定しているので、優先度は最後でよい |
| 12 | [AL-Models](AL/AL-Models.md) | 未出題 | — | — | 未出題。採点記録が無いため弱点は未特定。まず本文を通読し、初回クイズを受ける |
| 13 | [OS-Purpose](OS/OS-Purpose.md) | 未出題 | — | — | 未出題。採点記録が無いため弱点は未特定。まず本文を通読し、初回クイズを受ける |
| 14 | [OS-Principles](OS/OS-Principles.md) | 未出題 | — | — | 未出題。OS-Devices Q10 の模範解答が §6（タイマー割り込み）を参照しているので、そこを起点に通読してから初回クイズ |
| 15 | [OS-Concurrency](OS/OS-Concurrency.md) | 未出題 | — | — | 未出題。OS-Memory Q12（Dirty COW）が「並行性バグ」として参照するユニットなので、先に通読しておくと #31 の再テストが楽になる |
| 16 | [OS-Scheduling](OS/OS-Scheduling.md) | 未出題 | — | — | 未出題。OS-Memory Q11 の対策「多重度を下げる（中期スケジューラ）」の裏付けになるので、通読してから初回クイズ |
| 17 | [OS-Real-time](OS/OS-Real-time.md) | 未出題 | — | — | 未出題。採点記録が無いため弱点は未特定。まず本文を通読し、初回クイズを受ける |
| 18 | [NC-Fundamentals](NC/NC-Fundamentals.md) | 未出題 | — | — | 未出題。本文は作成済みなので、通読してから初回クイズを受ける |
| 19 | [NC-SingleHop](NC/NC-SingleHop.md) | 未出題 | — | — | 未出題。本文は作成済みなので、通読してから初回クイズを受ける |
