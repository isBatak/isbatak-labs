---
"@isbatak/panda-ds": minor
---

Restyle the `select` recipe after the tl-ds select. The trigger uses input border colors that darken on hover and take
the focus color while the list is open, set through `--input-border-*` variables. Items and group labels get spacing per
size, `xs` and `lg` join `sm` and `md`, and a `fit` variant sizes the trigger to its value. New `search` and `empty`
slots style a search field at the top of the list and the text shown when nothing matches. When the content holds a
`list`, the list scrolls and the search stays above it. Adds an `inputElement` recipe for icons and text inside an
input.
