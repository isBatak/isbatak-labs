---
name: promo-video
description: >-
  Promo video for anything in the labs repo, rendered with Remotion in apps/promos, plus its social posts. Use when asked
  for a promo or demo video, or for social media posts about something the repo ships.
---

# Promo video

A promo shows the **real** thing at work: every behaviour on screen runs through the repo's own code, never a mock built
for the video. Simplify the words, not the context.

## Steps

1. **Verify the claim.** Find the code behind every behaviour the promo will show. Done when each claim maps to a file
   and line, or to a named gap. Gaps are common: something that should follow a setting but hard-codes its own behaviour,
   a piece that doesn't exist yet, or support for only some of the frameworks or platforms the promo names.

2. **Settle the shape** with one AskUserQuestion round: the format (Remotion video, live page or posts only), how to
   close each gap (fix the code, or mock it in the demo and oversell the feature), and the concrete examples to show.
   Recommend fixing the code. For posts only, go to step 8.

3. **Close the gaps in the code**, with docs pages and demos for anything new. Done when `pnpm typecheck` passes in
   every touched package.

4. **Plan the beats** before writing any video code. Write down three to five beats and a payoff, 25 to 40 seconds in
   all, and for each beat: the one thing the eye lands on, what changes, and what stays out of frame. Then pick the
   **poster** frame, the one most people see alone as a thumbnail: the payoff left on screen, never a moment mid-change.
   Done when every beat has a single focal thing and the poster tells the story without motion.

   Typical arc: hook (two or three big lines), the thing in its default state, setup as code cards, the thing changing
   live, reach (frameworks, platforms), outro with where to get it and credits.

5. **Build the promo** in `apps/promos/src/<name>/` from the design system's components and recipes, following
   [REMOTION.md](REMOTION.md). Look up every recipe, variant and token with the `panda` MCP server before using it.
   - `theme.ts`: `SEGMENT_LENGTHS`, `SEGMENTS`, `VIDEO` (fps 30, wide 1920×1080, tall 1080×1920) and `T`, the beats.
   - `layers/`: one file per segment. `Promo.tsx` stacks them as named `Sequence`s.
   - `compositions.tsx`: a `Folder` with `<Name>Promo` and `<Name>PromoVertical`, registered in `src/Root.tsx`.
   - `panda.config.ts`: every package component the video renders is in `include`, or it renders unstyled.
   - `package.json`: `render:<name>` (to `../www/public/videos/<name>-demo.mp4`), `render:<name>-vertical` (to `out/`)
     and `still:<name>` at the poster frame. A script that generates assets runs before them and before `studio`.

   Done when `pnpm typecheck` passes in `apps/promos`.

6. **Rehearse.** Render both orientations, then turn each video into a contact sheet and Read it:

   ```sh
   ffmpeg -loglevel error -y -i <video>.mp4 -vf "fps=1,scale=480:-1,tile=6x6" -frames:v 1 -update 1 <scratchpad>/sheet.jpg
   ```

   A sheet can't show a pop, so also render stills just before, during and after every transition with
   `npx remotion still <Id> <scratchpad>/f<frame>.jpg --frame=<n> --image-format=jpeg --log=error`. Sample mid-beat: a
   frame on a cut renders empty.

   Hold each component on screen against its www docs demo. Any difference is a bug in the design system or the promo
   setup, not in the video.

   For each beat, answer: what does the eye land on first, is that the beat's focal thing, and does one thing clearly
   lead? Any "no" is the biggest fault. Fix in this order, re-rendering after each round: framing, hierarchy, motion,
   polish. Done when the [faults](REMOTION.md#faults) list comes back clean in both orientations.

7. **Format** with `pnpm format` at the root.

8. **Write the posts** in `plans/<NAME>-PROMO.md`: LinkedIn, an X/Bluesky thread under 280 characters per post, and a
   short caption. Use only facts verified in step 1, and credit third-party authors by name with a link. Write
   `<SITE_URL>` for the production URL, which only exists at deploy time. Attach the poster or the video, and hand the
   posts to the user to publish.
