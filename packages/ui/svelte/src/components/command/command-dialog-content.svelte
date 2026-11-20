<script module lang="ts">
  import type { DialogContentProps } from "../dialog/dialog-content.svelte"

  export type CommandDialogContentProps = DialogContentProps & {
    /**
     * The accessible title of the dialog. Visually hidden.
     * @default "Command palette"
     */
    title?: string | undefined
    /**
     * The accessible description of the dialog. Visually hidden.
     * @default "Search for a command to run"
     */
    description?: string | undefined
  }
</script>

<script lang="ts">
  import { css } from "@isbatak/panda-ds/css"

  import DialogContent from "../dialog/dialog-content.svelte"
  import DialogDescription from "../dialog/dialog-description.svelte"
  import DialogPositioner from "../dialog/dialog-positioner.svelte"
  import DialogTitle from "../dialog/dialog-title.svelte"

  let {
    ref = $bindable(null),
    title = "Command palette",
    description = "Search for a command to run",
    class: className,
    children,
    ...props
  }: CommandDialogContentProps = $props()
</script>

<DialogPositioner>
  <DialogContent bind:ref {...props} class={[css({ overflow: "hidden" }), className]}>
    <DialogTitle class={css({ srOnly: true })}>{title}</DialogTitle>
    <DialogDescription class={css({ srOnly: true })}>{description}</DialogDescription>
    {@render children?.()}
  </DialogContent>
</DialogPositioner>
