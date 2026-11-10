import { Breadcrumb } from "@isbatak/solid-ui/breadcrumb"
import { Stack } from "@isbatak/solid-ui/stack"

export function BreadcrumbVariantsDemo() {
  return (
    <Stack gap="4">
      <Breadcrumb.Root variant="plain">
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
      <Breadcrumb.Root variant="underline">
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
  )
}
