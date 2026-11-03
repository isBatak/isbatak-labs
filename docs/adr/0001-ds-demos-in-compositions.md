# DS demos live in apps/compositions, and docs URLs put the framework first

DS docs show each component in the framework the reader picked, at `/ds/components/<fw>/<name>`. www can't build Vue,
Svelte and Solid itself, but `apps/compositions` already builds Experiments examples for every framework and lists them
in its manifest. So DS demos live in `apps/compositions/src/examples/ds/<fw>/`, www renders them live with their
snippets, and each framework's Storybook imports the same files instead of keeping its own copies.

DS pages use one framework segment instead of Experiments' `<fw>/<styling>/<api>`, because DS components are always
Panda recipes on Ark.
