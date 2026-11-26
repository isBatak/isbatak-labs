import { ark } from "@ark-ui/react/factory"
import * as caliper from "@isbatak/zag-caliper"
import * as checkbox from "@zag-js/checkbox"
import type { NormalizeProps, PropTypes } from "@zag-js/types"
import { act, type ComponentProps } from "react"
import { createRoot } from "react-dom/client"
import { renderToStaticMarkup } from "react-dom/server"
import { createParts, definePrimitive } from "../src/react"

const Checkbox = createParts(checkbox, {
  root: "label",
  control: "div",
  label: "span",
  indicator: "div",
})

const caliperPrimitive = definePrimitive({
  anatomy: caliper.anatomy,
  machine: caliper.machine,
  connect: caliper.connect,
  props: caliper.props,
  standalone: true,
})

const Caliper = createParts(caliperPrimitive, {
  root: "figure",
  overlayTrigger: "button",
  canvas: "div",
  frame: { tag: "div", props: caliper.frameProps },
  dimension: { tag: "div", props: caliper.dimensionProps },
})

const badge = definePrimitive({
  name: "badge",
  props: ["tone"],
  connect: <T extends PropTypes>(normalize: NormalizeProps<T>) => ({
    getRootProps: ({ tone = "neutral" }: { tone?: "neutral" | "warm" } = {}) =>
      normalize.element({ "data-badge-root": "", "data-tone": tone }),
    getDotProps: ({ size = 1 }: { size?: number } = {}) =>
      normalize.element({ "data-badge-dot": "", "data-size": size }),
    getDotState: ({ size = 1 }: { size?: number } = {}) => ({ large: size > 1 }),
  }),
})

const Badge = createParts(badge, {
  root: "span",
  dot: {
    tag: "i",
    props: ["size"],
    resolve: (own, api) => ({ size: own.size ?? (api.getRootProps()["data-tone"] === "warm" ? 2 : 1) }),
  },
})

interface CounterProps {
  id: string
  start?: number
}

const log: string[] = []

const counter = definePrimitive({
  name: "counter",
  props: ["start"],
  create: () => ({
    mount: (getProps: () => CounterProps) => {
      log.push(`mount ${getProps().start ?? 0}`)
      return () => log.push("unmount")
    },
    sync: (props: CounterProps) => log.push(`sync ${props.start ?? 0}`),
    connect: <T extends PropTypes>(props: CounterProps, normalize: NormalizeProps<T>) => ({
      getRootProps: () => normalize.element({ "data-counter-root": props.id, "data-start": props.start ?? 0 }),
      getValueProps: () => normalize.element({ "data-counter-value": "" }),
    }),
  }),
})

const Counter = createParts(counter, {
  value: {
    tag: "output",
    children: (api) => String(api.getRootProps()["data-start"]),
  },
})

const Tinted = ({ tone, className, ...props }: ComponentProps<typeof ark.div> & { tone?: "warm" | "cool" }) => (
  <ark.div {...props} className={[className, `tone-${tone ?? "cool"}`].filter(Boolean).join(" ")} />
)

const Styled = createParts(caliperPrimitive, {
  root: "figure",
  dimension: { tag: Tinted, props: caliper.dimensionProps },
  canvas: Tinted,
})

function mount(node: React.ReactNode) {
  const container = document.createElement("div")
  document.body.append(container)
  const root = createRoot(container)
  act(() => root.render(node))
  return { container, unmount: () => act(() => root.unmount()) }
}

