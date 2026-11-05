import { Button } from "@isbatak/solid-ui/button"

export function ButtonAsLinkDemo() {
  return (
    <Button
      asChild={(props) => (
        <a {...props()} href="#button">
          Button
        </a>
      )}
    />
  )
}
