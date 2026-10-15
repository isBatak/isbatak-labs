# Plus page plan

The grilling is done. Below is what we settled, the defaults I filled in, and how to build it.

## What Plus is

**Two tiers, two ways to pay.** Lemon Squeezy (the checkout Ark Plus uses, and the legal seller, so it handles VAT for
you) can sell the library but not your time. So agency work is invoiced by you directly.

|                  | Individual (freelancers)                                                                       | Business (agencies, featured)                                                                                                       |
| ---------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| What they get    | Plus library: blocks, agent kit, Pro Figma file                                                | Team library access, ~8 h/month of your time (calls, reviews, custom blocks), shared Slack channel                                  |
| Monthly          | €19                                                                                            | €990                                                                                                                                |
| Yearly (25% off) | €171                                                                                           | €8,910                                                                                                                              |
| How they buy     | Lemon Squeezy checkout, with a waitlist until the library opens                                | Application form → intro call → proposal → invoice                                                                                  |
| Extras           | Founding code: 25% off for as long as they stay subscribed, for the first 50 from the waitlist | Starts with a €1,500 onboarding sprint (~12 h: Code Connect, Figma MCP and agent kit set up in one project, plus a 2-hour workshop) |

- Prices are in EUR only, and the toggle shows Monthly first. Unused agency hours don't roll over.
- You have 5–10 hours a week, split half library, half agencies. That's 2 agency slots, shown on the Business card.
- Individuals can cancel anytime; access runs to the end of the paid period, with no refunds.
- Individual support: bugs go to GitHub issues with a `plus` label, private questions come by email.

**The library**

- React + Ark + Panda media blocks, built on the browser's `<video>` and `<audio>` plus Ark parts.
- **Launch set:** a full YouTube-style watch page, made of app shell, video gallery, video player and transcripts.
- **After launch, about one block a month:** audio player, image gallery, comments, live chat. Comments and live chat
  are UI only, with a typed adapter and an in-memory demo.
- **Figma:** a free version on Figma Community, plus a Pro file that comes with the subscription.
- **Guides:** the guides on Code Connect-ready components are free and public.
- **License:** commercial. Subscribers can use blocks in unlimited client projects, and the client keeps that code after
  the subscriber cancels. No reselling as a kit, template or library. Nothing that's public today moves behind the
  paywall.
- **Custom blocks:** you own them. The agency gets a permanent, non-exclusive license that passes to its client, and you
  can reuse generic versions in the library.

**The page.** It lives at `/plus`, is called "Plus", and is linked from the header nav, mobile nav and footer, with no
home-page teaser. Sections in order:

1. Hero: "Ship accessible, agent-ready design systems to every client."
2. What's inside: the planned blocks plus your live time-picker blocks
3. Plans
4. How agency work runs
5. Proof: open source, the Chakra UI meetup talk, the React workshop, the TradeLocker design system (you'll add images
   and details later)
6. FAQ
7. Closing call to action

## Defaults I picked (veto any)

- **Free vs Pro Figma:** free has the foundations and your open-source components; Pro has every Plus block with Code
  Connect mappings.
- **Hero buttons:** "Browse the library" and "See plans".
- **Checkout:** Lemon Squeezy's hosted checkout links, with no Lemon Squeezy script on the page.
- **Agency application fields:** name, email, agency, website, team size, stack, needs (blocks / workflow / training),
  timeline, message.
- **Waitlist form:** email plus an optional name, with the purpose stated: one email when Plus opens, with the founding
  code.
- **Onboarding:** one agency sprint per month at most. Two sprints plus two retainers in the same month would overrun
  your agency hours.
- **Storage:** no database anywhere.

## Build phases

### Phase 0: accounts and paperwork (blocks checkout, not the page)

1. **Lemon Squeezy (EUR):**
   - "Plus Individual" product with a €19 monthly and a €171 yearly option, license keys turned on.
   - Founding discount code: 25%, applies for life, limited to 50 uses.
   - Then cancel a test subscription and confirm its key stops validating. The registry depends on this.
2. **Private source repo:** create `isBatak/isbatak-plus`. Save a read-only GitHub token as the Actions secret
   `PLUS_REPO_TOKEN`.
3. **Resend:** add it through the Vercel Marketplace on the free tier. Until you verify a domain it can only email your
   own address, which is enough for alerts.
4. **Analytics:** turn on Vercel Web Analytics. Custom click events need a Vercel Pro plan.
5. **Accountant:** confirms the tax treatment of Lemon Squeezy payouts and agency invoices.
6. **Legal:** have a lawyer review templates for the terms, license, privacy policy and agency contract.
7. **Figma:** publish the free Community file and prepare the Pro file.

### Phase 1: the /plus page, no external services (can start now)

- The page itself: [page.tsx](<../../apps/www/app/(site)/plus/page.tsx>) with metadata, and
  [opengraph-image.tsx](<../../apps/www/app/(site)/plus/opengraph-image.tsx>) for link previews.
- Section components in [components/plus/](../../apps/www/components/plus/):
  - hero
  - library roadmap, reusing `BlockExample` and the time-picker demos
  - pricing
  - agency steps
  - proof cards
  - FAQ, reusing `Faq` and `FaqItem` from [faq.tsx](../../apps/www/components/tools/faq.tsx)
  - closing call to action
