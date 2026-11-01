export interface WheelPickerControls {
  disabled: boolean
  loop: boolean
  visibleCount: number
  itemHeight: number
}

export const wheelPickerArgs: WheelPickerControls = {
  disabled: false,
  loop: false,
  visibleCount: 5,
  itemHeight: 36,
}

export const wheelPickerArgTypes = {
  disabled: { control: "boolean" },
  loop: { control: "boolean" },
  visibleCount: { control: { type: "number", min: 1, step: 2 } },
  itemHeight: { control: { type: "number", min: 1 } },
  onValueChange: { table: { disable: true } },
} as const