beforeAll(() => {
  ;(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true
})

describe("createParts", () => {
  it("starts a Zag machine module and names the parts from its anatomy", () => {
    const html = renderToStaticMarkup(
      <Checkbox.Root defaultChecked>
        <Checkbox.Control />
        <Checkbox.Label>Terms</Checkbox.Label>
      </Checkbox.Root>,
    )
    expect(html).toMatch(/<label[^>]*data-checkbox-root[^>]*data-state="checked"/)
    expect(html).toMatch(/<span[^>]*data-checkbox-label[^>]*>Terms<\/span>/)
    expect((Checkbox.Label as { displayName?: string }).displayName).toBe("CheckboxLabel")
  })

  it("throws for a machine part outside Root", () => {
    expect(() => renderToStaticMarkup(<Checkbox.Control />)).toThrow("Checkbox.Control must be inside Checkbox.Root")
  })

  it("renders a machine's parts with their props and state", () => {
    const html = renderToStaticMarkup(
      <Caliper.Root overlay={false} className="figure">
        <Caliper.Frame magnify={2} data-testid="frame">
          <Caliper.Dimension placement="left" render={(props, state) => <i {...props} data-axis={state.axis} />} />
        </Caliper.Frame>
      </Caliper.Root>,
    )
    expect(html).toContain('<figure data-caliper-root="" data-overlay="hidden" class="figure">')
    expect(html).toContain('data-testid="frame"')
    expect(html).toContain('data-axis="y"')
    expect(html).not.toContain("magnify=")
    expect(html).not.toContain(" overlay=")
  })

  it("drives the machine from a part's handler", async () => {
    const { container, unmount } = mount(
      <Caliper.Root>
        <Caliper.OverlayTrigger />
        <Caliper.Frame>
          <Caliper.Dimension />
        </Caliper.Frame>
      </Caliper.Root>,
    )
    const trigger = container.querySelector("button")!
    expect(container.querySelector("figure")?.dataset.overlay).toBe("visible")
    expect(container.querySelector("[data-caliper-dimension]")?.hasAttribute("data-enter")).toBe(false)
    await act(async () => trigger.click())
    expect(container.querySelector("figure")?.dataset.overlay).toBe("hidden")
    expect(container.querySelector("[data-caliper-frame]")?.getAttribute("data-animate")).toBe("out")
    expect(container.querySelector("[data-caliper-dimension]")?.getAttribute("data-enter")).toBe("draw")
    unmount()
  })

  it("renders a standalone machine's parts outside Root", () => {
    expect(renderToStaticMarkup(<Caliper.Canvas />)).toBe('<div data-caliper-canvas=""></div>')
  })

  it("renders a static primitive anywhere and passes the api to resolve", () => {
    expect(renderToStaticMarkup(<Badge.Dot />)).toBe('<i data-badge-dot="" data-size="1"></i>')
    expect(renderToStaticMarkup(<Badge.Root tone="warm" />)).toBe('<span data-badge-root="" data-tone="warm"></span>')
  })

  it("creates, mounts and syncs a controller in Root", () => {
    log.length = 0
    const { container, unmount } = mount(
      <Counter.Root start={3}>
        <Counter.Value />
      </Counter.Root>,
    )
    expect(container.innerHTML).toMatch(/^<output data-counter-value="">3<\/output>$/)
    expect(log).toEqual(["sync 3", "mount 3"])
    unmount()
    expect(log).toContain("unmount")
  })

  it("renders a component given as the tag with the part's props, state and its own props", () => {
    const html = renderToStaticMarkup(
      <Styled.Root>
        <Styled.Canvas tone="warm" />
        <Styled.Dimension placement="left" render={(props, state) => <i {...props} data-axis={state.axis} />} />
      </Styled.Root>,
    )
    expect(html).toContain('<div data-caliper-canvas="" class="tone-warm"></div>')
    expect(html).toMatch(/<i [^>]*data-caliper-dimension=""[^>]*class="tone-cool"[^>]*data-axis="y"/)
  })

  it("types each part from the primitive", () => {
    expectTypeOf(Checkbox.Root).parameter(0).toHaveProperty("defaultChecked")
    expectTypeOf(Checkbox.Root).parameter(0).toHaveProperty("onCheckedChange")
    expectTypeOf(Caliper.Root).parameter(0).toHaveProperty("defaultOverlay")
    expectTypeOf(Caliper.Frame).parameter(0).toHaveProperty("magnify")
    expectTypeOf(Caliper.Canvas).parameter(0).not.toHaveProperty("magnify")
    expectTypeOf(Badge.Root).parameter(0).toHaveProperty("tone")
    expectTypeOf(Badge.Dot).parameter(0).toHaveProperty("size")
    expectTypeOf(Counter.Root).parameter(0).toHaveProperty("start")
    expectTypeOf(Styled.Canvas).parameter(0).toHaveProperty("tone")
    // @ts-expect-error checkbox has no `nope` part
    createParts(checkbox, { nope: "div" })
  })
})
