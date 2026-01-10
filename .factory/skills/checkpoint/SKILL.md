---
name: checkpoint
description: Update local continuity ledger and capture a checkpoint of current state (what's done, what's next, risks).
---

# Checkpoint

## Goal

Create a durable, quick-to-scan checkpoint so you can safely pause or switch tasks.

## Files

- `thoughts/ledgers/CONTINUITY.md`
- `thoughts/handoffs/latest.md` (optional; can be updated on checkpoint too)

## Instructions

1. Update `thoughts/ledgers/CONTINUITY.md` with:
   - Decisions made today
   - New constraints or conventions discovered
   - Commands that matter (how to run lint/tests/build, etc.)
   - Outstanding TODOs
2. Write a short checkpoint section in `thoughts/handoffs/latest.md` (or create it) containing:
   - Goal
   - Progress (bullets)
   - Next steps (ordered)
   - Validation status (what ran / what still must run)
   - Risks / gotchas

## Success

- Someone can run `/resume` tomorrow and be productive immediately.
