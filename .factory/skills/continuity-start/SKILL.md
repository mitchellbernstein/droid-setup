---
name: continuity-start
description: Load local continuity context (thoughts ledger + latest handoff) at the start of work and restate the current plan.
---

# Continuity Start

## Goal

Start each session with lightweight, local context so work can continue across days without relying on chat history.

## Files

- `thoughts/ledgers/CONTINUITY.md`
- `thoughts/handoffs/latest.md`

## Instructions

1. Check whether `thoughts/ledgers/CONTINUITY.md` exists. If not, create it with a minimal template:
   - Project name
   - Key conventions / constraints
   - Known commands for validation (lint/tests)
   - Current focus / TODOs
2. If `thoughts/handoffs/latest.md` exists, read it and extract:
   - current goal
   - what changed last
   - next steps
   - blockers/risks
3. Respond with:
   - **Context** (3-8 bullets)
   - **Plan** (numbered steps)
   - **Questions** (only if needed)

## Success

- The plan references the repo's current state and uses the continuity files as source-of-truth for “what’s next”.
