---
name: rams
description: RAMS (Review, Accessibility, Modernization, Standards) - Comprehensive design review focusing on WCAG 2.1 compliance, visual design, and component accessibility. Use when asked to "review design", "check accessibility", "audit UI", or "review for WCAG".
argument-hint: <file-or-pattern>
---

# RAMS - Design Review & Accessibility Audit

RAMS performs comprehensive design reviews focusing on WCAG 2.1 compliance, visual design standards, and component accessibility violations.

## How It Works

1. Analyze the specified file(s) for accessibility violations
2. Check visual design patterns (spacing, typography, color contrast)
3. Evaluate component accessibility states
4. Provide actionable fixes with WCAG references

## Accessibility (WCAG 2.1)

### Critical Issues
- Images without text alternatives
- Icon-only buttons missing accessible names
- Form inputs lacking labels
- Non-semantic click handlers (div onClick)
- Links without href attributes

### Serious Issues
- Focus indicators removed without replacement
- Missing keyboard event handlers
- Color-only information conveyance
- Touch targets under 44×44px

### Moderate Issues
- Skipped heading levels
- Positive tabIndex values
- Roles without required attributes

## Visual Design

### Layout & Spacing
- Inconsistent spacing values across components
- Overflow and alignment problems
- Z-index stacking conflicts

### Typography
- Mixed font families and weights
- Line height inconsistencies
- Missing font fallbacks

### Color & Contrast
- Contrast ratios below 4.5:1
- Missing hover and focus states
- Dark mode inconsistencies

### Component States
- Missing button states (hover, active, disabled)
- Missing form field states (focus, error, disabled)
- Inconsistent borders and shadows

## Output Format

Each issue includes:
- Line number
- Code snippet
- Fix suggestion
- WCAG reference

## Usage

When invoked with a file:
1. Review the specified file against all accessibility rules
2. Report violations with line numbers and code snippets
3. Provide concrete fix suggestions
4. Include WCAG reference for each issue

If no files specified, ask the user which files to review.

## Example Output

```
═══════════════════════════════════════════════════
RAMS DESIGN REVIEW: src/components/Button.tsx
═══════════════════════════════════════════════════

CRITICAL (1 issue)
───────────────────
[A11Y] Line 24: Button missing accessible name
<button><CloseIcon /></button>
Fix: Add aria-label="Close"
WCAG: 4.1.2

SERIOUS (1 issue)
─────────────────
[A11Y] Line 48: Focus outline removed
className="outline-none"
Fix: Add focus-visible:ring-2
WCAG: 2.4.7

═══════════════════════════════════════════════════
SUMMARY: 1 critical, 1 serious, 0 moderate
Score: 72/100
═══════════════════════════════════════════════════
```
