<script lang="ts">
  import { Icon, iconNames } from "@isbatak/svelte-ui/icon"
  import { iconClasses as classes, filterIconNames } from "@isbatak/storybook-shared"

  let query = $state("")
  const names = $derived(filterIconNames(query))
</script>

<div class={classes.gallery}>
  <input
    type="search"
    aria-label="Search icons"
    placeholder={`Search ${iconNames.length} icons`}
    class={classes.search}
    bind:value={query}
  />
  {#if names.length === 0}
    <p class={classes.empty}>No icons match “{query}”</p>
  {/if}
  <div class={classes.grid}>
    {#each names as name (name)}
      <div class={classes.cell}>
        <Icon {name} size="lg" />
        <span class={classes.name}>{name}</span>
      </div>
    {/each}
  </div>
</div>
