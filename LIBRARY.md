# LIBRARY.md

Central work-in-progress ledger for concurrent implementation.
Use the agent-work-coordinator skill or `scripts/coordinator.py` to edit this file.

<!-- agent-work-coordinator-state
{
  "checkouts": {},
  "implementations": {
    "nextjs-rework": {
      "agent": "Codex",
      "agent_uuid": "52aaa43c-e486-48a0-8d66-7e07258b99a9",
      "bumped_files": [],
      "checked_out": [],
      "checkins": [
        {
          "at": "2026-06-09T02:39:35Z",
          "files": [
            "AGENTS.md",
            ".gitignore",
            "index.html",
            "logo-mark.svg",
            "logo-mark-512.png",
            "package.json",
            "next.config.mjs",
            "postcss.config.mjs",
            "tailwind.config.ts",
            "tsconfig.json",
            "components.json",
            "next-env.d.ts",
            "app/layout.tsx",
            "app/page.tsx",
            "app/globals.css",
            "context/Providers.tsx",
            "components/theme-provider.tsx",
            "components/site-header.tsx",
            "components/site-footer.tsx",
            "components/brand-logo.tsx",
            "components/section-heading.tsx",
            "components/signet-threshold.tsx",
            "components/ui/button.tsx",
            "components/ui/card.tsx",
            "components/ui/badge.tsx",
            "lib/utils.ts",
            "types/site.ts",
            "data/site.ts",
            "public/logo-mark.svg",
            "public/logo-mark-512.png",
            "README.md"
          ],
          "note": "checkout requested"
        },
        {
          "at": "2026-06-09T02:42:06Z",
          "bumped": [],
          "checked_out": [
            "AGENTS.md",
            ".gitignore",
            "index.html",
            "logo-mark.svg",
            "logo-mark-512.png",
            "package.json",
            "next.config.mjs",
            "postcss.config.mjs",
            "tailwind.config.ts",
            "tsconfig.json",
            "components.json",
            "next-env.d.ts",
            "app/layout.tsx",
            "app/page.tsx",
            "app/globals.css",
            "context/Providers.tsx",
            "components/theme-provider.tsx",
            "components/site-header.tsx",
            "components/site-footer.tsx",
            "components/brand-logo.tsx",
            "components/section-heading.tsx",
            "components/signet-threshold.tsx",
            "components/ui/button.tsx",
            "components/ui/card.tsx",
            "components/ui/badge.tsx",
            "lib/utils.ts",
            "types/site.ts",
            "data/site.ts",
            "public/logo-mark.svg",
            "public/logo-mark-512.png",
            "README.md"
          ],
          "files": [
            "package.json",
            "next.config.mjs",
            "postcss.config.mjs",
            "tailwind.config.ts",
            "tsconfig.json",
            "components.json",
            "app/layout.tsx",
            "context/Providers.tsx",
            "components/theme-provider.tsx",
            "components/ui/button.tsx",
            "components/ui/card.tsx",
            "components/ui/badge.tsx",
            "lib/utils.ts",
            "README.md",
            ".gitignore"
          ],
          "note": "Scaffolded Next.js project config and base UI/provider files; converting page sections next",
          "queued": [],
          "remote_state": "up-to-date"
        },
        {
          "at": "2026-06-09T02:47:31Z",
          "bumped": [],
          "checked_out": [
            "AGENTS.md",
            ".gitignore",
            "index.html",
            "logo-mark.svg",
            "logo-mark-512.png",
            "package.json",
            "next.config.mjs",
            "postcss.config.mjs",
            "tailwind.config.ts",
            "tsconfig.json",
            "components.json",
            "next-env.d.ts",
            "app/layout.tsx",
            "app/page.tsx",
            "app/globals.css",
            "context/Providers.tsx",
            "components/theme-provider.tsx",
            "components/site-header.tsx",
            "components/site-footer.tsx",
            "components/brand-logo.tsx",
            "components/section-heading.tsx",
            "components/signet-threshold.tsx",
            "components/ui/button.tsx",
            "components/ui/card.tsx",
            "components/ui/badge.tsx",
            "lib/utils.ts",
            "types/site.ts",
            "data/site.ts",
            "public/logo-mark.svg",
            "public/logo-mark-512.png",
            "README.md",
            "pnpm-lock.yaml"
          ],
          "files": [
            "package.json",
            "pnpm-lock.yaml",
            "app/page.tsx",
            "app/globals.css",
            "data/site.ts",
            "types/site.ts",
            "components/site-header.tsx",
            "components/site-footer.tsx",
            "components/brand-logo.tsx",
            "components/section-heading.tsx",
            "components/signet-threshold.tsx"
          ],
          "note": "Converted static site into Next app, installed deps, and upgraded Next to patched 16.2.7 line before build verification",
          "queued": [],
          "remote_state": "up-to-date"
        },
        {
          "at": "2026-06-09T02:51:15Z",
          "bumped": [],
          "checked_out": [
            "AGENTS.md",
            ".gitignore",
            "index.html",
            "logo-mark.svg",
            "logo-mark-512.png",
            "package.json",
            "next.config.mjs",
            "postcss.config.mjs",
            "tailwind.config.ts",
            "tsconfig.json",
            "components.json",
            "next-env.d.ts",
            "app/layout.tsx",
            "app/page.tsx",
            "app/globals.css",
            "context/Providers.tsx",
            "components/theme-provider.tsx",
            "components/site-header.tsx",
            "components/site-footer.tsx",
            "components/brand-logo.tsx",
            "components/section-heading.tsx",
            "components/signet-threshold.tsx",
            "components/ui/button.tsx",
            "components/ui/card.tsx",
            "components/ui/badge.tsx",
            "lib/utils.ts",
            "types/site.ts",
            "data/site.ts",
            "public/logo-mark.svg",
            "public/logo-mark-512.png",
            "README.md",
            "pnpm-lock.yaml"
          ],
          "files": [
            "AGENTS.md",
            ".gitignore",
            "index.html",
            "logo-mark.svg",
            "logo-mark-512.png",
            "package.json",
            "pnpm-lock.yaml",
            "next.config.mjs",
            "postcss.config.mjs",
            "tailwind.config.ts",
            "tsconfig.json",
            "components.json",
            "next-env.d.ts",
            "app/layout.tsx",
            "app/page.tsx",
            "app/globals.css",
            "context/Providers.tsx",
            "components/theme-provider.tsx",
            "components/site-header.tsx",
            "components/site-footer.tsx",
            "components/brand-logo.tsx",
            "components/section-heading.tsx",
            "components/signet-threshold.tsx",
            "components/ui/button.tsx",
            "components/ui/card.tsx",
            "components/ui/badge.tsx",
            "lib/utils.ts",
            "types/site.ts",
            "data/site.ts",
            "public/logo-mark.svg",
            "public/logo-mark-512.png",
            "README.md"
          ],
          "note": "released completed files: AGENTS.md, .gitignore, index.html, logo-mark.svg, logo-mark-512.png, package.json, pnpm-lock.yaml, next.config.mjs, postcss.config.mjs, tailwind.config.ts, tsconfig.json, components.json, next-env.d.ts, app/layout.tsx, app/page.tsx, app/globals.css, context/Providers.tsx, components/theme-provider.tsx, components/site-header.tsx, components/site-footer.tsx, components/brand-logo.tsx, components/section-heading.tsx, components/signet-threshold.tsx, components/ui/button.tsx, components/ui/card.tsx, components/ui/badge.tsx, lib/utils.ts, types/site.ts, data/site.ts, public/logo-mark.svg, public/logo-mark-512.png, README.md",
          "queued": []
        }
      ],
      "completed_files": [
        "AGENTS.md",
        ".gitignore",
        "index.html",
        "logo-mark.svg",
        "logo-mark-512.png",
        "package.json",
        "pnpm-lock.yaml",
        "next.config.mjs",
        "postcss.config.mjs",
        "tailwind.config.ts",
        "tsconfig.json",
        "components.json",
        "next-env.d.ts",
        "app/layout.tsx",
        "app/page.tsx",
        "app/globals.css",
        "context/Providers.tsx",
        "components/theme-provider.tsx",
        "components/site-header.tsx",
        "components/site-footer.tsx",
        "components/brand-logo.tsx",
        "components/section-heading.tsx",
        "components/signet-threshold.tsx",
        "components/ui/button.tsx",
        "components/ui/card.tsx",
        "components/ui/badge.tsx",
        "lib/utils.ts",
        "types/site.ts",
        "data/site.ts",
        "public/logo-mark.svg",
        "public/logo-mark-512.png",
        "README.md"
      ],
      "goal": "Convert static O'Leary Labs site into a Next.js project modeled after SFLuv/app frontend",
      "id": "nextjs-rework",
      "last_checkin_at": "2026-06-09T02:51:15Z",
      "planned_files": [
        "AGENTS.md",
        ".gitignore",
        "index.html",
        "logo-mark.svg",
        "logo-mark-512.png",
        "package.json",
        "next.config.mjs",
        "postcss.config.mjs",
        "tailwind.config.ts",
        "tsconfig.json",
        "components.json",
        "next-env.d.ts",
        "app/layout.tsx",
        "app/page.tsx",
        "app/globals.css",
        "context/Providers.tsx",
        "components/theme-provider.tsx",
        "components/site-header.tsx",
        "components/site-footer.tsx",
        "components/brand-logo.tsx",
        "components/section-heading.tsx",
        "components/signet-threshold.tsx",
        "components/ui/button.tsx",
        "components/ui/card.tsx",
        "components/ui/badge.tsx",
        "lib/utils.ts",
        "types/site.ts",
        "data/site.ts",
        "public/logo-mark.svg",
        "public/logo-mark-512.png",
        "README.md",
        "pnpm-lock.yaml"
      ],
      "progress_note": "released completed files: AGENTS.md, .gitignore, index.html, logo-mark.svg, logo-mark-512.png, package.json, pnpm-lock.yaml, next.config.mjs, postcss.config.mjs, tailwind.config.ts, tsconfig.json, components.json, next-env.d.ts, app/layout.tsx, app/page.tsx, app/globals.css, context/Providers.tsx, components/theme-provider.tsx, components/site-header.tsx, components/site-footer.tsx, components/brand-logo.tsx, components/section-heading.tsx, components/signet-threshold.tsx, components/ui/button.tsx, components/ui/card.tsx, components/ui/badge.tsx, lib/utils.ts, types/site.ts, data/site.ts, public/logo-mark.svg, public/logo-mark-512.png, README.md",
      "queued": [],
      "started_at": "2026-06-09T02:39:35Z",
      "updated_at": "2026-06-09T02:51:15Z"
    }
  },
  "queues": {},
  "updated_at": "2026-06-09T02:51:15Z",
  "version": 1
}
agent-work-coordinator-state -->

