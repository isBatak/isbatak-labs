<script module lang="ts">
  import type { AlertVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type AlertRootProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & AlertVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { alert } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { provideAlertStatus, provideAlertStyles } from "./alert-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: AlertRootProps<T> = $props()
  const [variantProps, rest] = $derived(alert.splitVariantProps(props))
  const styles = $derived(alert(variantProps))
  provideAlertStyles(() => styles)
  provideAlertStatus(() => (typeof variantProps.status === "string" ? variantProps.status : "info"))
  const boxProps = $derived({ ...rest, class: [!unstyled && styles.root, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref role="alert" data-slot="root" {...boxProps} />
