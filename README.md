# Little Explorers

A polished, offline-first educational play app for children ages 2–5.

## Source of truth

The product and engineering blueprint in `docs/Little_Explorers_Product_Engineering_Blueprint.md` is the source of truth for product decisions, UX rules, technical constraints, and development phases.

## Current phase

**Phase 0 — Product foundation**

- New production app from scratch
- Expo + React Native + TypeScript
- Expo Router
- Reusable design system and gameplay primitives
- Local/offline-first storage
- No Supabase yet
- No authentication yet
- No payments yet
- No production integrations

## Important rules

- Do not modify or import the old JapamApp codebase.
- Do not connect Supabase until the core app/site is ready and explicitly approved.
- Child-facing UX should be simple, visual, playful, and low-text.
- Every island should feel like a small world, not a quiz.
- Activities must have correct visuals, prompts, answers, and feedback.
- Product-level decisions that are not defined in the blueprint require approval before implementation.
