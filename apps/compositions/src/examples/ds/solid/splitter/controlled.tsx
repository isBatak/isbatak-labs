import { Splitter } from "@isbatak/solid-ui/splitter"
import { createSignal } from "solid-js"

export function SplitterControlledDemo() {
  const [size, setSize] = createSignal([30, 70])

  return (
    <Splitter.Root
      panels={[{ id: "a" }, { id: "b" }]}
      size={size()}
      onResize={(details) => setSize(details.size)}
      minH="60"
      borderWidth="1px"
      borderRadius="l2"
    >
      <Splitter.Panel id="a" display="flex" alignItems="center" justifyContent="center" textStyle="sm" color="fg.muted">
        {Math.round(size()[0] ?? 0)}%
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" />
      <Splitter.Panel id="b" display="flex" alignItems="center" justifyContent="center" textStyle="sm" color="fg.muted">
        {Math.round(size()[1] ?? 0)}%
      </Splitter.Panel>
    </Splitter.Root>
  )
}
