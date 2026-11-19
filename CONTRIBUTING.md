# Contributing

Thank you for helping improve the Pragmatic AI Pact.

The goal is to keep the Pact practical, concise, and useful to engineering teams. Contributions should strengthen that goal rather than turn the document into a comprehensive AI policy or governance framework.

## Start with a discussion

For a new idea or a change to a principle, start a [GitHub Discussion](https://github.com/pragmatic-ai-pact/ai-pact/discussions). Explain the problem, why the current wording or guidance falls short, and the change you propose.

Use discussions to compare experiences and build agreement before making substantial edits.

## Propose focused changes

Once an approach is clear, open a pull request:

- Keep changes small and focused.
- Explain the motivation and expected benefit.
- Preserve the existing intent and voice unless the discussion explicitly agrees otherwise.
- Avoid rewriting sections unrelated to the proposal.
- Update the source file that owns the content:
  - `PACT.md` for the eight principles.
  - `INTRODUCTION.md` for the website introduction.
  - `ADOPTERS.md` for the shared commitment, acknowledgements, and adopter registry.
  - `AI_INSTRUCTIONS.md` for the suggested AI instructions.

The website imports these files. Avoid duplicating their content in `index.html`.

## Add an adopter

Add teams and individuals as list entries in `ADOPTERS.md` (no tables). Use a plain name, or link a GitHub handle so the website can display its GitHub mark automatically:

```markdown
- Example Engineering Team
- Ernesto Puerta
- [@github-handle](https://github.com/github-handle)
```

Only add people who have explicitly agreed to be listed as signatories.

## Review principles

Be constructive and challenge ideas, not people. Disagreements are welcome. Explain trade-offs and prefer practical improvements over additions that merely make the document longer.

## Changes and decisions

Maintainers may ask for clarification, suggest a narrower change, or decline a proposal that does not fit the Pact's purpose. Significant changes should be discussed openly and reflected in the repository history.
