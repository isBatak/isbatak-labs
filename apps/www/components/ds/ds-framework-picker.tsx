"use client"

import { createListCollection } from "@ark-ui/react/collection"
import { Portal } from "@ark-ui/react/portal"
import { Button, ButtonGroup, IconButton } from "@isbatak/react-ui/button"
import { Select } from "@isbatak/react-ui/select"
import { useRouter } from "next/navigation"

import { createPreference } from "../docs/preference"
import { FRAMEWORK_KEY } from "../docs/variant"
import { Icon, type IconName } from "../ui/icon"
import { type DsFrameworkId, defaultDsFramework, dsComponentPath, dsFrameworkIds } from "./ds-framework"

const useDsFrameworkPreference = createPreference(FRAMEWORK_KEY, dsFrameworkIds, defaultDsFramework)

const react = { label: "React", value: "react" }
const vue = { label: "Vue", value: "vue" }
const svelte = { label: "Svelte", value: "svelte" }
const solid = { label: "Solid", value: "solid" }

const frameworks = createListCollection({ items: [react, vue, svelte, solid] })

const frameworkIcons: Record<DsFrameworkId, IconName> = {
  react: "brand-react",
  vue: "brand-vue",
  svelte: "brand-svelte",
  solid: "brand-solidjs",
}

interface DsFrameworkPickerProps {
  slug: string
  framework: DsFrameworkId
}

export function DsFrameworkPicker({ slug, framework }: DsFrameworkPickerProps) {
  const router = useRouter()
  const [, setPreference] = useDsFrameworkPreference()

  const select = (value: DsFrameworkId) => {
    setPreference(value)
    router.replace(dsComponentPath(value, slug), { scroll: false })
  }

  return (
    <Select.Root
      collection={frameworks}
      value={[framework]}
      onValueChange={(details) => details.value[0] && select(details.value[0] as DsFrameworkId)}
      positioning={{ placement: "bottom-start" }}
      size="sm"
      width="auto"
    >
      <Select.Context>
        {(context) => (
          <ButtonGroup attached variant="subtle" size="xs">
            <Button {...context.getTriggerProps()} aria-label={`Framework: ${frameworks.stringify(framework)}`}>
              <Icon name={frameworkIcons[framework]} />
              {frameworks.stringify(framework)}
            </Button>
            <IconButton tabIndex={-1} aria-hidden onClick={() => context.setOpen(!context.open)}>
              <Icon name="chevron-down" />
            </IconButton>
          </ButtonGroup>
        )}
      </Select.Context>
      <Portal>
        <Select.Positioner>
          <Select.Content minW="40">
            <Select.Item item={react}>
              <Icon size="sm" name="brand-react" />
              <Select.ItemText flex="1">React</Select.ItemText>
              <Select.ItemIndicator>
                <Icon name="check" />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item item={vue}>
              <Icon size="sm" name="brand-vue" />
              <Select.ItemText flex="1">Vue</Select.ItemText>
              <Select.ItemIndicator>
                <Icon name="check" />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item item={svelte}>
              <Icon size="sm" name="brand-svelte" />
              <Select.ItemText flex="1">Svelte</Select.ItemText>
              <Select.ItemIndicator>
                <Icon name="check" />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item item={solid}>
              <Icon size="sm" name="brand-solidjs" />
              <Select.ItemText flex="1">Solid</Select.ItemText>
              <Select.ItemIndicator>
                <Icon name="check" />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}
