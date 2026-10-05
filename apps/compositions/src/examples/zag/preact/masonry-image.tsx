import { css } from "styled-system/css"
import { masonry as masonryRecipe } from "styled-system/recipes"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, useMachine } from "@zag-js/preact"
import { useId } from "preact/hooks"

const styles = masonryRecipe()

const classes = {
  image: css({ display: "block", width: "full", height: "auto" }),
}

export function MasonryImage() {
  const service = useMachine(masonry.machine, {
    id: useId(),
    columns: 3,
  })

  const api = masonry.connect(service, normalizeProps)

  return (
    <div {...api.getRootProps()} className={styles.root}>
      <div {...api.getItemProps({ value: "1" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=162&auto=format"
          alt="Fern"
          loading="lazy"
          className={classes.image}
        />
      </div>
      <div {...api.getItemProps({ value: "2" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=162&auto=format"
          alt="Snacks"
          loading="lazy"
          className={classes.image}
        />
      </div>
      <div {...api.getItemProps({ value: "3" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=162&auto=format"
          alt="Mushrooms"
          loading="lazy"
          className={classes.image}
        />
      </div>
      <div {...api.getItemProps({ value: "4" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=162&auto=format"
          alt="Tower"
          loading="lazy"
          className={classes.image}
        />
      </div>
      <div {...api.getItemProps({ value: "5" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=162&auto=format"
          alt="Sea star"
          loading="lazy"
          className={classes.image}
        />
      </div>
      <div {...api.getItemProps({ value: "6" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=162&auto=format"
          alt="Honey"
          loading="lazy"
          className={classes.image}
        />
      </div>
      <div {...api.getItemProps({ value: "7" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=162&auto=format"
          alt="Basketball"
          loading="lazy"
          className={classes.image}
        />
      </div>
      <div {...api.getItemProps({ value: "8" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=162&auto=format"
          alt="Breakfast"
          loading="lazy"
          className={classes.image}
        />
      </div>
      <div {...api.getItemProps({ value: "9" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d?w=162&auto=format"
          alt="Tree"
          loading="lazy"
          className={classes.image}
        />
      </div>
      <div {...api.getItemProps({ value: "10" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=162&auto=format"
          alt="Burger"
          loading="lazy"
          className={classes.image}
        />
      </div>
      <div {...api.getItemProps({ value: "11" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=162&auto=format"
          alt="Camera"
          loading="lazy"
          className={classes.image}
        />
      </div>
      <div {...api.getItemProps({ value: "12" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=162&auto=format"
          alt="Coffee"
          loading="lazy"
          className={classes.image}
        />
      </div>
      <div {...api.getItemProps({ value: "13" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1627000086207-76eabf23aa2e?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1627000086207-76eabf23aa2e?w=162&auto=format"
          alt="Camping Car"
          loading="lazy"
          className={classes.image}
        />
      </div>
      <div {...api.getItemProps({ value: "14" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=162&auto=format"
          alt="Hats"
          loading="lazy"
          className={classes.image}
        />
      </div>
      <div {...api.getItemProps({ value: "15" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=162&auto=format"
          alt="Tomato basil"
          loading="lazy"
          className={classes.image}
        />
      </div>
      <div {...api.getItemProps({ value: "16" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7?w=162&auto=format"
          alt="Mountain"
          loading="lazy"
          className={classes.image}
        />
      </div>
      <div {...api.getItemProps({ value: "17" })} className={styles.item}>
        <img
          srcSet="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=162&auto=format&dpr=2 2x"
          src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=162&auto=format"
          alt="Bike"
          loading="lazy"
          className={classes.image}
        />
      </div>
    </div>
  )
}