## Active Implementation Briefs

### `nextjs-rework`

- Agent: Codex [52aaa43c-e486-48a0-8d66-7e07258b99a9]
- Started: 2026-06-09T02:39:35Z
- Last check-in: 2026-06-09T02:51:15Z
- Goal: Convert static O'Leary Labs site into a Next.js project modeled after SFLuv/app frontend
- Progress: released completed files: AGENTS.md, .gitignore, index.html, logo-mark.svg, logo-mark-512.png, package.json, pnpm-lock.yaml, next.config.mjs, postcss.config.mjs, tailwind.config.ts, tsconfig.json, components.json, next-env.d.ts, app/layout.tsx, app/page.tsx, app/globals.css, context/Providers.tsx, components/theme-provider.tsx, components/site-header.tsx, components/site-footer.tsx, components/brand-logo.tsx, components/section-heading.tsx, components/signet-threshold.tsx, components/ui/button.tsx, components/ui/card.tsx, components/ui/badge.tsx, lib/utils.ts, types/site.ts, data/site.ts, public/logo-mark.svg, public/logo-mark-512.png, README.md
- Planned paths:
  - `AGENTS.md`
  - `.gitignore`
  - `index.html`
  - `logo-mark.svg`
  - `logo-mark-512.png`
  - `package.json`
  - `next.config.mjs`
  - `postcss.config.mjs`
  - `tailwind.config.ts`
  - `tsconfig.json`
  - `components.json`
  - `next-env.d.ts`
  - `app/layout.tsx`
  - `app/page.tsx`
  - `app/globals.css`
  - `context/Providers.tsx`
  - `components/theme-provider.tsx`
  - `components/site-header.tsx`
  - `components/site-footer.tsx`
  - `components/brand-logo.tsx`
  - `components/section-heading.tsx`
  - `components/signet-threshold.tsx`
  - `components/ui/button.tsx`
  - `components/ui/card.tsx`
  - `components/ui/badge.tsx`
  - `lib/utils.ts`
  - `types/site.ts`
  - `data/site.ts`
  - `public/logo-mark.svg`
  - `public/logo-mark-512.png`
  - `README.md`
  - `pnpm-lock.yaml`
