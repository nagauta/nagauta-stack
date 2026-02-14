provider "github" {
  owner = "nagauta"
}

resource "github_repository" "this" {
  name        = "nagauta-stack"
  description = "個人開発のベースとなるテンプレートレポジトリ"
  visibility  = "public"

  has_issues      = true
  has_wiki        = false
  has_projects    = false
  has_discussions = false
  has_downloads   = true

  allow_merge_commit     = false
  allow_squash_merge     = true
  allow_rebase_merge     = false
  delete_branch_on_merge = true
  allow_auto_merge       = true

  vulnerability_alerts = true
}

resource "github_branch_protection" "main" {
  repository_id = github_repository.this.node_id
  pattern       = "main"

  enforce_admins = false

  required_status_checks {
    strict   = true
    contexts = ["lint", "check-types", "test"]
  }

  required_pull_request_reviews {
    required_approving_review_count = 0
    dismiss_stale_reviews           = true
  }

  allows_force_pushes = false
  allows_deletions    = false
}
