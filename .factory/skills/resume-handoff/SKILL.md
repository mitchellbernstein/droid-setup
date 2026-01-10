---
name: resume-handoff
description: Read thoughts/handoffs/latest.md and restate next steps and required validation.
---

# Resume Handoff

## Goal

Resume work reliably from the last recorded state.

## File

- `thoughts/handoffs/latest.md`

## Instructions

1. If `thoughts/handoffs/latest.md` does not exist, ask the user whether to run `/onboard` (create initial continuity) or proceed without continuity.
2. If it exists, read it and respond with:
   - **Where we left off** (3-8 bullets)
   - **Next actions** (numbered)
   - **Validation gate** (what must be run before considering “done”)

## Success

- The next action is unambiguous and references concrete files/commands.
