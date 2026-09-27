<script module lang="ts">
  import type { ButtonVariantProps } from "@isbatak/panda-ds/recipes"
  import type { Snippet } from "svelte"
  import type { HTMLAttributes, HTMLButtonAttributes } from "svelte/elements"

  export interface ButtonLoadingProps {
    loading?: boolean | undefined
    loadingText?: string | undefined
    spinner?: Snippet | undefined
    spinnerPlacement?: "start" | "end" | undefined
  }

  export interface ButtonProps extends HTMLButtonAttributes, ButtonVariantProps, ButtonLoadingProps {
    ref?: Element | null
    asChild?: Snippet<[(props?: HTMLButtonAttributes) => HTMLAttributes<HTMLElement>]>
  }
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { dataAttr } from "@ark-ui/svelte/utils"
  import { button } from "@isbatak/panda-ds/recipes"
  import { Loader } from "../loader"
  import { hasButtonProps, useButtonProps } from "./button-props"

  let {
    ref = $bindable(null),
    loading,
    loadingText,
    spinner,
    spinnerPlacement,
    disabled,
    class: className,
    children,
    ...props
  }: ButtonProps = $props()
  const contextProps = hasButtonProps() ? useButtonProps() : undefined
  const [variantProps, localProps] = $derived(button.splitVariantProps({ ...contextProps?.(), ...props }))
</script>

<Ark
  as="button"
  bind:ref
  type="button"
  {...localProps}
  data-loading={dataAttr(loading)}
  disabled={loading || disabled}
  class={[button(variantProps), className]}
>
  {#if !localProps.asChild && loading}
    <Loader {spinner} text={loadingText} {spinnerPlacement}>{@render children?.()}</Loader>
  {:else}
    {@render children?.()}
  {/if}
</Ark>
