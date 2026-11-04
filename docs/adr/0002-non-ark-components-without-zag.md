# DS components that Ark doesn't have get hand-written bindings, not a Zag machine

The tl-ds extras with behaviour (beacon, ripple, bottom-nav-bar, sidebar, action-item, tone) live in
`packages/ark/<name>` as `@isbatak/ark-<name>`, with bindings in `src/{react,vue,svelte,solid}` written by hand using
each framework's own state. They have little state, so a Zag machine per component would cost more than it saves. This
differs from the Experiments (masonry, wheel-picker, …), which have real state machines in `packages/zag`.

Extras with no state or behaviour at all, such as float-gap, are panda-ds patterns or recipes instead, shipped like the
other layout components.
