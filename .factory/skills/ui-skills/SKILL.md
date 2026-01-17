---
name: ui-skills
description: Opinionated UI constraints for building better interfaces with agents. Enforces strict rules for accessibility, performance, animations, typography, and design consistency.
argument-hint: <file-or-pattern>
---

# UI Skills - Opinionated UI Constraints

UI Skills enforces strict, opinionated constraints for building superior interfaces with AI agents.

## How to Use

- `/ui-skills` - Apply these constraints to any UI work in the conversation
- `/ui-skills <file>` - Review specific file against all constraints

## Review Output

When reviewing a file, output:
1. Violations (quote the exact line/snippet)
2. Why it matters (1 short sentence)
3. A concrete fix (code-level suggestion)

## Stack Requirements

### MUST
- Use **Tailwind CSS** defaults unless custom values already exist or are explicitly requested
- Use **`motion/react`** (formerly framer-motion) when JavaScript animation is required
- Use **`cn`** utility (`clsx` + `tailwind-merge`) for class logic

### SHOULD
- Use **`tw-animate-css`** for entrance and micro-animations in Tailwind CSS

## Component Rules

### MUST
- Use accessible component primitives for anything with keyboard/focus behavior (Base UI, React Aria, Radix)
- Use the project's existing component primitives first
- Add an `aria-label` to icon-only buttons
- Never rebuild keyboard or focus behavior by hand unless explicitly requested

### NEVER
- Mix primitive systems within the same interaction surface

### SHOULD
- Prefer [Base UI](https://base-ui.com/react/components) for new primitives if compatible

## Interaction Guidelines

### Accessibility
- MUST show errors next to where the action happens
- MUST respect `safe-area-inset` for fixed elements
- Should never use `h-screen`, use `h-dvh`

### User Experience
- MUST use `AlertDialog` for destructive or irreversible actions
- SHOULD use structural skeletons for loading states
- NEVER block paste in `input` or `textarea` elements

## Animation Rules

### NEVER DO
- Add animation unless explicitly requested
- Animate layout properties (`width`, `height`, `top`, `left`, `margin`, `padding`)
- Exceed `200ms` for interaction feedback
- Introduce custom easing curves unless explicitly requested
- Animate large images or full-screen surfaces

### MUST DO
- Animate only compositor props (`transform`, `opacity`)
- Use `ease-out` on entrance
- Pause looping animations when off-screen
- Respect `prefers-reduced-motion`

### SHOULD DO
- Avoid animating paint properties (`background`, `color`) except for small, local UI (text, icons)

## Typography Rules

### MUST
- Use `text-balance` for headings
- Use `text-pretty` for body/paragraphs
- Use `tabular-nums` for data

### SHOULD
- Use `truncate` or `line-clamp` for dense UI
- Never modify `letter-spacing` (`tracking-*`) unless explicitly requested

## Layout Rules

### MUST
- Use a fixed `z-index` scale (no arbitrary `z-*`)

### SHOULD
- Use `size-*` for square elements instead of `w-*` + `h-*`

## Performance Rules

### NEVER DO
- Animate large `blur()` or `backdrop-filter` surfaces
- Apply `will-change` outside an active animation
- Use `useEffect` for anything that can be expressed as render logic

## Design Rules

### NEVER DO
- Use gradients unless explicitly requested
- Use purple or multicolor gradients
- Use glow effects as primary affordances

### SHOULD DO
- Use Tailwind CSS default shadow scale unless explicitly requested
- Limit accent color usage to one per view
- Use existing theme or Tailwind CSS color tokens before introducing new ones

### MUST DO
- Give empty states one clear next action

## Usage Example

```
User: /ui-skills src/components/Button.tsx

Agent: Reviewing src/components/Button.tsx against UI Skills constraints...

Violation:
  Line 12: className="outline-none"
  Why: Removes focus indicator, breaking keyboard accessibility
  Fix: Change to "focus-visible:ring-2 focus:outline-none"

Violation:
  Line 15: onClick={() => {...}}
  Why: Non-semantic click handler on div element
  Fix: Use <button> element instead of <div>
```
