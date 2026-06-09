# LIBRARY.md

Central work-in-progress ledger for concurrent implementation.
Use the agent-work-coordinator skill or `scripts/coordinator.py` to edit this file.

<!-- agent-work-coordinator-state
{
  "checkouts": {},
  "implementations": {
    "add-bracket-project": {
      "agent": "Codex",
      "agent_uuid": "61b763a1-0ca8-4743-8c71-ceff63befa49",
      "bumped_files": [],
      "checked_out": [],
      "checkins": [
        {
          "at": "2026-06-09T03:10:55Z",
          "files": [
            "app/page.tsx",
            "data/site.ts",
            "types/site.ts",
            "app/style-guide/page.tsx",
            "README.md",
            "public/bracket/bracket-logo-transparent.svg",
            "public/bracket/bracket-logomark-transparent.svg",
            "public/bracket/bracket-logomark-with-background.svg",
            "public/bracket/bracket-logomark-with-background.png",
            "public/bracket/bracket-wordmark-transparent.svg",
            "public/bracket/social-card.png"
          ],
          "note": "checkout requested"
        },
        {
          "at": "2026-06-09T03:13:37Z",
          "bumped": [],
          "checked_out": [
            "app/page.tsx",
            "data/site.ts",
            "types/site.ts",
            "app/style-guide/page.tsx",
            "README.md",
            "public/bracket/bracket-logo-transparent.svg",
            "public/bracket/bracket-logomark-transparent.svg",
            "public/bracket/bracket-logomark-with-background.svg",
            "public/bracket/bracket-logomark-with-background.png",
            "public/bracket/bracket-wordmark-transparent.svg",
            "public/bracket/social-card.png"
          ],
          "files": [
            "app/page.tsx",
            "data/site.ts",
            "types/site.ts",
            "app/style-guide/page.tsx",
            "README.md",
            "public/bracket/bracket-logo-transparent.svg",
            "public/bracket/bracket-logomark-transparent.svg",
            "public/bracket/bracket-logomark-with-background.svg",
            "public/bracket/bracket-logomark-with-background.png",
            "public/bracket/bracket-wordmark-transparent.svg",
            "public/bracket/social-card.png"
          ],
          "note": "Added Bracket project data, assets, homepage panel, and style-guide product guidance; starting verification",
          "queued": [],
          "remote_state": "up-to-date"
        },
        {
          "at": "2026-06-09T03:15:06Z",
          "bumped": [],
          "checked_out": [
            "app/page.tsx",
            "data/site.ts",
            "types/site.ts",
            "app/style-guide/page.tsx",
            "README.md",
            "public/bracket/bracket-logo-transparent.svg",
            "public/bracket/bracket-logomark-transparent.svg",
            "public/bracket/bracket-logomark-with-background.svg",
            "public/bracket/bracket-logomark-with-background.png",
            "public/bracket/bracket-wordmark-transparent.svg",
            "public/bracket/social-card.png"
          ],
          "files": [
            "app/page.tsx",
            "data/site.ts",
            "types/site.ts",
            "app/style-guide/page.tsx",
            "README.md",
            "public/bracket/bracket-logo-transparent.svg",
            "public/bracket/bracket-logomark-transparent.svg",
            "public/bracket/bracket-logomark-with-background.svg",
            "public/bracket/bracket-logomark-with-background.png",
            "public/bracket/bracket-wordmark-transparent.svg",
            "public/bracket/social-card.png"
          ],
          "note": "released completed files: app/page.tsx, data/site.ts, types/site.ts, app/style-guide/page.tsx, README.md, public/bracket/bracket-logo-transparent.svg, public/bracket/bracket-logomark-transparent.svg, public/bracket/bracket-logomark-with-background.svg, public/bracket/bracket-logomark-with-background.png, public/bracket/bracket-wordmark-transparent.svg, public/bracket/social-card.png",
          "queued": []
        }
      ],
      "completed_files": [
        "app/page.tsx",
        "data/site.ts",
        "types/site.ts",
        "app/style-guide/page.tsx",
        "README.md",
        "public/bracket/bracket-logo-transparent.svg",
        "public/bracket/bracket-logomark-transparent.svg",
        "public/bracket/bracket-logomark-with-background.svg",
        "public/bracket/bracket-logomark-with-background.png",
        "public/bracket/bracket-wordmark-transparent.svg",
        "public/bracket/social-card.png"
      ],
      "goal": "Add Bracket as an O'Leary Labs project with Bracket branding",
      "id": "add-bracket-project",
      "last_checkin_at": "2026-06-09T03:15:06Z",
      "planned_files": [
        "app/page.tsx",
        "data/site.ts",
        "types/site.ts",
        "app/style-guide/page.tsx",
        "README.md",
        "public/bracket/bracket-logo-transparent.svg",
        "public/bracket/bracket-logomark-transparent.svg",
        "public/bracket/bracket-logomark-with-background.svg",
        "public/bracket/bracket-logomark-with-background.png",
        "public/bracket/bracket-wordmark-transparent.svg",
        "public/bracket/social-card.png"
      ],
      "progress_note": "released completed files: app/page.tsx, data/site.ts, types/site.ts, app/style-guide/page.tsx, README.md, public/bracket/bracket-logo-transparent.svg, public/bracket/bracket-logomark-transparent.svg, public/bracket/bracket-logomark-with-background.svg, public/bracket/bracket-logomark-with-background.png, public/bracket/bracket-wordmark-transparent.svg, public/bracket/social-card.png",
      "queued": [],
      "started_at": "2026-06-09T03:10:55Z",
      "updated_at": "2026-06-09T03:15:06Z"
    }
  },
  "queues": {},
  "updated_at": "2026-06-09T03:15:06Z",
  "version": 1
}
agent-work-coordinator-state -->