- Completed paths:
  - `AGENTS.md`
  - `.gitignore`
  - `index.html`
  - `logo-mark.svg`
  - `logo-mark-512.png`
  - `package.json`
  - `pnpm-lock.yaml`
  - `next.config.mjs`
  - `postcss.config.mjs`
  - `tailwind.config.ts`
  - `tsconfig.json`
  - `components.json`
  - `next-env.d.ts`
  - `app/layout.tsx`
  - `app/page.tsx`
  - `app/globals.css`
  - `context/Providers.tsx`
  - `components/theme-provider.tsx`
  - `components/site-header.tsx`
  - `components/site-footer.tsx`
  - `components/brand-logo.tsx`
  - `components/section-heading.tsx`
  - `components/signet-threshold.tsx`
  - `components/ui/button.tsx`
  - `components/ui/card.tsx`
  - `components/ui/badge.tsx`
  - `lib/utils.ts`
  - `types/site.ts`
  - `data/site.ts`
  - `public/logo-mark.svg`
  - `public/logo-mark-512.png`
  - `README.md`
- Checked-out paths:
_None._
- Queued paths:
_None._
- Bumped paths:
_None._
- Recent check-ins:
  - 2026-06-09T02:39:35Z: checkout requested (`AGENTS.md, .gitignore, index.html, logo-mark.svg, logo-mark-512.png, package.json, next.config.mjs, postcss.config.mjs, tailwind.config.ts, tsconfig.json, components.json, next-env.d.ts, app/layout.tsx, app/page.tsx, app/globals.css, context/Providers.tsx, components/theme-provider.tsx, components/site-header.tsx, components/site-footer.tsx, components/brand-logo.tsx, components/section-heading.tsx, components/signet-threshold.tsx, components/ui/button.tsx, components/ui/card.tsx, components/ui/badge.tsx, lib/utils.ts, types/site.ts, data/site.ts, public/logo-mark.svg, public/logo-mark-512.png, README.md`)
  - 2026-06-09T02:42:06Z: Scaffolded Next.js project config and base UI/provider files; converting page sections next (`package.json, next.config.mjs, postcss.config.mjs, tailwind.config.ts, tsconfig.json, components.json, app/layout.tsx, context/Providers.tsx, components/theme-provider.tsx, components/ui/button.tsx, components/ui/card.tsx, components/ui/badge.tsx, lib/utils.ts, README.md, .gitignore`)
  - 2026-06-09T02:47:31Z: Converted static site into Next app, installed deps, and upgraded Next to patched 16.2.7 line before build verification (`package.json, pnpm-lock.yaml, app/page.tsx, app/globals.css, data/site.ts, types/site.ts, components/site-header.tsx, components/site-footer.tsx, components/brand-logo.tsx, components/section-heading.tsx, components/signet-threshold.tsx`)
  - 2026-06-09T02:51:15Z: released completed files: AGENTS.md, .gitignore, index.html, logo-mark.svg, logo-mark-512.png, package.json, pnpm-lock.yaml, next.config.mjs, postcss.config.mjs, tailwind.config.ts, tsconfig.json, components.json, next-env.d.ts, app/layout.tsx, app/page.tsx, app/globals.css, context/Providers.tsx, components/theme-provider.tsx, components/site-header.tsx, components/site-footer.tsx, components/brand-logo.tsx, components/section-heading.tsx, components/signet-threshold.tsx, components/ui/button.tsx, components/ui/card.tsx, components/ui/badge.tsx, lib/utils.ts, types/site.ts, data/site.ts, public/logo-mark.svg, public/logo-mark-512.png, README.md (`AGENTS.md, .gitignore, index.html, logo-mark.svg, logo-mark-512.png, package.json, pnpm-lock.yaml, next.config.mjs, postcss.config.mjs, tailwind.config.ts, tsconfig.json, components.json, next-env.d.ts, app/layout.tsx, app/page.tsx, app/globals.css, context/Providers.tsx, components/theme-provider.tsx, components/site-header.tsx, components/site-footer.tsx, components/brand-logo.tsx, components/section-heading.tsx, components/signet-threshold.tsx, components/ui/button.tsx, components/ui/card.tsx, components/ui/badge.tsx, lib/utils.ts, types/site.ts, data/site.ts, public/logo-mark.svg, public/logo-mark-512.png, README.md`)

## File Checkouts

_No checked-out files._

## Queues

_No queued files._
