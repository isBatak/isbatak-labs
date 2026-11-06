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
    unstyled?: boolean | undefined
    ref?: Element | null
    /**
     * Use `aria-disabled` instead of the native `disabled` attribute, so the button stays focusable and announced
     * while disabled. Clicks are blocked while it's disabled.
     * @default false
     */
    accessibleWhenDisabled?: boolean | undefined
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
    accessibleWhenDisabled,
    onclick,
    unstyled, class: className,
    children,
    ...props
  }: ButtonProps = $props()
  const contextProps = hasButtonProps() ? useButtonProps() : undefined
  const [variantProps, localProps] = $derived(button.splitVariantProps({ ...contextProps?.(), ...props }))
  const isDisabled = $derived(Boolean(loading || disabled))
  const accessiblyDisabled = $derived(Boolean(accessibleWhenDisabled && isDisabled))

  const blockClick = (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
  }
</script>

<Ark
  as="button"
  bind:ref
  type="button"
  {...localProps}
  data-loading={dataAttr(loading)}
  data-disabled={dataAttr(isDisabled)}
  disabled={accessibleWhenDisabled ? undefined : isDisabled}
  aria-disabled={accessiblyDisabled || undefined}
  onclick={accessiblyDisabled ? blockClick : onclick}
  class={[!unstyled && button(variantProps), className]}
>
  {#if !localProps.asChild && loading}
    <Loader {spinner} text={loadingText} {spinnerPlacement}>{@render children?.()}</Loader>
  {:else}
    {@render children?.()}
  {/if}
</Ark>