## Active Implementation Briefs

### `add-bracket-project`

- Agent: Codex [61b763a1-0ca8-4743-8c71-ceff63befa49]
- Started: 2026-06-09T03:10:55Z
- Last check-in: 2026-06-09T03:15:06Z
- Goal: Add Bracket as an O'Leary Labs project with Bracket branding
- Progress: released completed files: app/page.tsx, data/site.ts, types/site.ts, app/style-guide/page.tsx, README.md, public/bracket/bracket-logo-transparent.svg, public/bracket/bracket-logomark-transparent.svg, public/bracket/bracket-logomark-with-background.svg, public/bracket/bracket-logomark-with-background.png, public/bracket/bracket-wordmark-transparent.svg, public/bracket/social-card.png
- Planned paths:
  - `app/page.tsx`
  - `data/site.ts`
  - `types/site.ts`
  - `app/style-guide/page.tsx`
  - `README.md`
  - `public/bracket/bracket-logo-transparent.svg`
  - `public/bracket/bracket-logomark-transparent.svg`
  - `public/bracket/bracket-logomark-with-background.svg`
  - `public/bracket/bracket-logomark-with-background.png`
  - `public/bracket/bracket-wordmark-transparent.svg`
  - `public/bracket/social-card.png`
- Completed paths:
  - `app/page.tsx`
  - `data/site.ts`
  - `types/site.ts`
  - `app/style-guide/page.tsx`
  - `README.md`
  - `public/bracket/bracket-logo-transparent.svg`
  - `public/bracket/bracket-logomark-transparent.svg`
  - `public/bracket/bracket-logomark-with-background.svg`
  - `public/bracket/bracket-logomark-with-background.png`
  - `public/bracket/bracket-wordmark-transparent.svg`
  - `public/bracket/social-card.png`
- Checked-out paths:
_None._
- Queued paths:
_None._
- Bumped paths:
_None._
- Recent check-ins:
  - 2026-06-09T03:10:55Z: checkout requested (`app/page.tsx, data/site.ts, types/site.ts, app/style-guide/page.tsx, README.md, public/bracket/bracket-logo-transparent.svg, public/bracket/bracket-logomark-transparent.svg, public/bracket/bracket-logomark-with-background.svg, public/bracket/bracket-logomark-with-background.png, public/bracket/bracket-wordmark-transparent.svg, public/bracket/social-card.png`)
  - 2026-06-09T03:13:37Z: Added Bracket project data, assets, homepage panel, and style-guide product guidance; starting verification (`app/page.tsx, data/site.ts, types/site.ts, app/style-guide/page.tsx, README.md, public/bracket/bracket-logo-transparent.svg, public/bracket/bracket-logomark-transparent.svg, public/bracket/bracket-logomark-with-background.svg, public/bracket/bracket-logomark-with-background.png, public/bracket/bracket-wordmark-transparent.svg, public/bracket/social-card.png`)
  - 2026-06-09T03:15:06Z: released completed files: app/page.tsx, data/site.ts, types/site.ts, app/style-guide/page.tsx, README.md, public/bracket/bracket-logo-transparent.svg, public/bracket/bracket-logomark-transparent.svg, public/bracket/bracket-logomark-with-background.svg, public/bracket/bracket-logomark-with-background.png, public/bracket/bracket-wordmark-transparent.svg, public/bracket/social-card.png (`app/page.tsx, data/site.ts, types/site.ts, app/style-guide/page.tsx, README.md, public/bracket/bracket-logo-transparent.svg, public/bracket/bracket-logomark-transparent.svg, public/bracket/bracket-logomark-with-background.svg, public/bracket/bracket-logomark-with-background.png, public/bracket/bracket-wordmark-transparent.svg, public/bracket/social-card.png`)

## File Checkouts

_No checked-out files._

## Queues

_No queued files._
