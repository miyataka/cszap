# 用語索引

本サイトに登場する主要用語を KA 横断で一覧にした索引。右上の検索は本文全文を対象にするが、ここは「どのページのどの節で定義したか」を一覧で辿るためのもの。

## 英語見出しの用語 {#en}

| 用語 | 日本語 | 定義している節 |
|---|---|---|
| Abstract Data Type (ADT) | 抽象データ型 | [AL-Foundational §0](AL/AL-Foundational.md#basics) |
| Access point (AP) | アクセスポイント | [NC-Fundamentals §6](NC/NC-Fundamentals.md#network-elements) |
| ACL | アクセス制御リスト | [OS-Protection §7](OS/OS-Protection.md#access-control) |
| Adjacency list | 隣接リスト | [AL-Foundational §3](AL/AL-Foundational.md#tree) |
| AIMD (Additive Increase Multiplicative Decrease) | 加算的増加・乗算的減少 | [NC-Reliability §6](NC/NC-Reliability.md#tcp-performance) |
| ALOHA | ALOHA | [NC-SingleHop §3](NC/NC-SingleHop.md#mac) |
| Amortized analysis | 償却解析 | [AL-Complexity §9](AL/AL-Complexity.md#amortized) |
| Approximation algorithms | 近似アルゴリズム | [AL-Strategies §9](AL/AL-Strategies.md#ka-core) |
| AQM (Active Queue Management) | アクティブキュー管理 | [NC-Reliability §5](NC/NC-Reliability.md#congestion-control) |
| ARQ (Automatic Repeat reQuest) | 自動再送要求 | [NC-Reliability §3](NC/NC-Reliability.md#error-control) |
| Array | 配列 | [AL-Foundational §1](AL/AL-Foundational.md#linear) |
| ASLR | アドレス配置のランダム化 | [OS-Memory §7](OS/OS-Memory.md#memory-security) |
| Asymptotic notation | 漸近記法 | [AL-Complexity §2](AL/AL-Complexity.md#asymptotic-notation) |
| Authentication | 認証 | [OS-Protection §7](OS/OS-Protection.md#access-control) |
| Authorization / access control | 認可・アクセス制御 | [OS-Protection §7](OS/OS-Protection.md#access-control) |
| Autonomous System (AS) | 自律システム | [NC-Fundamentals §2](NC/NC-Fundamentals.md#internet-organization) |
| Availability | 可用性 | [OS-Faults §1](OS/OS-Faults.md#reliability-availability) |
| Average-case | 平均ケース | [AL-Complexity §1](AL/AL-Complexity.md#framework) |
| AVL tree | AVL木 | [AL-Foundational §3](AL/AL-Foundational.md#tree) |
| Backtracking | バックトラック | [AL-Strategies §7](AL/AL-Strategies.md#exponential-growth) |
| Balanced tree | 平衡木 | [AL-Foundational §3](AL/AL-Foundational.md#tree) |
| Bandwidth | 帯域幅 | [NC-SingleHop §1](NC/NC-SingleHop.md#modulation-media) |
| Bandwidth-Delay Product (BDP) | 帯域遅延積 | [NC-Reliability §4](NC/NC-Reliability.md#flow-control) |
| Best-case | 最良ケース | [AL-Complexity §1](AL/AL-Complexity.md#framework) |
| BFS | 幅優先探索 | [AL-Foundational §4](AL/AL-Foundational.md#search) |
| BGP | ボーダーゲートウェイプロトコル | [NC-Routing §3](NC/NC-Routing.md#ip-scalability) |
| Binary search | 二分探索 | [AL-Foundational §4](AL/AL-Foundational.md#search) |
| Branch-and-bound | 分枝限定法 | [AL-Strategies §7](AL/AL-Strategies.md#exponential-growth) |
| Brute-force | 力まかせ法 | [AL-Strategies §1](AL/AL-Strategies.md#brute-force) |
| Carrier | 搬送波 | [NC-SingleHop §1](NC/NC-SingleHop.md#modulation-media) |
| CDN | コンテンツ配信網 | [NC-Fundamentals §2](NC/NC-Fundamentals.md#internet-organization) |
| Chaining | 連鎖法 | [AL-Foundational §2](AL/AL-Foundational.md#assoc-set) |
| Chomsky hierarchy | チョムスキー階層 | [AL-Models §2](AL/AL-Models.md#chomsky-hierarchy) |
| Church-Turing thesis | チャーチ・チューリングの提唱 | [AL-Models §5](AL/AL-Models.md#church-turing) |
| CIDR | クラスレスドメイン間ルーティング | [NC-Routing §3](NC/NC-Routing.md#ip-scalability) |
| Circuit switching | 回線交換 | [NC-Fundamentals §3](NC/NC-Fundamentals.md#switching-techniques) |
| Client/server | クライアント/サーバ | [NC-Applications §2](NC/NC-Applications.md#app-paradigms) |
| Cloud / edge / fog computing | クラウド・エッジ・フォグ | [NC-Applications §2](NC/NC-Applications.md#app-paradigms) |
| Coffman conditions | コフマン条件 | [OS-Concurrency §3](OS/OS-Concurrency.md#deadlock-starvation) |
| Collision | 衝突（ハッシュ表） | [AL-Foundational §2](AL/AL-Foundational.md#assoc-set) |
| Congestion | 輻輳 | [NC-Fundamentals §7](NC/NC-Fundamentals.md#queueing) |
| Congestion collapse | 輻輳崩壊 | [NC-Reliability §5](NC/NC-Reliability.md#congestion-control) |
| Congestion control | 輻輳制御 | [NC-Reliability §5](NC/NC-Reliability.md#congestion-control) |
| Container | コンテナ | [OS-Virtualization §4](OS/OS-Virtualization.md#containers-vs-vms) |
| Context-Free Grammar (CFG) | 文脈自由文法 | [AL-Models §2](AL/AL-Models.md#chomsky-hierarchy) |
| Context-free language | 文脈自由言語 | [AL-Models §2](AL/AL-Models.md#chomsky-hierarchy) |
| Contiguous allocation | 連続割り当て | [OS-Files §3](OS/OS-Files.md#allocation-methods) |
| Control plane / data plane | 制御プレーンとデータプレーン | [NC-Routing §2](NC/NC-Routing.md#forwarding) |
| Copy-on-write (COW) | コピーオンライト | [OS-Memory §8](OS/OS-Memory.md#virtual-memory-services) |
| CRC | 巡回冗長検査 | [NC-SingleHop §2](NC/NC-SingleHop.md#encoding-framing) |
| Critical section | クリティカルリージョン | [OS-Concurrency §2](OS/OS-Concurrency.md#race-conditions) |
| CSMA | 搬送波検知多重アクセス | [NC-SingleHop §3](NC/NC-SingleHop.md#mac) |
| CSMA/CA | 衝突回避付きCSMA | [NC-SingleHop §3](NC/NC-SingleHop.md#mac) |
| CSMA/CD | 衝突検出付きCSMA | [NC-SingleHop §3](NC/NC-SingleHop.md#mac) |
| DAG | 有向非巡回グラフ | [AL-Foundational §3](AL/AL-Foundational.md#tree) |
| Deadlock | デッドロック | [OS-Concurrency §3](OS/OS-Concurrency.md#deadlock-starvation) |
| Decidable | 決定可能 | [AL-Models §4](AL/AL-Models.md#decidability) |
| Decrease-and-conquer | 減治法 | [AL-Strategies §2](AL/AL-Strategies.md#decrease-and-conquer) |
| Device driver | デバイスドライバ | [OS-Devices §5](OS/OS-Devices.md#drivers-hal) |
| DFA | 決定性有限オートマトン | [AL-Models §1](AL/AL-Models.md#formal-automata) |
| DFS | 深さ優先探索 | [AL-Foundational §4](AL/AL-Foundational.md#search) |
| Diagonalization | 対角化 | [AL-Models §9](AL/AL-Models.md#arithmetization) |
| Dictionary operations | 辞書操作 | [AL-Foundational §0](AL/AL-Foundational.md#basics) |
| Dijkstra's algorithm | ダイクストラ法 | [AL-Foundational §6](AL/AL-Foundational.md#graph-algorithms) |
| Divide-and-conquer | 分割統治法 | [AL-Strategies §3](AL/AL-Strategies.md#divide-and-conquer) |
| DMA | ダイレクトメモリアクセス | [OS-Devices §3](OS/OS-Devices.md#dma-io) |
| DNS (Domain Name System) | ドメインネームシステム | [NC-Applications §1](NC/NC-Applications.md#naming-addressing) |
| Dynamic programming (DP) | 動的計画法 | [AL-Strategies §5](AL/AL-Strategies.md#transform-and-conquer) |
| ECN (Explicit Congestion Notification) | 明示的輻輳通知 | [NC-Reliability §5](NC/NC-Reliability.md#congestion-control) |
| EDF / RMS | 最早デッドライン優先・レート単調 | [OS-Real-time §3](OS/OS-Real-time.md#rt-scheduling) |
| Encapsulation | カプセル化 | [NC-Fundamentals §5](NC/NC-Fundamentals.md#layering-principles) |
| Encoding | 符号化 | [NC-SingleHop §2](NC/NC-SingleHop.md#encoding-framing) |
| Ethernet | イーサネット | [NC-SingleHop §4](NC/NC-SingleHop.md#ethernet-wifi) |
| Exponential backoff | 指数バックオフ | [NC-SingleHop §3](NC/NC-SingleHop.md#mac) |
| Failover | フェイルオーバー | [OS-Faults §4](OS/OS-Faults.md#implementation-methods) |
| FCFS | 到着順スケジューリング | [OS-Scheduling §2](OS/OS-Scheduling.md#policies) |
| FCS | フレームチェックシーケンス | [NC-SingleHop §2](NC/NC-SingleHop.md#encoding-framing) |
| FEC (Forward Error Correction) | 前方誤り訂正 | [NC-Reliability §3](NC/NC-Reliability.md#error-control) |
| FIFO | 先入れ先出し | [AL-Foundational §1](AL/AL-Foundational.md#linear)・[OS-Memory §4](OS/OS-Memory.md#paging) |
| File | ファイル | [OS-Files §1](OS/OS-Files.md#file-concept) |
| Finite State Automaton (FSA) | 有限オートマトン | [AL-Models §1](AL/AL-Models.md#formal-automata) |
| Flow control | フロー制御 | [NC-Reliability §4](NC/NC-Reliability.md#flow-control) |
| Floyd-Warshall | ワーシャル・フロイド法 | [AL-Foundational §6](AL/AL-Foundational.md#graph-algorithms) |
| fork / exec | fork / exec | [OS-Process §3](OS/OS-Process.md#loading-linking) |
| Framing | フレーミング | [NC-SingleHop §2](NC/NC-SingleHop.md#encoding-framing) |
| futex | futex | [OS-Scheduling §7](OS/OS-Scheduling.md#cooperative) |
| Graceful degradation | 縮退運転 | [OS-Faults §4](OS/OS-Faults.md#implementation-methods)・[OS-Real-time §6](OS/OS-Real-time.md#failures-safety) |
| Graph | グラフ | [AL-Foundational §3](AL/AL-Foundational.md#tree) |
| Greedy | 貪欲法 | [AL-Strategies §4](AL/AL-Strategies.md#greedy) |
| Halting problem | 停止問題 | [AL-Models §4](AL/AL-Models.md#decidability) |
| Hard real-time | ハードリアルタイム | [OS-Real-time §2](OS/OS-Real-time.md#hard-soft-lowlatency) |
| Hash table | ハッシュ表 | [AL-Foundational §2](AL/AL-Foundational.md#assoc-set) |
| HDD | 磁気ディスク | [OS-Devices §4](OS/OS-Devices.md#persistent-storage-history) |
| Heap | ヒープ | [AL-Foundational §3](AL/AL-Foundational.md#tree) |
| Heapsort | ヒープソート | [AL-Foundational §5](AL/AL-Foundational.md#sort) |
| Hidden terminal problem | 隠れ端末問題 | [NC-SingleHop §3](NC/NC-SingleHop.md#mac) |
| Hourglass model | 砂時計モデル | [NC-Fundamentals §5](NC/NC-Fundamentals.md#layering-principles) |
| HTTP | ハイパーテキスト転送プロトコル | [NC-Applications §4](NC/NC-Applications.md#app-layer-protocols) |
| Hypervisor | ハイパーバイザ | [OS-Virtualization §9](OS/OS-Virtualization.md#hypervisors) |
| Indexed allocation | 索引割り当て | [OS-Files §3](OS/OS-Files.md#allocation-methods) |
| inode | inode | [OS-Files §1](OS/OS-Files.md#file-concept) |
| Input size | 入力サイズ | [AL-Complexity §1](AL/AL-Complexity.md#framework) |
| Inter-process communication (IPC) | プロセス間通信 | [OS-Process §5](OS/OS-Process.md#ipc) |
| Interrupt | 割り込み | [OS-Principles §6](OS/OS-Principles.md#interrupts) |
| IPv4 / IPv6 | IPv4・IPv6 | [NC-Routing §3](NC/NC-Routing.md#ip-scalability) |
| ISP | インターネットサービスプロバイダ | [NC-Fundamentals §2](NC/NC-Fundamentals.md#internet-organization) |
| Iteration vs recursion | 反復と再帰 | [AL-Strategies §8](AL/AL-Strategies.md#iteration-vs-recursion) |
| IXP | インターネット相互接続点 | [NC-Fundamentals §2](NC/NC-Fundamentals.md#internet-organization) |
| Journaling | ジャーナリング | [OS-Advanced-Files §5](OS/OS-Advanced-Files.md#journaling)・[OS-Faults §7](OS/OS-Faults.md#journaling) |
| Kernel mode | カーネルモード | [OS-Principles §7](OS/OS-Principles.md#user-kernel-mode) |
| Knuth-Morris-Pratt (KMP) | KMP法 | [AL-Foundational §7](AL/AL-Foundational.md#matching) |
| Kruskal's algorithm | クラスカル法 | [AL-Foundational §6](AL/AL-Foundational.md#graph-algorithms) |
| Lambda calculus | ラムダ計算 | [AL-Models §13](AL/AL-Models.md#equivalent-models) |
| Layer | 層 | [NC-Fundamentals §4](NC/NC-Fundamentals.md#layers) |
| Learning switch | 学習型ブリッジ | [NC-SingleHop §5](NC/NC-SingleHop.md#l2-switching) |
| Linear-Bounded Automaton (LBA) | 線形有界オートマトン | [AL-Models §1](AL/AL-Models.md#formal-automata) |
| Linked allocation | 連結割り当て | [OS-Files §3](OS/OS-Files.md#allocation-methods) |
| Linked list | 連結リスト | [AL-Foundational §1](AL/AL-Foundational.md#linear) |
| Log-structured file system | ログ構造化ファイルシステム | [OS-Advanced-Files §5](OS/OS-Advanced-Files.md#journaling)・[OS-Faults §7](OS/OS-Faults.md#journaling) |
| Longest prefix match | 最長プレフィックス一致 | [NC-Routing §2](NC/NC-Routing.md#forwarding) |
| Loop invariant | ループ不変条件 | [AL-Models §6](AL/AL-Models.md#invariants) |
| LRU | 最近未使用置換 | [OS-Memory §4](OS/OS-Memory.md#paging) |
| MAC (Medium Access Control) | 媒体アクセス制御 | [NC-SingleHop §3](NC/NC-SingleHop.md#mac) |
| MAC address | MACアドレス | [NC-SingleHop §5](NC/NC-SingleHop.md#l2-switching)・[NC-Fundamentals §6](NC/NC-Fundamentals.md#network-elements) |
| Master theorem | マスター定理 | [AL-Complexity §8](AL/AL-Complexity.md#recurrences) |
| Meltdown / Spectre | メルトダウン／スペクター | [OS-Protection §3](OS/OS-Protection.md#real-vulnerabilities) |
| Memory-mapped file (mmap) | メモリマップトファイル | [OS-Memory §8](OS/OS-Memory.md#virtual-memory-services)・[OS-Advanced-Files §2](OS/OS-Advanced-Files.md#mmap) |
| Memory-mapped I/O | メモリマップドI/O | [OS-Devices §3](OS/OS-Devices.md#dma-io) |
| Merge sort | マージソート | [AL-Foundational §5](AL/AL-Foundational.md#sort) |
| Microkernel | マイクロカーネル | [OS-Principles §1](OS/OS-Principles.md#design-approaches) |
| Minimal spanning tree (MST) | 最小全域木 | [AL-Foundational §6](AL/AL-Foundational.md#graph-algorithms)・[NC-SingleHop §5](NC/NC-SingleHop.md#l2-switching) |
| MMU | メモリ管理ユニット | [OS-Memory §1](OS/OS-Memory.md#address-translation) |
| Modulation | 変調 | [NC-SingleHop §1](NC/NC-SingleHop.md#modulation-media) |
| Monolithic kernel | モノリシックカーネル | [OS-Principles §1](OS/OS-Principles.md#design-approaches) |
| MTBF | 平均故障間隔 | [OS-Faults §1](OS/OS-Faults.md#reliability-availability) |
| Mutex | ミューテックス | [OS-Concurrency §7](OS/OS-Concurrency.md#thread-safety) |
| namespaces / cgroups | 名前空間とコントロールグループ | [OS-Virtualization §4](OS/OS-Virtualization.md#containers-vs-vms) |
| NAT (Network Address Translation) | ネットワークアドレス変換 | [NC-Routing §3](NC/NC-Routing.md#ip-scalability) |
| Nested paging | ネステッドページング | [OS-Virtualization §2](OS/OS-Virtualization.md#nested-paging) |
| NFA | 非決定性有限オートマトン | [AL-Models §1](AL/AL-Models.md#formal-automata) |
| NP | クラスNP | [AL-Complexity §6](AL/AL-Complexity.md#tractability) |
| NP-Complete | NP完全 | [AL-Complexity §6](AL/AL-Complexity.md#tractability) |
| NP-Hard | NP困難 | [AL-Complexity §6](AL/AL-Complexity.md#tractability) |
| NRZ | 非ゼロ復帰符号 | [NC-SingleHop §2](NC/NC-SingleHop.md#encoding-framing) |
| Order of growth | 増加のオーダー | [AL-Complexity §1](AL/AL-Complexity.md#framework) |
| OverlayFS | オーバーレイファイルシステム | [OS-Virtualization §3](OS/OS-Virtualization.md#virtual-fs-devices) |
| P2P (peer-to-peer) | ピアツーピア | [NC-Applications §2](NC/NC-Applications.md#app-paradigms) |
| Packet switching | パケット交換 | [NC-Fundamentals §3](NC/NC-Fundamentals.md#switching-techniques) |
| Paravirtualization | 準仮想化 | [OS-Virtualization §3](OS/OS-Virtualization.md#virtual-fs-devices) |
| Parse tree | 導出木 | [AL-Models §2](AL/AL-Models.md#chomsky-hierarchy) |
| Policy / mechanism separation | ポリシーとメカニズムの分離 | [OS-Protection §5](OS/OS-Protection.md#policy-mechanism) |
| Polled I/O | ポーリングI/O | [OS-Devices §3](OS/OS-Devices.md#dma-io) |
| Popek-Goldberg requirements | Popek-Goldberg要件 | [OS-Virtualization §5](OS/OS-Virtualization.md#thrashing-popek-goldberg) |
| Preemptive scheduling | プリエンプティブ・スケジューリング | [OS-Scheduling §1](OS/OS-Scheduling.md#preemptive-nonpreemptive) |
| Prim's algorithm | プリム法 | [AL-Foundational §6](AL/AL-Foundational.md#graph-algorithms) |
| Priority inversion | 優先度逆転 | [OS-Real-time §3](OS/OS-Real-time.md#rt-scheduling) |
| Priority queue | 優先度付きキュー | [AL-Foundational §1](AL/AL-Foundational.md#linear) |
| Privileged instruction | 特権命令 | [OS-Virtualization §5](OS/OS-Virtualization.md#thrashing-popek-goldberg) |
| Probing | オープンアドレス法 | [AL-Foundational §2](AL/AL-Foundational.md#assoc-set) |
| Process | プロセス | [OS-Process §1](OS/OS-Process.md#process-as-virtualization) |
| Process Control Block (PCB) | プロセス制御ブロック | [OS-Process §1](OS/OS-Process.md#process-as-virtualization) |
| Processing delay | 処理遅延 | [NC-Fundamentals §7](NC/NC-Fundamentals.md#queueing) |
| Processor affinity | プロセッサ親和性 | [OS-Scheduling §3](OS/OS-Scheduling.md#smp-cache) |
| Propagation delay | 伝播遅延 | [NC-Fundamentals §7](NC/NC-Fundamentals.md#queueing) |
| Pumping lemma | ポンピング補題 | [AL-Models §8](AL/AL-Models.md#pumping-lemma) |
| Pushdown Automaton (PDA) | プッシュダウンオートマトン | [AL-Models §1](AL/AL-Models.md#formal-automata) |
| QAM | 直交振幅変調 | [NC-SingleHop §1](NC/NC-SingleHop.md#modulation-media) |
| QoS | サービス品質 | [NC-Fundamentals §7](NC/NC-Fundamentals.md#queueing) |
| Queue | キュー | [AL-Foundational §1](AL/AL-Foundational.md#linear) |
| Queuing delay | キューイング遅延 | [NC-Fundamentals §7](NC/NC-Fundamentals.md#queueing) |
| QUIC | QUIC | [NC-Applications §4](NC/NC-Applications.md#app-layer-protocols) |
| Quicksort | クイックソート | [AL-Foundational §5](AL/AL-Foundational.md#sort) |
| Race condition | 競合状態 | [OS-Concurrency §2](OS/OS-Concurrency.md#race-conditions)・[NC-SingleHop §3](NC/NC-SingleHop.md#mac) |
| RAID | RAID | [OS-Faults §2](OS/OS-Faults.md#raid) |
| Randomized algorithms | 乱択アルゴリズム | [AL-Strategies §9](AL/AL-Strategies.md#ka-core) |
| Record / Struct | レコード・構造体 | [AL-Foundational §1b](AL/AL-Foundational.md#composite) |
| Recurrence relation | 漸化式 | [AL-Complexity §8](AL/AL-Complexity.md#recurrences) |
| Red-Black tree | 赤黒木 | [AL-Foundational §3](AL/AL-Foundational.md#tree) |
| Reduction | 帰着 | [AL-Complexity §6](AL/AL-Complexity.md#tractability)・[AL-Models §10](AL/AL-Models.md#reducibility)・[AL-Strategies §5](AL/AL-Strategies.md#transform-and-conquer) |
| Redundancy | 冗長性 | [OS-Faults §1](OS/OS-Faults.md#reliability-availability) |
| Regular expression | 正規表現 | [AL-Models §2](AL/AL-Models.md#chomsky-hierarchy)・[AL-Foundational §7](AL/AL-Foundational.md#matching) |
| Regular expression matching | 正規表現照合 | [AL-Foundational §7](AL/AL-Foundational.md#matching) |
| Regular language | 正規言語 | [AL-Models §2](AL/AL-Models.md#chomsky-hierarchy) |
| Reliability | 信頼性 | [OS-Faults §1](OS/OS-Faults.md#reliability-availability) |
| Representation change | 表現の変更 | [AL-Strategies §5](AL/AL-Strategies.md#transform-and-conquer) |
| Rice's theorem | ライスの定理 | [AL-Models §4](AL/AL-Models.md#decidability) |
| Ring buffer | リングバッファ | [OS-Devices §2](OS/OS-Devices.md#buffering) |
| Rings of protection | 保護リング | [OS-Protection §6](OS/OS-Protection.md#rings) |
| Round robin (RR) | ラウンドロビン | [OS-Scheduling §2](OS/OS-Scheduling.md#policies) |
| Router | ルータ | [NC-Fundamentals §6](NC/NC-Fundamentals.md#network-elements) |
| RTOS | リアルタイムOS | [OS-Real-time §4](OS/OS-Real-time.md#latency-sources) |
| RTS/CTS | 送信要求・送信可 | [NC-SingleHop §3](NC/NC-SingleHop.md#mac) |
| SAT | 充足可能性問題 | [AL-Complexity §6](AL/AL-Complexity.md#tractability) |
| Search tree (BST) | 二分探索木 | [AL-Foundational §3](AL/AL-Foundational.md#tree) |
| Semaphore | セマフォ | [OS-Concurrency §7](OS/OS-Concurrency.md#thread-safety) |
| Set | 集合 | [AL-Foundational §2](AL/AL-Foundational.md#assoc-set) |
| Shadow page table | シャドウページテーブル | [OS-Virtualization §2](OS/OS-Virtualization.md#nested-paging) |
| Short-term / medium-term / long-term scheduler | 短期・中期・長期スケジューラ | [OS-Scheduling §2](OS/OS-Scheduling.md#policies) |
| SJF | 最短ジョブ優先 | [OS-Scheduling §2](OS/OS-Scheduling.md#policies) |
| Sliding window | ウィンドウ方式（スライディングウィンドウ） | [NC-Reliability §4](NC/NC-Reliability.md#flow-control) |
| SMP | 対称型マルチプロセッサ | [OS-Scheduling §3](OS/OS-Scheduling.md#smp-cache) |
| Socket | ソケット | [NC-Applications §5](NC/NC-Applications.md#transport-socket) |
| Soft real-time | ソフトリアルタイム | [OS-Real-time §2](OS/OS-Real-time.md#hard-soft-lowlatency) |
| Source routing | ソースルーティング | [NC-Routing §1](NC/NC-Routing.md#routing-paradigms) |
| Space-time tradeoff | 空間と時間のトレードオフ | [AL-Complexity §5](AL/AL-Complexity.md#space-time-tradeoffs)・[AL-Strategies §6](AL/AL-Strategies.md#space-time-tradeoffs) |
| Spin-lock | スピンロック | [OS-Concurrency §4](OS/OS-Concurrency.md#multiprocessor-issues) |
| SSD | 半導体ディスク | [OS-Devices §4](OS/OS-Devices.md#persistent-storage-history) |
| Stack | スタック | [AL-Foundational §1](AL/AL-Foundational.md#linear) |
| Starvation | 飢餓 | [OS-Scheduling §5](OS/OS-Scheduling.md#fairness-starvation)・[OS-Concurrency §3](OS/OS-Concurrency.md#deadlock-starvation)・[NC-Fundamentals §7](NC/NC-Fundamentals.md#queueing) |
| STP | スパニングツリープロトコル | [NC-SingleHop §5](NC/NC-SingleHop.md#l2-switching) |
| Switch | スイッチ | [NC-Fundamentals §6](NC/NC-Fundamentals.md#network-elements) |
| System call | システムコール | [OS-Principles §3](OS/OS-Principles.md#system-calls) |
| TCP / UDP | TCP・UDP | [NC-Applications §5](NC/NC-Applications.md#transport-socket) |
| TCP Tahoe / Reno / Vegas / Cubic | TCP輻輳制御の系譜（各版の違い） | [NC-Reliability §6](NC/NC-Reliability.md#tcp-performance) |
| TDMA / FDMA / CDMA | 時分割・周波数分割・符号分割多重アクセス | [NC-SingleHop §3](NC/NC-SingleHop.md#mac) |
| Thrashing | スラッシング | [OS-Memory §4](OS/OS-Memory.md#paging)・[OS-Virtualization §5](OS/OS-Virtualization.md#thrashing-popek-goldberg) |
| Thread | スレッド | [OS-Concurrency §1](OS/OS-Concurrency.md#thread-abstraction) |
| TLB | アドレス変換バッファ | [OS-Memory §1](OS/OS-Memory.md#address-translation) |
| Topological sort | トポロジカルソート | [AL-Foundational §6](AL/AL-Foundational.md#graph-algorithms) |
| Tractability | 扱いやすさ | [AL-Complexity §6](AL/AL-Complexity.md#tractability) |
| Transform-and-conquer | 変換統治法 | [AL-Strategies §5](AL/AL-Strategies.md#transform-and-conquer) |
| Transmission delay | 伝送遅延 | [NC-Fundamentals §7](NC/NC-Fundamentals.md#queueing) |
| Travelling salesperson problem (TSP) | 巡回セールスパーソン問題 | [AL-Strategies §1](AL/AL-Strategies.md#brute-force) |
| Tree | 木 | [AL-Foundational §3](AL/AL-Foundational.md#tree) |
| Turing Machine (TM) | チューリング機械 | [AL-Models §1](AL/AL-Models.md#formal-automata) |
| Undecidable | 決定不能 | [AL-Models §4](AL/AL-Models.md#decidability) |
| Unikernel | ユニカーネル | [OS-Principles §1](OS/OS-Principles.md#design-approaches) |
| Universal Turing Machine (UTM) | 万能チューリング機械 | [AL-Models §1](AL/AL-Models.md#formal-automata) |
| URI / URL | URI・URL | [NC-Applications §1](NC/NC-Applications.md#naming-addressing) |
| User mode | ユーザモード | [OS-Principles §7](OS/OS-Principles.md#user-kernel-mode) |
| Virtual circuit | 仮想回線 | [NC-Routing §1](NC/NC-Routing.md#routing-paradigms) |
| Virtual File System (VFS) | 仮想ファイルシステム | [OS-Advanced-Files §1](OS/OS-Advanced-Files.md#mount-vfs) |
| Virtualization | 仮想化 | [OS-Virtualization §1](OS/OS-Virtualization.md#isolation-protection) |
| VLAN | 仮想LAN | [NC-SingleHop §5](NC/NC-SingleHop.md#l2-switching) |
| VM escape | VMエスケープ | [OS-Virtualization §8](OS/OS-Virtualization.md#escapes-security) |
| WCET | 最悪実行時間 | [OS-Real-time §2](OS/OS-Real-time.md#hard-soft-lowlatency) |
| WiFi | 無線LAN | [NC-SingleHop §4](NC/NC-SingleHop.md#ethernet-wifi) |
| Worst-case | 最悪ケース | [AL-Complexity §1](AL/AL-Complexity.md#framework) |
| Write-ahead logging (WAL) | 先行書き込みログ | [OS-Advanced-Files §5](OS/OS-Advanced-Files.md#journaling)・[OS-Faults §7](OS/OS-Faults.md#journaling) |

## 日本語のみの用語 {#ja}

| 用語 | 定義している節 |
|---|---|
| エイジング | [OS-Scheduling §2](OS/OS-Scheduling.md#policies) |
| キャッシュコヒーレンス | [OS-Scheduling §3](OS/OS-Scheduling.md#smp-cache)・[OS-Memory §6](OS/OS-Memory.md#cache-speculative) |
| 共有メモリ | [OS-Process §5](OS/OS-Process.md#ipc) |
| 経路集約 | [NC-Routing §3](NC/NC-Routing.md#ip-scalability) |
| コンテキストスイッチ | [OS-Principles §9](OS/OS-Principles.md#context-switch-cost)・[OS-Process §4](OS/OS-Process.md#dispatch-context-switch) |
| コンボイ効果 | [OS-Scheduling §2](OS/OS-Scheduling.md#policies) |
| ステートレス | [NC-Applications §4](NC/NC-Applications.md#app-layer-protocols) |
| スナップショット | [OS-Advanced-Files §4](OS/OS-Advanced-Files.md#naming-search-backup) |
| スラブアロケータ | [OS-Memory §5](OS/OS-Memory.md#allocators) |
| 多層防御 | [OS-Protection §4](OS/OS-Protection.md#mitigations) |
| ツイストペア | [NC-SingleHop §1](NC/NC-SingleHop.md#modulation-media) |
| ディレクトリ | [OS-Files §4](OS/OS-Files.md#directory-structures) |
| 同軸ケーブル | [NC-SingleHop §1](NC/NC-SingleHop.md#modulation-media) |
| トラフィック強度 | [NC-Fundamentals §7](NC/NC-Fundamentals.md#queueing) |
| 内部断片化と外部断片化 | [OS-Files §3](OS/OS-Files.md#allocation-methods) |
| ハードリンクとシンボリックリンク | [OS-Files §4](OS/OS-Files.md#directory-structures)・[OS-Advanced-Files §4](OS/OS-Advanced-Files.md#naming-search-backup) |
| バイトスタッフィング | [NC-SingleHop §2](NC/NC-SingleHop.md#encoding-framing) |
| バッファリング | [OS-Devices §2](OS/OS-Devices.md#buffering) |
| フリーリスト | [OS-Memory §5](OS/OS-Memory.md#allocators) |
| ページ置換 | [OS-Memory §4](OS/OS-Memory.md#paging) |
| ページテーブル | [OS-Memory §1](OS/OS-Memory.md#address-translation) |
| ページフォルト | [OS-Memory §4](OS/OS-Memory.md#paging) |
| ページング | [OS-Memory §4](OS/OS-Memory.md#paging) |
| ベースバンド伝送とパスバンド伝送 | [NC-SingleHop §1](NC/NC-SingleHop.md#modulation-media) |
| マウントポイント | [OS-Files §2](OS/OS-Files.md#mount-access-sharing)・[OS-Advanced-Files §1](OS/OS-Advanced-Files.md#mount-vfs) |
| メモリ階層 | [OS-Memory §2](OS/OS-Memory.md#memory-hierarchy) |
