---
"@isbatak/panda-ds": minor
---

The drawer recipe now animates swipes: a released drag springs back or settles with the speed of the gesture, and the
backdrop fades as the drawer is swiped away. Drawers opened on top of another scale it back so it peeks out behind them.
The `size` and `placement` variants accept responsive values, since the recipe no longer uses compound variants.

**Breaking:** the drawer's `contained` variant is now called `float`. Replace `contained` with `float` on `Drawer.Root`.
