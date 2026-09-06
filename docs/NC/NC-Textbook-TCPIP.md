# 指定テキスト対応表: 図解入門TCP/IP 第2版

NC（Networking and Communication）の指定テキストの1冊、[『図解入門TCP/IP 第2版 仕組み・動作が見てわかる』（みやたひろし、SBクリエイティブ、2024）](https://www.amazon.co.jp/dp/B0DLGKH98H)の目次と、CS2023 NC Knowledge Area のユニット構成の対応関係をまとめる。

!!! warning "この対応表について"
    - テキスト本文までは読んでおらず、**公開されている目次（章・節タイトル）からの推測**で対応させている。実際に読み進める際に、節の内容次第でユニットの割り当てがずれる可能性がある。
    - テキストは**OSI参照モデルの階層**（物理層 → データリンク層 → ネットワーク層 → トランスポート層 → アプリケーション層）で構成されているのに対し、NC KA のユニットは階層と機能横断のトピック（信頼性、経路制御など）で分かれているため、**1章 : 1ユニットには対応しない**。
    - NC-Security / NC-Mobility / NC-Emerging は本サイトで未作成（[[nc-progress]]参照）。該当箇所はリンクを張らずユニット名のみ記載する。

## 対応表

| テキストの章・節 | 内容 | 対応する NC ユニット（節） |
|---|---|---|
| 1.1 ネットワークの成り立ち | 通信の歴史（1950s〜2010s） | [NC-Fundamentals](NC-Fundamentals.md) §1〜2（重要性と課題／インターネットの組織） |
| 1.2 プロトコル | 通信の約束事としてのプロトコル | [NC-Fundamentals](NC-Fundamentals.md) §4〜5（階層とその役割／階層化の原理） |
| 1.3〜1.6 ネットワーク機器・ネットワークのカタチ | 機器の種類、LAN/WAN 等の形態 | [NC-Fundamentals](NC-Fundamentals.md) §6（ネットワーク要素）、[NC-SingleHop](NC-SingleHop.md) §6（LANトポロジ） |
| 2.1〜2.2 物理層（イーサネット・Wi-Fi） | 伝送媒体・変調・帯域幅 | [NC-SingleHop](NC-SingleHop.md) §1（変調・帯域幅・通信媒体） |
| 3.1 データリンク層 - イーサネット | フレーミング、CSMA/CD、L2スイッチング | [NC-SingleHop](NC-SingleHop.md) §2〜5（符号化とフレーミング／MAC／Ethernet／L2スイッチング） |
| 3.2 データリンク層 - Wi-Fi | フレーミング、CSMA/CA | [NC-SingleHop](NC-SingleHop.md) §2〜4（符号化とフレーミング／MAC／WiFi） |
| 3.3 ARP | IPアドレスとMACアドレスの対応付け | [NC-Routing](NC-Routing.md) §2（フォワーディング方式）付近 ※L2/L3境界のためNC-Fundamentalsの可能性もあり |
| 3.4 その他のL2プロトコル | VLAN、STP等 | [NC-SingleHop](NC-SingleHop.md) §5（L2スイッチング——学習・スパニングツリー・VLAN） |
| 4.x IPv4 / IPv6 | アドレッシング、ヘッダ構造 | [NC-Routing](NC-Routing.md) §3（IPとスケーラビリティ——IPv4とIPv6） |
| 4.x ルーティング | 経路制御アルゴリズム | [NC-Routing](NC-Routing.md) §1（経路制御のパラダイムと階層） |
| 4.x DHCP | アドレス自動割当 | 現状どのユニットにも明示対応なし。強いて言えば [NC-Routing](NC-Routing.md) 周辺 |
| 4.x NAT | アドレス変換 | [NC-Routing](NC-Routing.md) §3（NAT——アドレスを共有する） |
| 4.x IPv4/IPv6共存技術 | デュアルスタック、トンネリング等 | [NC-Routing](NC-Routing.md) §3（IPv4とIPv6） |
| 4.x ICMP | エラー通知・診断 | [NC-Routing](NC-Routing.md)（ネットワーク層の制御プロトコルとして） |
| 4.x IPsec | 暗号化・認証 | NC-Security（未作成） |
| 5.1 UDP | コネクションレス・信頼性なし | [NC-Reliability](NC-Reliability.md) §1（信頼できない配送——UDPという基準点）、[NC-Applications](NC-Applications.md) §5（TCP・UDPとソケットAPI） |
| 5.2 TCP | 誤り制御・フロー制御・輻輳制御 | [NC-Reliability](NC-Reliability.md) §3〜6（誤り制御／フロー制御／輻輳制御／TCPと性能） |
| 6.x HTTP | Web通信 | [NC-Applications](NC-Applications.md) §4（アプリケーション層プロトコル——HTTPを例に） |
| 6.x SSL/TLS | 暗号化通信 | NC-Security（未作成） |
| 6.x DNS | 名前解決 | [NC-Applications](NC-Applications.md) §1（命名とアドレス方式——DNSとURI） |
| 6.x メール（SMTP/POP/IMAP等） | メール転送・受信プロトコル | [NC-Applications](NC-Applications.md) §2〜3（分散アプリケーションの構成法／アプリケーション要求の多様性） |
| 6.x 管理・運用プロトコル（SNMP等） | ネットワーク監視・管理 | 現状どのユニットにも明示対応なし |
| 6.x 冗長化プロトコル（VRRP等） | 経路・機器の冗長化 | [NC-Routing](NC-Routing.md) 周辺（明示的な節はなし） |
| 6.x ALGプロトコル | NAT越え支援 | [NC-Routing](NC-Routing.md) §3（NAT）の応用 |

## 読み進め方の目安（推測）

CS2023 の学習順（[NC-Fundamentals](NC-Fundamentals.md) → [NC-SingleHop](NC-SingleHop.md) → [NC-Applications](NC-Applications.md)/[NC-Reliability](NC-Reliability.md)/[NC-Routing](NC-Routing.md)）に沿うなら、テキストは**1章 → 2〜3章 → 5章 → 4章 → 6章**の順で読むと、既存ユニットの学習順と噛み合いやすい。テキスト自体はOSI階層順（下位層→上位層）に並んでいるため、この並べ替えは本サイトの学習順に合わせるための提案であり、テキストの構成そのものを否定するものではない。

## 前後のユニット

- 対応する各ユニット本文: [NC-Fundamentals](NC-Fundamentals.md) / [NC-SingleHop](NC-SingleHop.md) / [NC-Applications](NC-Applications.md) / [NC-Reliability](NC-Reliability.md) / [NC-Routing](NC-Routing.md)
