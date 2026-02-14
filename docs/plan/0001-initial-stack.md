# nagauta-stack

## 目的

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


## モノレポ構成

```
apps/
  web/           # Hono アプリ (ルート, ビュー, DB全部ここ)
packages/
  config/        # tsconfig, biome, tailwind の共有設定
```

DB層も web の中に置く。必要になったら切り出す。

## なぜ Hono + htmx か

- MVPはCRUDが中心。サーバーがHTML返すだけで十分なインタラクションが作れる
- クライアントJSのビルド・バンドルが不要で、構成が最小になる
- Hono は軽量で JSX サポートがあり、テンプレートとAPIを1つのFWで書ける
