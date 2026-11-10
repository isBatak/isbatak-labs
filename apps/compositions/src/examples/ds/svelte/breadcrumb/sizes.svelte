<script lang="ts">
  import { Breadcrumb } from "@isbatak/svelte-ui/breadcrumb"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack gap="4">
  <Breadcrumb.Root size="sm">
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb.Root>
  <Breadcrumb.Root size="md">
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb.Root>
  <Breadcrumb.Root size="lg">
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb.Root>
</Stack>
