import { Heading } from "@isbatak/solid-ui/heading"

export function HeadingAsChildDemo() {
  return <Heading size="lg" asChild={(props) => <h1 {...props()}>Rendered as an h1</h1>} />
}
