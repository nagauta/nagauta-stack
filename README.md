# nagauta-stack

個人開発のベースとなるテンプレートレポジトリ。

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| FW | Hono |
| フロント | htmx |
| CSS | Tailwind CSS |
| DB | PostgreSQL + Drizzle ORM |
| バリデーション | Zod |
| コンテナ | Docker |
| モノレポ | pnpm + Turborepo |
| Lint / Format | Biome |
| Git Hooks | Lefthook |
| テスト | Vitest + Playwright |
| CI/CD | GitHub Actions |
| 依存更新 | Renovate |

## 構成

```
apps/
  web/           # Hono アプリ
packages/
  config/        # 共有設定 (tsconfig)
```

## セットアップ

```bash
pnpm install
docker compose up -d
cp apps/web/.env.example apps/web/.env
pnpm --filter @nagauta-stack/web db:migrate
pnpm --filter @nagauta-stack/web db:seed
```

## 開発

```bash
pnpm dev
```

## コマンド

| コマンド | 説明 |
|---------|------|
| `pnpm dev` | 開発サーバー起動 |
| `pnpm build` | ビルド |
| `pnpm lint` | Lint / Format チェック |
| `pnpm lint:fix` | Lint / Format 自動修正 |
| `pnpm check-types` | 型チェック |
| `pnpm test` | テスト実行 |
| `pnpm --filter @nagauta-stack/web db:generate` | マイグレーションファイル生成 |
| `pnpm --filter @nagauta-stack/web db:migrate` | マイグレーション実行 |
| `pnpm --filter @nagauta-stack/web db:seed` | Seedデータ投入 |
| `pnpm --filter @nagauta-stack/web db:studio` | Drizzle Studio起動 |
