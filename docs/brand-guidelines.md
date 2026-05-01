# PHILIA Brand Guidelines

This repository adopts PHILIA Brand Guidelines v1.0 (April 2026).

## Implementation Notes

- Use `apps/mobile/theme/tokens.ts` as the source of truth for color, spacing, font, and animation primitives.
- Treat seven-dimension colors (`knowledge`, `possession`, `dialogue`, `change`, `memory`, `contagion`, `contribution`) as semantic tokens, not decorative accents.
- Keep spacing to the defined 8-based scale (`4, 8, 16, 24, 32, 48, 80`).
- Default to sharp corners (`0px`) unless a component explicitly requires softer radii.
- Use restrained motion timing and easing from theme tokens.

## Voice & Copy

- Keep product copy calm, sincere, and concise.
- Prefer user-centered wording such as 「あなた」「想い」「記憶」.
- Avoid hype wording, slang, and excessive punctuation in UI copy.
