<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"
  import { command, type CommandVariantProps } from "@isbatak/panda-ds/recipes"

  import type { CommandItem } from "./command-store"
  import type { UseCommandReturn } from "./use-command.svelte"

  export type CommandRootProviderProps = Omit<Combobox.RootProviderProps<CommandItem>, "value"> &
    CommandVariantProps & { value: UseCommandReturn<any>; unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideCommandContext, provideCommandStyles } from "./command-context"

  let {
    ref = $bindable(null),
    unstyled,
    class: className,
    value,
    onkeydowncapture,
    onpointerdowncapture,
    ...props
  }: CommandRootProviderProps = $props()
  const [variantProps, localProps] = $derived(command.splitVariantProps(props))
  const styles = $derived(command(variantProps))
  provideCommandStyles(() => styles)
  provideCommandContext({
    get loading() {
      return value.loading
    },
    get command() {
      return value.command
    },
    get combobox() {
      return value.combobox
    },
    selectItem: (item, options) => value.selectItem(item, options),
    trackModifiers: (event) => value.trackModifiers(event),
  })
</script>

<Combobox.RootProvider
  bind:ref
  {...localProps}
  value={value.combobox}
  onkeydowncapture={(event) => {
    onkeydowncapture?.(event)
    value.trackModifiers(event)
  }}
  onpointerdowncapture={(event) => {
    onpointerdowncapture?.(event)
    value.trackModifiers(event)
  }}
  data-loading={value.loading ? "" : undefined}
  data-empty={value.combobox().collection.size === 0 ? "" : undefined}
  data-slot="root"
  class={[!unstyled && styles.root, className]}
/>
