import { Badge } from "@isbatak/react-ui/badge"
import { badge } from "@isbatak/panda-ds/recipes"
import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const badgeMatrix = defineComponentMatrix({
  recipe: badge,
  render: (props) => <Badge {...props}>Badge</Badge>,
})
