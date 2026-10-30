import { Spinner } from "@isbatak/react-ui/spinner"
import { spinner } from "@isbatak/panda-ds/recipes"
import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const spinnerMatrix = defineComponentMatrix({
  recipe: spinner,
  render: (props) => <Spinner {...props} />,
})
