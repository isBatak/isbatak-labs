import { Splitter } from "@isbatak/solid-ui/splitter"

export function SplitterMinMaxSizeDemo() {
  return (
    <Splitter.Root
      panels={[{ id: "a", minSize: 20, maxSize: 60 }, { id: "b" }]}
      defaultSize={[40, 60]}
      minH="60"
      borderWidth="1px"
      borderRadius="l2"
    >
      <Splitter.Panel id="a" display="flex" alignItems="center" justifyContent="center" textStyle="sm" color="fg.muted">
        20% to 60%
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" />
      <Splitter.Panel id="b" display="flex" alignItems="center" justifyContent="center" textStyle="sm" color="fg.muted">
        B
      </Splitter.Panel>
    </Splitter.Root>
  )
}
