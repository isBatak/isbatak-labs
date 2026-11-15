<script module lang="ts">
  import { Slider } from "@ark-ui/svelte/slider"

  export type SliderThumbProps = Slider.ThumbProps & { unstyled?: boolean | undefined }

  function isUnderText(thumb: Element | null) {
    const root = thumb?.closest("[data-slider-root]")
    if (!thumb || !root) return false
    const thumbRect = thumb.getBoundingClientRect()
    return Array.from(root.querySelectorAll("[data-slider-label], [data-slider-value-text]")).some((text) => {
      const rect = text.getBoundingClientRect()
      return (
        thumbRect.left < rect.right &&
        thumbRect.right > rect.left &&
        thumbRect.top < rect.bottom &&
        thumbRect.bottom > rect.top
      )
    })
  }
</script>

<script lang="ts">
  import { useFocusVisible } from "@ark-ui/svelte/interaction"
  import { useSliderContext } from "@ark-ui/svelte/slider"
  import { useSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SliderThumbProps = $props()
  const styles = useSliderStyles()
  const focusVisible = useFocusVisible()
  const slider = useSliderContext()
  let underText = $state(false)

  $effect(() => {
    underText = slider().value.length > 0 && isUnderText(ref)
  })
</script>

<Slider.Thumb
  bind:ref
  data-focus-visible={focusVisible() ? "" : undefined}
  data-under-text={underText ? "" : undefined}
  {...props}
  data-slot="thumb"
  class={[!unstyled && styles().thumb, className]}
/>
