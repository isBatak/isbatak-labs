---
"@isbatak/panda-ds": patch
---

Fix the `button` recipe's `icon` variant losing to the `size` padding. Sizes now set `--button-padding-x` and
`--button-min-width`, and only the `icon` variant applies the padding, so `icon` buttons are square again. You can remove
any `compoundVariants` workaround for `icon: true`.
