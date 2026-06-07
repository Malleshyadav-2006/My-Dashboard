# LearnSpace Dashboard

A personal learning dashboard I built to track my course progress. It pulls data from Supabase and shows everything in a clean dark UI — active courses, a progress bar for each one, and a yearly activity heatmap.

## What it does

- Shows all your courses with their current progress
- Displays a streak counter and daily greeting on the home screen
- Activity heatmap so you can see how consistent you've been
- Collapsible sidebar with links to Dashboard, Courses, Analytics, and Settings

## Tech used

- Next.js 14 (App Router)
- Supabase for the database
- Tailwind CSS for styling
- TypeScript

## Getting it running

1. Clone the repo and run `npm install`
2. Copy `.env.example` to `.env.local`
3. Add your Supabase project URL and anon key to `.env.local`
4. Run `npm run dev` and open `http://localhost:3000`

## Supabase setup

You need a `courses` table with these columns:

| Column | Type |
|---|---|
| id | uuid (primary key) |
| title | text |
| progress | integer (0–100) |
| icon_name | text |
| created_at | timestamptz |

Make sure Row Level Security is either disabled or has a public SELECT policy on the `courses` table, otherwise the dashboard won't be able to read anything.

## Notes

The `icon_name` field maps to a Lucide icon name (e.g. `Code2`, `BookOpen`, `Server`). If the icon name doesn't match anything in Lucide, it falls back to `BookOpen`.
