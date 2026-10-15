import { describe, expect, it } from "vitest"
import type { WheelPickerProps } from "../src/wheel-picker.types"
import { COPIES, getItemAt, getRowOf, getRows, MIDDLE, stepRow } from "../src/wheel-picker.utils"

const items = [
  { value: "a", label: "A" },
  { value: "b", label: "B", disabled: true },
  { value: "c", label: "C" },
  { value: "d", label: "D" },
]

const props: WheelPickerProps = { id: "test", items, value: "a" }
const looping: WheelPickerProps = { ...props, loop: true }

describe("getRows", () => {
  it("renders each item once", () => {
    expect(getRows(props).map(({ item }) => item.value)).toEqual(["a", "b", "c", "d"])
  })

  it("repeats the items when looping", () => {
    expect(getRows(looping)).toHaveLength(items.length * COPIES)
  })
})

describe("getRowOf", () => {
  it("finds the row of a value", () => {
    expect(getRowOf(props, "c")).toBe(2)
    expect(getRowOf(props, "missing")).toBe(-1)
  })

  it("starts in the middle copy when looping", () => {
    expect(getRowOf(looping, "c")).toBe(MIDDLE * items.length + 2)
  })

  it("picks the copy closest to the current row", () => {
    expect(getRowOf(looping, "a", 2 * items.length + 3)).toBe(3 * items.length)
    expect(getRowOf(looping, "d", 3 * items.length)).toBe(3 * items.length - 1)
  })
})

describe("stepRow", () => {
  it("skips disabled rows", () => {
    expect(stepRow(props, 0, 1)).toBe(2)
    expect(stepRow(props, 2, -1)).toBe(0)
  })

  it("stops at the ends", () => {
    expect(stepRow(props, 0, -1)).toBe(0)
    expect(stepRow(props, 3, 1)).toBe(3)
    expect(stepRow(props, 0, 10)).toBe(3)
  })

  it("runs across copies when looping", () => {
    const from = MIDDLE * items.length + 3
    expect(stepRow(looping, from, 1)).toBe(from + 1)
  })
})

describe("getItemAt", () => {
  it("wraps rows around the items", () => {
    expect(getItemAt(items, 5)?.value).toBe("b")
    expect(getItemAt(items, -1)?.value).toBe("d")
  })
})
