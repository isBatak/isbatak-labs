import { type Component, defineComponent, h, type PropType, Teleport, type TeleportProps } from "vue"

export interface PortalProps {
  to?: TeleportProps["to"] | undefined
  disabled?: boolean | undefined
  defer?: boolean | undefined
}

export const Portal = defineComponent({
  name: "Portal",
  props: {
    to: { type: [String, Object] as PropType<TeleportProps["to"]>, default: "body" },
    disabled: { type: Boolean, default: false },
    defer: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () =>
      h(
        Teleport as unknown as Component,
        { to: props.to, disabled: props.disabled, defer: props.defer },
        slots.default?.() ?? [],
      )
  },
})
