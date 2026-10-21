"use client"

import { Slider } from "@isbatak/react-ui/slider"

import { CodePreview } from "../../ui/code-preview"
import { Icon } from "../../ui/icon"

export function CodePreviewRtlLocaleDemo() {
  return (
    <CodePreview.Root rtlLocale="he-IL" w="full">
      <CodePreview.Stage>
        <CodePreview.Preview display="flex" justifyContent="center">
          <Slider.Root defaultValue={[30]} width="full" maxW="xs">
            <Slider.Label>Volume</Slider.Label>
            <Slider.ValueText />
            <Slider.Control>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumb index={0}>
                <Slider.HiddenInput />
              </Slider.Thumb>
            </Slider.Control>
          </Slider.Root>
        </CodePreview.Preview>
      </CodePreview.Stage>
      <CodePreview.Toolbar>
        <CodePreview.DirTrigger flex="1" borderStartWidth="0">
          <Icon name="text-direction" />
          Right-to-left
        </CodePreview.DirTrigger>
      </CodePreview.Toolbar>
    </CodePreview.Root>
  )
}
