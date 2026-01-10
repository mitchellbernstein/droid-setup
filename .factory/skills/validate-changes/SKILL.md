---
name: validate-changes
description: Determine and run the repo's validators (lint/typecheck/tests) and stop if they fail.
---

# Validate Changes

## Goal

Before declaring work complete, run the project's validators and ensure they pass.

## Instructions

1. Determine the correct validation commands by checking existing project conventions (e.g., `package.json` scripts, `AGENTS.md`, CI workflows).
2. Run the smallest appropriate set first (lint/typecheck), then tests if applicable.
3. If anything fails:
   - summarize the failure
   - fix it
   - re-run the failing validator(s)
4. Record the exact commands and results in `thoughts/handoffs/latest.md` under **Validation**.

## Success

- Validators pass, or the session ends with a clear handoff describing failures and next steps.
