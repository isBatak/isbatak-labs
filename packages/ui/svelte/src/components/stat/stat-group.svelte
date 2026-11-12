<script module lang="ts">
  import type { StatVariantProps } from "@isbatak/panda-ds/recipes"
  import type { GroupProps } from "../group"

  export type StatGroupProps = GroupProps & StatVariantProps
</script>

<script lang="ts">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { stat } from "@isbatak/panda-ds/recipes"
  import { Group } from "../group"
  import { provideStatProps } from "./stat-styles"

  let { ref = $bindable(null), ...props }: StatGroupProps = $props()
  const [variantProps, groupProps] = $derived(splitProps(props, stat.variantKeys))
  provideStatProps(() => variantProps)
</script>

<Group bind:ref role="group" flexWrap="wrap" justifyContent="space-around" alignItems="flex-start" {...groupProps} />
