---
"@isbatak/panda-ds": major
---

The `dialog` and `drawer` recipes follow tl-ds: `size` now sets the density (`sm` or `md`: header padding and title
size) and the new `contentSize` sets the width (`xs` to `4xl`, `cover` and `full` for dialogs, `xs` to `4xl` and `full`
for drawers). Replace `size` with `contentSize` where you set a width. Dialogs get a bordered header and footer, a
border on the content and the modal layer, and both recipes drop a duplicate slot.
