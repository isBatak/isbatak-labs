---
name: animation
description: >-
  Use when writing, reviewing or fixing motion: a video or promo built frame by frame, a UI transition, a component animation, a demo, or when something animated feels stiff, abrupt or busy.
---

# Animation

Look for the project's own easing, tween and spring helpers before writing new ones.

## Direction

- **Every motion has a cause.** Content changes by moving (sliding, pushing, popping in place), so the viewer sees what
  turned into what. Groups stagger, beats overlap slightly, and the payoff holds long enough to read every word on
  screen. Between beats, something is always moving toward the next one.
- **Scenes enter the way they leave.** Each scene plays one motion forward on entry and in reverse on exit, so it opens
  from an empty frame and closes to the background, with no cut at either end. The entry runs over the first 18 frames
  and the exit over the last 18, both eased in and out. The focal thing fades in and scales from 0.92 to 1; a secondary
  piece, like a control below it, fades in and rises 16px instead. Apply this per scene, never to the whole video, so
  nothing animates twice.

  Stagger the pieces of a scene: each one starts its entry 6 frames after the one before, in reading order with the
  focal thing first. On exit they leave in reverse order, the last one in going first, so the focal thing is the last to
  go.

- **Continuity.** An object that carries across scenes keeps its position and size from one to the next.

## The 12 principles of animation

They are the checklist for every motion, translated to UI:

- _Staging_: one thing leads. The focal thing of a beat is the largest and highest-contrast object on screen, and
  supporting text and secondary objects sit quieter around it.
- _Anticipation_: a small wind-up before the main action, like the cursor pressing (scale about 0.85) before a click
  lands.
- _Slow in and slow out_: every move is eased, never linear.
- _Follow-through and overlapping action_: parts stop at different times. Labels and guides settle a few frames after
  the thing they describe, and a spring can overshoot slightly before it rests.
- _Arcs_: a cursor or object travelling across the frame curves its path instead of moving in a straight line.
- _Squash and stretch_: subtle scale on contact, such as a press or a pop, and never on text.
- _Secondary action_: a supporting motion, like a count-down label or a color crossfade, rides along with the main one
  without competing with it.
- _Timing_: 12–18 frames at 60 fps for small moves, 30–40 for a scene change, and a hold of at least 2 seconds on the
  payoff.
- _Exaggeration_: magnify the detail the story is about (zoom in, magnify) until it reads at thumbnail size.
- _Solid drawing_ and _appeal_: everything on screen is the real component at its real proportions, so the motion never
  distorts it into something the product would not render.
- _Straight-ahead and pose-to-pose_: write each beat as poses (frame keys) and interpolate between them.

## Faults

1. Content swaps between frames with no motion connecting old and new.
2. A shared object that jumps position or size between scenes.
3. A hold where nothing moves for more than about two seconds, or a payoff gone before it can be read.
4. A linear move, a straight-line path across the frame, or scale applied to text.
