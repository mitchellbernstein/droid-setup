---
name: premortem
description: Do a short risk analysis before implementing a large change; list threats and mitigations.
---

# Premortem

## Goal

Surface likely failure modes before implementation starts.

## Instructions

1. Restate the goal in 1-2 sentences.
2. List risks grouped by severity (HIGH/MEDIUM/LOW).
3. For each HIGH risk, propose at least one mitigation (feature flag, incremental rollout, tests, logging, fallback plan).
4. If any HIGH risks remain unmitigated, ask for explicit user acceptance before proceeding.

## Success

- The plan includes concrete mitigations and validation steps.
