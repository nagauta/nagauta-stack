# 0003: Terraform で GitHub レポ設定を管理

## 目的

GitHub レポの設定とブランチ保護ルールを宣言的に管理する。

## 管理対象

### github_repository

- visibility=public
- has_wiki=false, has_projects=false, has_discussions=false
- squash merge のみ許可
- delete_branch_on_merge=true, allow_auto_merge=true

### github_branch_protection (main)

- required_status_checks: lint, check-types, test
- required_approving_review_count=0（個人プロジェクト）
- dismiss_stale_reviews=true

## 方針

- 認証: `GITHUB_TOKEN` 環境変数
- State: ローカル管理（tfstate は gitignore）
- CI での自動 apply はしない（手動運用）
