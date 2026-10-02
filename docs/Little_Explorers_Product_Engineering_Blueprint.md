# Little Explorers — Product & Engineering Blueprint

## 1. Product Vision
Little Explorers is a premium-feeling educational play app for ages 2–5. It combines short digital activities with exploration, discovery, creativity, and real-world parent-child play. The goal is not to build a collection of quizzes. Each destination should feel like a small interactive world.

## 2. Product Differentiation
- Exploration-first learning
- Short, varied activities instead of repetitive quizzes
- Real-world play prompts and parent-child interaction
- Strong visual consistency
- Offline-first child experience
- Parent value beyond screen time: printables, travel/flight activity packs, and learning guidance
- Calm, safe, ad-free child experience

## 3. Target Experience
### Child
- Large touch targets
- Minimal reading
- Clear visual cause-and-effect
- Friendly characters
- Gentle retry feedback
- Celebration for correct actions
- Activities that visibly change the play area

### Parent
- Clear learning purpose
- Progress without pressure
- Parent-only settings and subscription controls
- Useful printable and real-world activities

## 4. Visual Design System
Palette: pink, yellow, sky blue, mint, lavender, with deep navy #172D50 for headings and names.
World style: floating islands, fluffy clouds, waterfalls, themed destinations, whimsical bright clean environments, no castle.

## 5. World Structure
Potential destinations include Flight Adventure, Animal Village, Underwater World, Creative Island, Space Discovery, Nature Explorer, Everyday Helpers, Feelings & Friendship, World Explorer, Little Scientists, Day & Night Explorer, Plant Growth Adventure, Dinosaur Discovery, Letter & Sound Adventure, Number Safari, Color & Shape Adventure, Puzzle Island, and Music & Rhythm Island.
Mature islands should generally contain around 10–15 meaningful activities with varied interaction patterns.

## 6. Activity Design Rules
Prefer a mix of matching, sorting, sequencing, tap-to-reveal, discovery, drag/drop when appropriate, build/create activities, simple counting, cause-and-effect interactions, and observation tasks. Avoid making every activity a three-option multiple-choice question.

### Feedback
Correct: celebrate the successful action; never show “Try again!” after a correct answer.
Incorrect: gentle retry; avoid shame, punishment, or confusing feedback.

### Content correctness
Before shipping, verify that visuals match the prompt, prompt matches the intended answer, options are unambiguous, correct-answer state is correct, feedback matches the actual result, and factual/scientific content is accurate and age-appropriate.

## 7. Core Gameplay Loop
Home → Map → Island → Activity → Feedback → Next activity → Island completion → Return to Map.

## 8. Navigation & Screens
Initial foundation: Home, Map, Island, Activity, Completion, and Parent area placeholder.

## 9. Technical Foundation
Production app starts from scratch.
Stack: Expo, React Native, TypeScript, Expo Router.
Initial storage: local persistent storage, offline-first.
Use reusable components, centralized design tokens, content separated from UI logic where practical, and a replaceable storage interface for future sync.

## 10. Suggested Structure
```
LittleExplorers/
├── app/
├── components/
├── data/
├── assets/
├── storage/
├── tests/
├── docs/
├── package.json
└── README.md
```

## 11. Backend Strategy
Do not add Supabase during the initial foundation phase. Later, after the core app and website are ready and explicitly approved, add Supabase behind stable interfaces and add sync without making offline play network-dependent.
Never touch production backend, database, OAuth, deployments, or release settings without explicit approval.

## 12. Subscription Strategy
Target subscription: $2.99/month. Value should come from the overall product experience rather than aggressive child-facing prompts. Subscription and purchase controls are parent-facing only.
Potential premium value: more destinations, more activities, printables, travel/flight packs, parent learning resources, expanded creative play.

## 13. Privacy & Safety
- No child-targeted ads
- No social feed
- No public leaderboards
- Minimal child data
- No mandatory login for core child experience
- Parent controls separated from child gameplay

## 14. Development Phases
### Phase 0 — Foundation
New Expo app, TypeScript, Expo Router, design tokens, reusable UI primitives, navigation skeleton, local storage abstraction, basic tests.

### Phase 1 — First playable world
One polished island, reusable activity engine, multiple activity types, feedback/completion flow, accessibility and touch-target review.

### Phase 2 — Content expansion
Additional islands, activity types, character interactions, real-world play prompts.

### Phase 3 — Parent value
Parent area, printables, travel packs, progress insights.

### Phase 4 — Backend and monetization
Only after explicit approval: Supabase, sync, authentication where justified, subscription infrastructure.

## 15. Definition of Done
A feature is done only when it is correct, playable, visually consistent, responsive, accessible for the target age, offline-safe where applicable, tested, integrated into navigation, and free of obvious content/feedback mismatches.

## 16. Coding Agent Rules
1. Start from this repository; do not reuse JapamApp code.
2. Follow this blueprint as the source of truth.
3. Do not invent product-level decisions when the blueprint is silent; ask for approval.
4. Make small, testable increments.
5. Report files changed, tests run, and decisions needing approval.
6. Do not touch Supabase, production data, OAuth, deployments, Play Store, or release configuration unless explicitly approved.
7. Prefer reusable primitives over one-off screens.
8. Keep learning content separate from rendering logic when practical.
9. Prioritize child delight, learning value, and parent-perceived value.

## 17. Product Quality Bar
Before release, ask: Would a 3–4 year old understand what to touch? Does the interaction teach the intended skill? Does the world feel playful rather than like a worksheet? Are visuals, questions, answers, and feedback consistent? Does it feel worth returning to? Does the parent see meaningful value for $2.99/month?

## 18. Immediate Next Step
Create the production Expo/React Native/TypeScript foundation in this repository from scratch: project setup, design tokens, reusable primitives, Home → Map → Island → Activity navigation, local storage abstraction, and basic test setup. Do not add Supabase, authentication, payments, or production integrations in this step.
