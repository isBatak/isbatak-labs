import { CloseButton } from "@isbatak/react-ui/button"
import { button } from "@isbatak/panda-ds/recipes"
import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const closeButtonMatrix = defineComponentMatrix({
  recipe: button,
  props: {
    icon: { ignore: true, defaultValue: true },
  },
  render: (props) => <CloseButton {...props} />,
})
