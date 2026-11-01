export interface TextFlipControls {
  interval: number
  autoplay: boolean
}

/** Defaults mirror the machine's own defaults (see `text-flip.machine.ts`). */
export const textFlipArgs: TextFlipControls = {
  interval: 2000,
  autoplay: true,
}

export const textFlipArgTypes = {
  interval: { control: { type: "range", min: 250, max: 5000, step: 250 } },
  autoplay: { control: "boolean" },
  onIndexChange: { table: { disable: true } },
} as const
