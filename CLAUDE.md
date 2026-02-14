# nagauta-stack

個人開発のベースとなるテンプレートレポジトリ。Hono + htmx + Tailwind CSS によるサーバーサイドレンダリング中心の構成。

## コマンド

```bash
pnpm dev              # 開発サーバー起動 (Hono + Tailwind watch)
pnpm build            # ビルド
pnpm lint             # Biome による lint / format チェック
pnpm lint:fix         # Biome による自動修正
pnpm check-types      # TypeScript 型チェック
pnpm test             # Vitest 実行
```

### DB 関連 (apps/web)

```bash
pnpm db:generate      # Drizzle マイグレーションファイル生成
pnpm db:migrate       # マイグレーション実行
pnpm db:studio        # Drizzle Studio 起動
```

### インフラ

```bash
docker compose up -d   # PostgreSQL 起動
```

## 技術スタック

- Hono (JSX サポート) + htmx + Tailwind CSS v4
- PostgreSQL + Drizzle ORM + Zod
- pnpm + Turborepo モノレポ
- Biome (lint/format)、Lefthook (pre-push)

## ファイル配置ルール

- 新しいページ → `apps/web/src/routes/` + `apps/web/src/views/pages/`
- htmx 用パーシャル → `apps/web/src/views/partials/`
- レイアウト → `apps/web/src/views/layouts/`
- DB スキーマ → `apps/web/src/db/schema.ts`
- DB クエリ → `apps/web/src/db/`
- 共有 TypeScript 設定 → `packages/config/typescript/`

## コーディング規約

- テンプレートは Hono JSX (.tsx) で書く。React は使わない
- スタイリングは Tailwind クラスで行う。カスタム CSS は最小限
- htmx 属性はテンプレート内にインラインで書く
- バリデーションは Zod スキーマで行う
- インデントはタブ (Biome 設定に従う)
- コミットメッセージは Conventional Commits 形式
