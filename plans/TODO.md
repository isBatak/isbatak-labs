1. [ ] finish all components in ds
   1. [ ] port composition, partialy open and closed components (plan in [ds/README.md](./ds/README.md))
   1. [ ] code-block, alongside code-preview
   1. write docs
   1. [ ] DS API tables come from React's types, so Vue, Svelte and Solid pages show React-only types, such as Stack's
          `separator: boolean | ReactElement`
   1. [ ] Stack's `separator` line is faint against the layout demo boxes, since both use soft grey tokens
   1. [ ] Bring Button's `accessibleWhenDisabled` (aria-disabled instead of `disabled`, clicks blocked) to the other
          components that can be disabled: menu items, select and combobox triggers, tabs, segment items, form controls.
          Chakra wants to solve this across components rather than per component in v4.
   1. [ ] Revisit the DS components built on recipes (Container, Separator, Em, Strong, Text, Link, Mark, …) and see
          whether Panda patterns can do the job instead, so those recipes can be dropped
1. finish swipable list
   1. add docs
      - https://github.com/marekrozmus/react-swipeable-list
      - https://chanhdai.com/components/swipe-actions
      - https://reactbits.dev/c/micro/swipe-row?snapBounce=0.14
      - https://uiarc.dev/components/swipe-actions
1. [] Finish analog theme
   1. [] add grain to surface layers
   1. [] button icons
   1. [] improve button action states effect, it looks shitty
   1. [] make swithc look like actual switch
1. studio
   1. simplify, remove all unnecessary clutter
   1. implement theme and tokens explorer similar to figma but with panda css support
1. [x] Blog page in apps/www, with posts illustrated by spec figures (dashed guides, measured widths, hatched padding,
       value pills) like the menu sizing figure. Figures use Caliper (`@isbatak/panda-caliper`, see `plans/caliper.md`).
   1. [x] Optical alignment for button icons
   1. [ ] StartIcon and EndIcon: why icons are slots rather than children, spacing and sizing against the label
   1. [ ] Concentric radius: inner radius = outer radius − padding, and how `concentric-preset` does it
   1. [ ] Grain Panda plugin: what `grain-preset` adds, how to put grain on surface layers
   1. [ ] Menu sizing rules: min width for short labels, fit-content with 16px trailing space, max width then truncate
          (https://www.kevdu.co/reads/sizing-dropdown-menus)
1. [ ] Heading https://github.com/chakra-ui/chakra-ui/discussions/10937
1. [ ] Raise the https://is-agentic.com/scan/isbatak.dev score (50/100 on 2026-11-07)
   1. [ ] Markdown content negotiation: answer `Accept: text/markdown` with a Markdown body,
          `Content-Type:     text/markdown` and `Vary: Accept`, including a Markdown 404 body that links to the docs,
          sitemap and llms.txt
   1. [ ] Put more of the homepage and inner page text in the raw HTML (homepage content ratio is 4.5%, target 5%), with
          one H1 and sequential headings
   1. [ ] `/sitemap.xml` with every indexable URL and lastmod dates
   1. [ ] Homepage metadata: canonical link, `og:image`, `og:type`
   1. [ ] Homepage JSON-LD (Organization or SoftwareApplication) with name, description, url, contactPoint
   1. [ ] Link `/docs` and the GitHub org from the homepage; name the product clearly in the homepage title and headings
   1. [ ] llms.txt with a "when to use this" section naming concrete use cases
   1. [ ] `/about`, `/contact` and `/privacy` pages, 500+ characters each
   1. [ ] The OpenAPI, public API, JSON error and function-calling checks assume an HTTP API. Skip them unless the site
          gets one.
1. [ ] Post the Boring Icons promo on social media: video and posts are ready in [ICONS-PROMO.md](./ICONS-PROMO.md)
1. [ ] DS follow-ups from the component loop (details in `git show 95e87297:plans/progress.txt`)
   1. [ ] Vue boolean variants: a bare `striped` attribute arrives as `""` and misses the variant, so demos pass
          `:striped="true"` (virtualizer, card `interactive`). Declare them as Boolean props.
   1. [ ] Svelte `Button`, `IconButton` and `Badge` take no style props, so demos fall back to `class={css(...)}` or
          wrappers. Add style props like `Box`.
   1. [ ] svelte-check prints "Map maximum size exceeded" traces in `apps/compositions` and `storybook-svelte`, takes
          about 10 minutes, and crashed on ripple props passed to `Center`. Find the type that blows up.
   1. [ ] `api:generate` reorders `typeahead` in the listbox and tree-view entries of `ds-api.json` between runs. Sort
          keys in the generator.
   1. [ ] Drop the Svelte `frame` port once Ark's Svelte Frame stops rendering into the replaced `about:blank` body.
   1. [ ] json-tree-view: `indentGuide={false}` still draws guides in React and Svelte (Ark checks
          `typeof === "boolean"`). Patch the wrapper or report upstream.
   1. [ ] Menu submenus: Vue logs "Maximum recursive updates exceeded in <menu-content>"; hovering `Menu.TriggerItem`
          doesn't open the submenu in Svelte and Solid. Reproduces on the `DS/Menu` Submenu story.
   1. [ ] Vue `Format.Number` doesn't declare `style`, `currency` or `maximumFractionDigits` as props (upstream Ark).
   1. [ ] Visual check of the components committed without a Storybook run: card `interactive`, data-list separators,
          stat, table sticky columns, grid-table, qr-code, marquee, progress striped/animated, progress-circle
          indeterminate and `round`.
