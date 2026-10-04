<script setup lang="ts">
import { css } from "styled-system/css"
import { masonry as masonryRecipe } from "styled-system/recipes"
import { Masonry } from "@isbatak/ark-masonry/vue"

const styles = masonryRecipe()

const classes = {
  tile: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "fg.muted",
    textStyle: "sm",
  }),
}
</script>

<template>
  <Masonry.Root :columns="3" :class="styles.root">
    <Masonry.Item value="1" :span="2" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '120px' }">1</div>
    </Masonry.Item>
    <Masonry.Item value="2" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '80px' }">2</div>
    </Masonry.Item>
    <Masonry.Item value="3" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '150px' }">3</div>
    </Masonry.Item>
    <Masonry.Item value="4" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '60px' }">4</div>
    </Masonry.Item>
    <Masonry.Item value="5" :span="2" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '90px' }">5</div>
    </Masonry.Item>
    <Masonry.Item value="6" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '110px' }">6</div>
    </Masonry.Item>
    <Masonry.Item value="7" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '70px' }">7</div>
    </Masonry.Item>
    <Masonry.Item value="8" :span="3" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '130px' }">8</div>
    </Masonry.Item>
    <Masonry.Item value="9" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '50px' }">9</div>
    </Masonry.Item>
    <Masonry.Item value="10" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '100px' }">10</div>
    </Masonry.Item>
    <Masonry.Item value="11" :span="2" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '40px' }">11</div>
    </Masonry.Item>
  </Masonry.Root>
</template>
