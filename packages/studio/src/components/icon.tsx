import { Icon } from "@isbatak/react-ui/icon"
import { icon } from "@isbatak/panda-ds/recipes"

import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const iconMatrix = defineComponentMatrix({
  recipe: icon,
  render: (props) => <Icon name="star" {...props} />,
})
