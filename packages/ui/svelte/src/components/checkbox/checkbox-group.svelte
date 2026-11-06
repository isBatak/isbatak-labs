<script module lang="ts">
  import { Checkbox } from "@ark-ui/svelte/checkbox"

  export type CheckboxGroupProps = Checkbox.GroupProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { css } from "@isbatak/panda-ds/css"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CheckboxGroupProps = $props()
</script>

<Checkbox.Group bind:ref {...props} class={[!unstyled && css({ display: "flex", flexDirection: "column", gap: "1.5" }), className]} />
