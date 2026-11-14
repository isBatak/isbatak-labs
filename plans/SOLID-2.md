# Solid 2 migration

Decision (2026-11-14): go Solid 2-only and drop Solid 1, but start only when `@ark-ui/solid` ships a Solid 2 release. No
dual Solid 1/2 support.

## Blocker

`@ark-ui/solid` has no Solid 2 build. `6.0.0-next.0` (newest `next`) depends on `@zag-js/solid@2.0.0-next.3`, which
targets Solid 1. `packages/ui/solid` and most of the Solid compositions are built on Ark.

Check: `npm view @ark-ui/solid dist-tags` and the `peerDependencies` of the newest version. Start when it accepts
`solid-js` 2 / `@solidjs/web` 2.

## Ecosystem status (2026-11-14)

| Package                    | Solid 2                                                      |
| -------------------------- | ------------------------------------------------------------ |
| `solid-js`, `@solidjs/web` | RC only (`2.0.0-rc.21`), API still changing between RCs      |
| `@zag-js/solid`            | `2.0.0-next.4` requires `solid-js` / `@solidjs/web` >= rc.19 |
| `@ark-ui/solid`            | none                                                         |
| `vite-plugin-solid`        | `3.0.0-next.*`                                               |
| `storybook-solidjs-vite`   | 10.7.4 already accepts `solid-js ^2.0.0-0`                   |
| `@solidjs/testing-library` | `1.0.0-rc.*`                                                 |

## Scope

About 420 files import Solid, zag's Solid adapter or Ark Solid:

- `packages/ui/solid` (188)
- `apps/compositions` (173, Solid examples and `mount`)
- `packages/ark/*` Solid adapters (48): code-preview, masonry, search-input, text-flip, wheel-picker
- `apps/storybook-solid` (15)
- 8 `package.json` files list `solid-js`

## Steps

1. Bump `solid-js` and add `@solidjs/web` at 2.x, `@ark-ui/solid`, `@zag-js/*` (whole catalog, including
   `@zag-js/solid`), `vite-plugin-solid` 3, `@solidjs/testing-library` 1.
2. Move `solid-js/web` imports to `@solidjs/web`.
3. Replace `splitProps` / `mergeProps` from `solid-js` with their Solid 2 equivalents, and `mergeProps` from
   `@zag-js/solid` with whatever the Solid 2 adapter exports.
4. Fix Suspense, store and signal API changes the Solid 2 migration guide lists.
5. Update `peerDependencies` in `packages/ui/solid` and `packages/ark/*` to `solid-js >=2`, with a major changeset.
6. Run `pnpm typecheck`, `pnpm test`, `pnpm exec oxlint`, the Solid storybook and the www Solid previews.

## Related

- `@zag-js/dismissable` is forced to `2.0.0-next.4` through `overrides` in `pnpm-workspace.yaml`, replacing the old
  patch. Remove the override once Ark depends on zag `next.4` or later itself.
- Remove the `@zag-js/*@2.0.0-next.4` entries in `minimumReleaseAgeExclude` once they are past the 24h window (after
  2026-11-14 21:05 UTC).
