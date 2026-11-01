export interface MasonryControls {
  columns: number
  gap: number
  sequential: boolean
  minColumnWidth: string
  dir: "ltr" | "rtl"
}

export const masonryArgs: MasonryControls = {
  columns: 4,
  gap: 16,
  sequential: false,
  minColumnWidth: "",
  dir: "ltr",
}

export const masonryArgTypes = {
  columns: { control: { type: "range", min: 1, max: 8, step: 1 } },
  gap: { control: { type: "range", min: 0, max: 48, step: 4 } },
  sequential: { control: "boolean" },
  minColumnWidth: { control: "text" },
  dir: { control: "inline-radio", options: ["ltr", "rtl"] },
  onLayoutChange: { table: { disable: true } },
} as const
