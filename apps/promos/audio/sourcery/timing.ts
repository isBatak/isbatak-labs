import { VIDEO } from "../../src/sourcery/theme.ts"

export const seconds = (frame: number) => frame / VIDEO.fps
export const length = seconds(VIDEO.duration)
