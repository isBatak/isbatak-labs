import { css } from "styled-system/css"
import { textFlip as textFlipRecipe } from "styled-system/recipes"
import { TextFlip } from "@isbatak/ark-text-flip/solid"

const styles = textFlipRecipe()

const classes = {
  heading: css({ textStyle: "3xl", fontWeight: "semibold", letterSpacing: "tight" }),
}

export function TextFlipBasic() {
  return (
    <p class={classes.heading}>
      Build for{" "}
      <TextFlip.Root class={styles.root}>
        <TextFlip.Item index={0} class={styles.item}>
          React
        </TextFlip.Item>
        <TextFlip.Item index={1} class={styles.item}>
          Vue
        </TextFlip.Item>
        <TextFlip.Item index={2} class={styles.item}>
          Svelte
        </TextFlip.Item>
        <TextFlip.Item index={3} class={styles.item}>
          Solid
        </TextFlip.Item>
      </TextFlip.Root>
    </p>
  )
}
