<script lang="ts">
  import { Avatar, AvatarGroup } from "@isbatak/svelte-ui/avatar"
</script>

<AvatarGroup size="lg">
  <Avatar.Root>
    <Avatar.Fallback name="Uchiha Sasuke" />
    <Avatar.Image src="https://i.pravatar.cc/300?u=sasuke" />
  </Avatar.Root>
  <Avatar.Root>
    <Avatar.Fallback name="Baki Ani" />
    <Avatar.Image src="https://i.pravatar.cc/300?u=baki" />
  </Avatar.Root>
  <Avatar.Root>
    <Avatar.Fallback name="Uchiha Chan" />
    <Avatar.Image src="https://i.pravatar.cc/300?u=chan" />
  </Avatar.Root>
  <Avatar.Root variant="solid">
    <Avatar.Fallback>+3</Avatar.Fallback>
  </Avatar.Root>
</AvatarGroup>
