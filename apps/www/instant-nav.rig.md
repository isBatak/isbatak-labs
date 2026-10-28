# instant-nav rig: @isbatak/website (apps/www)

- BUILD: `cd apps/www && EXPOSE_TESTING_API=1 pnpm build` (runs `pnpm generate && next build`; >10 min cold)
- EXPOSE: `EXPOSE_TESTING_API=1` at build time sets `experimental.exposeTestingApiInProductionBuild` in `next.config.ts`
- RUN: `cd apps/www && pnpm exec playwright test e2e/<spec>`; Playwright `webServer` runs `pnpm start --port 3100`; set
  `BASE_URL` to target an already running server instead
- TEST USER: public; no authentication; state: none (static velite content), viewport 1440x900 so the `lg` DS sidebar is
  visible
- DRIFT: none known; content is generated at build time from `content/`
- CONTRACTS:
  - DS sidebar `nav[aria-label="Components"] a[href="/ds/components/badge"]` on `/ds/components/accordion` →
    `/ds/components/badge`; prefetched: full page (h1 "Badge", description, hero demo, Usage code); navigation-only:
    none (route is fully prerendered, so `navigation()` cannot defer); trigger: viewport (`prefetch={true}` on `NavLink`
    in `components/ds/ds-nav-groups.tsx`); test: `e2e/ds-sidebar-navigation.spec.ts`
- LOOP: local build → playwright (webServer starts/stops `next start`) → edit → rebuild; agent limits: none
- LIVENESS: n/a; local build and start
- WALLS: `@playwright/test` is an optional peer of `next`; installing it only in `apps/www` forks `next` into two
  instances and `next.config.ts` fails type check. Install `@playwright/test` and `@next/playwright` at the workspace
  root, then `pnpm install` so every package links the same `next`. Port 3100 must be free (`lsof -ti tcp:3100`).
