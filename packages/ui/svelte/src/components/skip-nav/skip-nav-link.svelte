<script module lang="ts">
  import type { SkipNavLinkVariantProps } from "@isbatak/panda-ds/recipes"

  import type { BoxProps } from "../box"

  export type SkipNavLinkProps = Omit<BoxProps<"a">, "id" | "href"> &
    SkipNavLinkVariantProps & {
      /**
       * The id of the `SkipNavContent` the link jumps to.
       * @default "skip-nav"
       */
      id?: string | undefined
      unstyled?: boolean | undefined
    }
</script>

<script lang="ts">
  import { skipNavLink } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"

  let { ref = $bindable(), id = "skip-nav", unstyled, class: className, ...props }: SkipNavLinkProps = $props()
  const boxProps = $derived({ ...props, class: [!unstyled && skipNavLink(), className] } as Record<string, unknown>)
</script>

<Box as="a" bind:ref {...boxProps} href={`#${id}`} />
