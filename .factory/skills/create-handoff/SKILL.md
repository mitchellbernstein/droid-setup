---
name: create-handoff
description: Generate an end-of-session handoff in thoughts/handoffs/latest.md with next steps, commands, and known risks.
---

# Create Handoff

## Goal

End a session with a crisp handoff that enables fast resumption.

## File

- `thoughts/handoffs/latest.md`

## Instructions

1. Create or overwrite `thoughts/handoffs/latest.md` with:

   - **Summary**: 2-5 bullets of what changed
   - **Current state**: what is working vs broken
   - **Next steps**: numbered list (include file paths)
   - **Validation**: exact commands to run (and whether they were run)
   - **Risks / gotchas**: known sharp edges

2. Keep it short; assume it will be read under time pressure.

## Success

- `/resume` can load this and immediately drive the next action.
