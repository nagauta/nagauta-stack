---
name: update-docs
description: Update docs/log with recent session activity
argument-hint: "[optional focus area]"
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# Update Docs

Organize and append recent session activity to `docs/log/`.

## Steps

1. Check existing files in `docs/log/`
2. Review recent git log and session conversation to summarize work done
3. Append to the relevant log file. Create a new file if it's a new topic

## File Naming

`NNNN-<slug>.md` (e.g., `0001-initial-setup.md`, `0002-api-tests.md`)

## Writing Rules

- Record what was done, what was decided, and what was discarded
- Keep it concise. Do not paste code
- Track completed items with checklists

## Scope

- `docs/log/` — session logs and work records
- Do not modify `docs/plan/` (plans are managed separately)

Use $ARGUMENTS as additional context for what to focus on.
