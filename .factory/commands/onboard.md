---
description: Initialize personal continuity files (thoughts ledger + handoff) for this repo.
---

Initialize continuity for this repository.

1. Ensure these files exist (create if missing):
   - `thoughts/ledgers/CONTINUITY.md`
   - `thoughts/handoffs/latest.md`
2. Populate `thoughts/ledgers/CONTINUITY.md` with a minimal, repo-specific template:
   - What this repo is
   - Key conventions (auth, DB, routing, etc.)
   - How to run validators (lint/typecheck/tests/build)
   - Common gotchas
3. Write `thoughts/handoffs/latest.md` with:
   - Current goal (or "No active task")
   - Next steps
   - Validation commands

If `thoughts/` should remain personal, add `thoughts/` to `.git/info/exclude` (do not modify `.gitignore`).
