# 0001: 初期セットアップの会話ログ

日付: 2026-02-14

## 会話の流れ

### 1. 目的の整理

- 最初は「Claude の知見と MVP を作るテンプレートレポジトリ」として出発
- 何度か推敲して「個人開発のベースとなるテンプレートレポジトリ」に落ち着いた
- start.md に目的・技術スタック・意思決定の背景・補足の4セクションだけ書く方針
- 「無駄だと思うところを3つ挙げて」で不要なセクションを削っていった

### 2. 技術スタックの選定

最初に大枠を決めた:
- MVP種類 → フルスタック全部入り
- フロント → Hono + htmx (最初はこの組み合わせで即決)
- バックエンド → 最初は Vercel + Supabase だったが「どっちでもいい」に変更
- Claude知見 → CLAUDE.md テンプレート

その後「できるだけ最小限にしたい、クラウドとかSaaSはマジでどっちでもいい」という方針で:
- DB・認証・デプロイ先はテンプレートでは固定しない → 認証もデプロイも削除
- 最終的に DB は PostgreSQL + Drizzle ORM + Docker に決定

追加で決めたもの:
- Biome (linter / formatter)
- Lefthook (git hooks)
- Vitest + Playwright (テスト)
- GitHub Actions (CI/CD)
- Renovate (依存更新)
- Knip (未使用検出)
- Zod (バリデーション)

### 3. htmx を本当に使うかの議論

「なぜ Hono + htmx か」を納得いくまでディスカッション:
- 「MVPは検証すべき課題を最小で構築し検証できる成果物。不要なものは消すべき」
- 「Next.js は重たいが固い。UIは React だけでいいだろう。バックエンドは Hono のような軽量FWでいい」
- React (Vite) vs htmx を比較した結果、htmx に決定
- 理由: MVPはCRUD中心、サーバーがHTML返すだけで十分、クライアントJSのビルドが不要

### 4. モノレポ構成

- 最小構成を選択: apps/web + packages/config
- DB層も web の中に置く。必要になったら切り出す
- npx create-turbo@latest で /tmp に生成 → 必要なファイルだけ持ってきた
- Next.js / ESLint 関連は全部捨てて Hono + Biome 用にカスタマイズ

### 5. docs 構成

最初の案:
- docs/adr/ (意思決定記録)
- docs/architecture/ (アーキテクチャ)
- docs/log/ (作業ログ)

変遷:
- log/ → plan/ に変更。「planをどんどん残したい」
- adr/ → plan/ に含められるので廃止
- architecture/ → README に書くので廃止
- log/ を復活。会話ログの置き場所として

最終形:
- docs/plan/ — 計画・意思決定
- docs/log/ — 会話ログ

### 6. ファイル移動

- start.md → docs/plan/0001-initial-stack.md に移動

## 没にしたもの

- Supabase (Auth含む) → テンプレートでは固定しない → PostgreSQL + Drizzle ORM に
- changeset → npm公開しないので不要
- start.md をルートに置く → docs/plan/ に移動
- docs/adr/ → plan/ でカバーできる
- docs/architecture/ → README に書く
- 認証をテンプレートに含める → プロジェクトごとに決める
- デプロイ先をテンプレートで固定する → プロジェクトごとに決める

## 残作業

- htmx, Tailwind CSS の導入
- PostgreSQL + Drizzle ORM + Docker の構築
- Zod の導入
- Biome 設定ファイル作成
- Lefthook 設定
- Vitest + Playwright の導入
- GitHub Actions の設定
- Renovate の設定
- Knip の設定
- CLAUDE.md の作成
