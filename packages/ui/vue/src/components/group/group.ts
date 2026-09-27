import { dataAttr } from "@ark-ui/vue/utils"
import { styled } from "@isbatak/ui-vue/jsx"
import { group } from "@isbatak/panda-ds/recipes"
import { Comment, Fragment, Text, type PropType, type VNode, cloneVNode, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

const StyledGroup = styled("div", group)

function flattenChildren(nodes: VNode[]): VNode[] {
  return nodes.flatMap((node) => {
    if (node.type === Fragment) return flattenChildren(node.children as VNode[])
    if (node.type === Comment || node.type === Text) return []
    return [node]
  })
}

export const Group = defineComponent({
  name: "Group",
  props: {
    skip: Function as PropType<(child: VNode) => boolean | undefined>,
  },
  setup(props, { slots }) {
    return () => {
      const children = flattenChildren(slots.default?.() ?? [])
      const validChildren = children.filter((child) => !props.skip?.(child))
      const validChildCount = validChildren.length

      if (children.length === 1 || validChildCount === 1) return h(StyledGroup, null, () => children)

      const items = children.map((child) => {
        if (props.skip?.(child)) return child
        const index = validChildren.indexOf(child)
        return cloneVNode(child, {
          "data-group-item": "",
          "data-first": dataAttr(index === 0),
          "data-last": dataAttr(index === validChildCount - 1),
          "data-between": dataAttr(index > 0 && index < validChildCount - 1),
          style: { "--group-count": validChildCount, "--group-index": index },
        })
      })

      return h(StyledGroup, null, () => items)
    }
  },
})

export type GroupProps = ComponentProps<typeof StyledGroup> & ComponentProps<typeof Group>
