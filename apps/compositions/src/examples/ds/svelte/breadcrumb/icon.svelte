<script lang="ts">
  import { Breadcrumb } from "@isbatak/svelte-ui/breadcrumb"
  import { Icon } from "@isbatak/svelte-ui/icon"
</script>

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="#">
        <Icon name="home" />
        Home
      </Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Link href="#">
        <Icon name="components" />
        Components
      </Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>
