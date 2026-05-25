#!/usr/bin/env bash
set -euo pipefail

current_branch="$(git branch --show-current)"

if [[ "$current_branch" != "main" ]]; then
  echo "Promotion must be run from main. Current branch: $current_branch" >&2
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Working tree has uncommitted changes. Commit or stash them before promoting." >&2
  git status --short
  exit 1
fi

if ! git remote get-url prod >/dev/null 2>&1; then
  echo "Missing prod remote. Add it with:" >&2
  echo "git remote add prod https://github.com/ooodhctvorec/educeramic.ru.git" >&2
  exit 1
fi

git push prod main:main
