import { Splitter } from "@isbatak/react-ui/splitter"

export function SplitterNestedDemo() {
  return (
    <Splitter.Root
      panels={[{ id: "a" }, { id: "b" }]}
      defaultSize={[40, 60]}
      minH="60"
      borderWidth="1px"
      borderRadius="l2"
    >
      <Splitter.Panel id="a" display="flex" alignItems="center" justifyContent="center" textStyle="sm" color="fg.muted">
        A
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" />
      <Splitter.Panel id="b">
        <Splitter.Root orientation="vertical" panels={[{ id: "c" }, { id: "d" }]} defaultSize={[50, 50]}>
          <Splitter.Panel
            id="c"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textStyle="sm"
            color="fg.muted"
          >
            C
          </Splitter.Panel>
          <Splitter.ResizeTrigger id="c:d" />
          <Splitter.Panel
            id="d"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textStyle="sm"
            color="fg.muted"
          >
            D
          </Splitter.Panel>
        </Splitter.Root>
      </Splitter.Panel>
    </Splitter.Root>
  )
}
