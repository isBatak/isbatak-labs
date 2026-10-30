import { Button, ButtonEndIcon, ButtonStartIcon } from "@isbatak/react-ui/button"
import { button } from "@isbatak/panda-ds/recipes"

import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const buttonMatrix = defineComponentMatrix({
  recipe: button,
  props: {
    icon: { ignore: true, defaultValue: false },
  },
  render: (props) => (
    <Button {...props}>
      <ButtonStartIcon asChild>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M10.1 2.182a10 10 0 0 1 3.8 0M13.9 21.818a10 10 0 0 1-3.8 0M17.609 3.721a10 10 0 0 1 2.69 2.7M2.182 13.9a10 10 0 0 1 0-3.8M20.279 17.609a10 10 0 0 1-2.7 2.69M21.818 10.1a10 10 0 0 1 0 3.8M3.721 6.391a10 10 0 0 1 2.7-2.69M6.391 20.279a10 10 0 0 1-2.69-2.7" />
        </svg>
      </ButtonStartIcon>
      Button
      <ButtonEndIcon asChild>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M10.1 2.182a10 10 0 0 1 3.8 0M13.9 21.818a10 10 0 0 1-3.8 0M17.609 3.721a10 10 0 0 1 2.69 2.7M2.182 13.9a10 10 0 0 1 0-3.8M20.279 17.609a10 10 0 0 1-2.7 2.69M21.818 10.1a10 10 0 0 1 0 3.8M3.721 6.391a10 10 0 0 1 2.7-2.69M6.391 20.279a10 10 0 0 1-2.69-2.7" />
        </svg>
      </ButtonEndIcon>
    </Button>
  ),
})
