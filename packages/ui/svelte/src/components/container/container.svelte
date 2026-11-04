<script module lang="ts">
  import type { ContainerVariantProps } from "@isbatak/panda-ds/recipes"

  import type { BoxProps } from "../box"

  export type ContainerProps = BoxProps & ContainerVariantProps
</script>

<script lang="ts">
  import { container } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"

  let { ref = $bindable(), class: className, ...props }: ContainerProps = $props()
  const [variantProps, rest] = $derived(container.splitVariantProps(props))
</script>

<Box bind:ref class={[container(variantProps), className]} {...rest} />
