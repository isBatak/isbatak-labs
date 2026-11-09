<script module lang="ts">
  import { Toaster as ArkToaster } from "@ark-ui/svelte/toast"
  import type { ComponentProps } from "svelte"

  type ArkToasterProps = ComponentProps<typeof ArkToaster>

  export type ToasterProps = Omit<ArkToasterProps, "children"> & {
    children?: ArkToasterProps["children"] | undefined
  }
</script>

<script lang="ts">
  import type { ToastOptions } from "@ark-ui/svelte/toast"
  import { Button } from "../button"
  import ToastActionTrigger from "./toast-action-trigger.svelte"
  import ToastBody from "./toast-body.svelte"
  import ToastCloseTrigger from "./toast-close-trigger.svelte"
  import ToastDescription from "./toast-description.svelte"
  import ToastIndicator from "./toast-indicator.svelte"
  import ToastRoot from "./toast-root.svelte"
  import ToastTitle from "./toast-title.svelte"

  let { children, ...props }: ToasterProps = $props()
</script>

{#snippet defaultToast(toast: () => ToastOptions)}
  <ToastRoot>
    <ToastIndicator />
    <ToastBody>
      {#if toast().title}
        <ToastTitle>{toast().title}</ToastTitle>
      {/if}
      {#if toast().description}
        <ToastDescription>{toast().description}</ToastDescription>
      {/if}
    </ToastBody>
    {#if toast().action}
      <ToastActionTrigger>
        {#snippet asChild(triggerProps)}
          <Button {...triggerProps()} size="sm" variant="outline">{toast().action?.label}</Button>
        {/snippet}
      </ToastActionTrigger>
    {/if}
    {#if toast().closable !== false}
      <ToastCloseTrigger />
    {/if}
  </ToastRoot>
{/snippet}

<ArkToaster {...props} children={children ?? defaultToast} />
