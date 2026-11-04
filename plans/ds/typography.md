# Typography: decisions questionnaire

**Status:** every recommendation below was accepted on 2026-11-04.

**Purpose:** settle every open decision for the Typography category, so building it can start.

**How to answer:** each question has a recommendation, so `ok` takes it. "Not sure" is fine; I'll bring options to that
one before building it.

## Context

Typography covers text, heading, span, em, strong, code, code-block, kbd, link, link-overlay, mark, highlight,
blockquote, quote, list, prose, icon and visually-hidden. Already done here, in all four frameworks: Kbd and Icon.
Recipes already in panda-ds, ported from Chakra: code, heading, kbd, link, list, mark, blockquote, prose, icon.

tl-ds builds its typography on its own text-style scale (`xl.400.mono`, `xl.DEFAULT`, …), which panda-ds doesn't have.
So where tl-ds's recipes differ from Chakra's, the difference is mostly that scale plus a few TradeLocker colours
(`fg.brand`).

## Category-wide

### Should text components follow Layout's approach, with recipe-backed elements that take `asChild` (`as` in Svelte)?

Text, Span, Em, Strong, Code, Link, Mark, Quote and Heading are a single element each. They'd ship the way Container and
Separator did: `styled(ark.<element>, recipe)` in React, Vue and Solid, and `Box` with a recipe class in Svelte.

Recommendation: yes.

>

### Should panda-ds keep Chakra's recipes where tl-ds's differ only by its text-style scale?

This covers Code (radius, sizes, outline shadow), List (gap and padding) and Kbd. Taking tl-ds's versions would mean
porting its text-style scale too.

Recommendation: keep Chakra's recipes, and don't port tl-ds's scale.

>

### Should Em and Strong be recipes, as in tl-ds, rather than base styles, as in Chakra?

Chakra styles them inline (`fontStyle: italic`, `fontWeight: semibold`). tl-ds makes each a one-rule recipe, so themes
can restyle them, as the analog theme might.

Recommendation: recipes, from tl-ds.

>

### Should Text drop tl-ds's `TextPropsProvider`?

tl-ds lets a parent set default props for every `Text` inside it, through React context. Chakra doesn't have it, and the
other frameworks would each need their own context.

Recommendation: drop it.

>

## Heading

### Should Heading render an `h2` by default, with `asChild` (or `as` in Svelte) for other levels?

Chakra renders `h2` and uses `as` for other levels. The recipe here already has Chakra's sizes.

Recommendation: yes.

>

## Link and LinkOverlay

### Should Link keep Chakra's variants and colours, and take tl-ds's icon sizing?

Chakra colours links with `colorPalette.fg`. tl-ds uses `fg` with `fg.brand` on hover, which panda-ds has no token for,
and also sizes icons inside links (`_icon: { boxSize: 4 }`).

Recommendation: keep Chakra's variants and colours, and add tl-ds's `_icon` sizing.

>

### Should LinkBox and LinkOverlay ship, as a pattern plus a component, in every framework?

LinkBox is `position: relative` and lifts nested links and `abbr[title]` above the overlay. LinkOverlay stretches a link
over the whole box, so the card is clickable. Panda already has a `linkOverlay` pattern. Chakra v3 dropped them, and
tl-ds keeps them.

Recommendation: ship both, on Panda's `linkOverlay` pattern, in every framework.

>

## Mark and Highlight

### Should Mark keep Chakra's variants (`subtle`, `solid`, `text`, `plain`)?

tl-ds's Mark has a single style with no variants.

Recommendation: keep Chakra's.

>

### Should Highlight wrap Ark's `Highlight`, rendering each match as a `Mark`?

Ark ships `Highlight` in all four frameworks. tl-ds hand-rolls it on `useHighlight` and requires a string child.

Recommendation: wrap Ark's.

>

## Blockquote and Quote

### Should Blockquote ship on the existing slot recipe, with Chakra's parts?

The parts are `Root`, `Content`, `Caption` and `Icon`. The recipe is already in panda-ds, and tl-ds has none.

Recommendation: yes.

>

### Should Quote be a plain styled `q` element?

Chakra's Quote has no recipe.

Recommendation: yes.

>

## Code and CodeBlock

### Should CodeBlock be left out of this category?

Chakra's CodeBlock is about 500 lines, with a syntax-highlighter adapter (Shiki or highlight.js), tabs, line numbers and
a copy button. This repo already has `@isbatak/panda-code-preview` and www's code block. tl-ds has none.

Recommendation: leave it out, and plan it later alongside code-preview.

>

### Should Code ship as an inline recipe element in every framework?

Recommendation: yes, on the existing `code` recipe.

>

## List and Prose

### Should List ship with tl-ds's `role="list"` default?

The parts are `Root`, `Item` and `Indicator`, on the existing recipe. tl-ds sets `role="list"` on the root, which keeps
the list announced as one when `list-style: none` removes it in Safari.

Recommendation: yes.

>

### Should Prose ship as a component, as well as a recipe?

The `prose` recipe styles rich text such as rendered Markdown. There's no component for it yet in any framework.

Recommendation: a `Prose` element on the recipe, in every framework.

>

## Smaller components

### Should Span be a plain styled `span` that takes `asChild`?

Recommendation: yes.

>

### Should VisuallyHidden ship as Panda's `visuallyHidden` pattern?

That matches Layout's components.

Recommendation: yes.

>

### Can Kbd and Icon skip this category, apart from new demos and docs?

Both already ship in all four frameworks and were ported from Chakra recently.

Recommendation: yes. Only fill in any missing Chakra examples.

>

## Anything else?

Is there typography from tl-ds that you rely on and that isn't covered here, such as its text-style scale?

>
