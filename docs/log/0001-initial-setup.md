# 0001: 初期セットアップの会話ログ

日付: 2026-02-14

## やったこと

- テンプレートレポジトリの目的・技術スタックを決定
- Turborepo + pnpm でモノレポを構築
- Hono の最小限のアプリを apps/web に作成
- docs/ の構成を決定 (plan, architecture, log)

## 意思決定の経緯

### 技術スタック

- フロントは htmx に決定。MVPはCRUD中心なのでSPAは不要という判断
- React も検討したが、htmx の「サーバーがHTML返すだけ」のシンプルさを優先
- DB・デプロイ先はテンプレートでは固定しない方針だったが、PostgreSQL + Drizzle ORM + Docker に決定
- Biome, Lefthook, Vitest + Playwright, GitHub Actions, Renovate, Knip も含める

### モノレポ構成

- 最小構成を選択: apps/web + packages/config
- DB層も web の中に置く。必要になったら切り出す

### docs構成

- adr/ は plan/ に含められるので廃止
- plan/ に計画・意思決定を、log/ に会話ログを置く

## 没にしたもの

- Supabase → DB・認証をテンプレートで固定しない方針に変更 → 最終的にPostgreSQL + Drizzle ORMに決定
- changeset → npm公開しないので不要
- start.md をルートに置く → docs/plan/ に移動

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