- **Pricing:** a client component with the monthly/yearly toggle (`SegmentGroup`), which announces price changes to
  screen readers. The slot count, a `libraryOpen` flag and the checkout URLs live in one small config module.
- **Navigation:** add "Plus" the same way as "Blocks" in
  [header-nav.tsx](../../apps/www/components/layout/header-nav.tsx),
  [mobile-nav.tsx](../../apps/www/components/layout/mobile-nav.tsx) and
  [site-footer.tsx](../../apps/www/components/layout/site-footer.tsx).
- **Conventions:**
  - Write static cards and FAQ items inline, without `.map()` ([AGENTS.md](../../AGENTS.md)).
  - Don't pass style props to `Section` or `Eyebrow`.
  - No code comments.

### Phase 2: forms

- **Form components:** Field, Input, Textarea and Checkbox wrappers in
  [packages/ui/react/src/components/](../../packages/ui/react/src/components/). They go on panda-ds's existing styles,
  follow the pattern of [switch.tsx](../../packages/ui/react/src/components/switch/switch.tsx), and are React only, as
  drawer and switch already are.
- **Server actions** in [actions.ts](<../../apps/www/app/(site)/plus/actions.ts>):
  - `applyAsAgency` and `joinWaitlist` validate the fields.
  - They reject submissions that fill the hidden honeypot field or arrive within about 3 seconds of the page loading.
  - They email you through Resend's API using plain `fetch`. Env vars: `RESEND_API_KEY` and `PLUS_INBOX`.
- **Form state:** the form components use `useActionState`. Read
  [forms.md](../../apps/www/node_modules/next/dist/docs/01-app/02-guides/forms.md) first.

### Phase 3: private source and registry

- **Build script:** [generate-plus.mjs](../../apps/www/scripts/generate-plus.mjs) runs as part of `generate`.
  - If [apps/www/.plus/](../../apps/www/.plus/) exists, it writes the registry data and the demo modules.
  - If not (forks, pull-request CI), it writes placeholders, so the build still passes.
  - Gitignore `.plus/` and everything it generates.
- **Registry route:** [route.ts](../../apps/www/app/r/plus/[name]/route.ts) reads `Authorization: Bearer <key>` and
  accepts either:
  - an agency token from `PLUS_AGENCY_TOKENS`, compared in constant time, or
  - a Lemon Squeezy key that the license API reports as valid and active, from your own store and product. Check the
    store and product IDs, or a key from any Lemon Squeezy store would work.

  Each validation is cached for a few minutes (`"use cache"` with `cacheLife`), keyed by a hash of the key; anything
  else gets a 401.

- **Deploy:** in the deploy job of [ci.yml](../../.github/workflows/ci.yml), add a second checkout of
  `isBatak/isbatak-plus` into `apps/www/.plus`, using `PLUS_REPO_TOKEN`, before `vercel build --prod`.
- **Setup docs:** subscribers add this to their `components.json`:
  `"@isbatak-plus": { "url": "https://<domain>/r/plus/{name}.json", "headers": { "Authorization": "Bearer ${ISBATAK_PLUS_KEY}" } }`.
  The agent kit ships as registry items that install skills and prompts.
- **Read first:**
  [route handlers](../../apps/www/node_modules/next/dist/docs/01-app/01-getting-started/15-route-handlers.md),
  [caching](../../apps/www/node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md) and
  [environment variables](../../apps/www/node_modules/next/dist/docs/01-app/02-guides/environment-variables.md).

### Phase 4: access page, legal, analytics, guides

- **`/plus/access`:** subscribers enter their key, it's checked the same way as the registry, and the page shows the Pro
  Figma link, registry setup and support email.
- **Legal:** `/legal/terms`, `/legal/license` and `/legal/privacy` as MDX in a new velite collection.
- **Analytics:** add `<Analytics />` to [layout.tsx](../../apps/www/app/layout.tsx), and track Apply, Waitlist and
  Checkout clicks.
- **Guides:** a `guides` velite collection at `/guides/[slug]`.

### Phase 5: library launch

- Build the watch-page set in the private repo, together with the Pro Figma components, Code Connect files and the agent
  kit.
- Set `libraryOpen` to true, so the Individual card switches from "Join the waitlist" to checkout.
- Email the waitlist with the founding code. This needs a verified domain in Resend.
- Then ship about one block a month.

## Check these early

1. **Cancelled keys:** if Lemon Squeezy doesn't change a key's status when its subscription ends, the registry keeps
   serving cancelled subscribers.
2. **Code Connect after duplication:** the mappings point at your Figma file. Check that component IDs survive
   duplication, and give subscribers a script that re-points the mappings to their copy.
3. **License API limits:** the validation cache in Phase 3 is required, not optional.
4. **Slot math:** at 5 hours a week, the agency half is about 11 hours a month, which fits only one retainer. Set slots
   to 1 if you're near that end.
5. **Resend limits:** the free tier sends at most 100 emails a day, so a large waitlist needs the launch email split
   over several days or a paid month.
