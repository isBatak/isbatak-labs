import { describe, expect, test } from "vitest"
import { computeLayout, countTracks, isLayoutEqual, toLength } from "../src/masonry.utils"

const items = (...heights: number[]) => heights.map((height, index) => ({ value: `${index + 1}`, height, span: 1 }))

describe("masonry utilities", () => {
  test("places each item in the shortest column", () => {
    const layout = computeLayout(items(150, 30, 90, 70, 110), 4, 10, false)

    expect(layout.items).toEqual({
      "1": { column: 0, span: 1, top: 0 },
      "2": { column: 1, span: 1, top: 0 },
      "3": { column: 2, span: 1, top: 0 },
      "4": { column: 3, span: 1, top: 0 },
      "5": { column: 1, span: 1, top: 40 },
    })
    expect(layout.height).toBe(150)
  })

  test("prefers the first column on a tie", () => {
    const layout = computeLayout(items(50, 50, 50), 2, 0, false)
    expect(layout.items["3"]).toEqual({ column: 0, span: 1, top: 50 })
  })

  test("fills the columns in order when sequential", () => {
    const layout = computeLayout(items(150, 30, 90, 70, 110, 20), 4, 10, true)

    expect(layout.items["5"]).toEqual({ column: 0, span: 1, top: 160 })
    expect(layout.items["6"]).toEqual({ column: 1, span: 1, top: 40 })
    expect(layout.height).toBe(270)
  })

  test("places spanning items below the tallest column they cover", () => {
    const layout = computeLayout(
      [
        { value: "a", height: 100, span: 1 },
        { value: "b", height: 20, span: 1 },
        { value: "c", height: 40, span: 1 },
        { value: "d", height: 50, span: 2 },
      ],
      3,
      0,
      false,
    )

    expect(layout.items.d).toEqual({ column: 1, span: 2, top: 40 })
  })

  test("caps the span at the number of columns", () => {
    const layout = computeLayout([{ value: "a", height: 10, span: 5 }], 2, 0, false)
    expect(layout.items.a).toEqual({ column: 0, span: 2, top: 0 })
  })

  test("wraps a sequential item that does not fit in the remaining columns", () => {
    const layout = computeLayout(
      [
        { value: "a", height: 10, span: 1 },
        { value: "b", height: 10, span: 1 },
        { value: "c", height: 10, span: 2 },
      ],
      3,
      0,
      true,
    )

    expect(layout.items.c).toEqual({ column: 0, span: 2, top: 10 })
  })

  test("uses one column when none are reported", () => {
    const layout = computeLayout(items(10, 20), 0, 5, false)
    expect(layout).toEqual({
      columns: 1,
      height: 35,
      items: { "1": { column: 0, span: 1, top: 0 }, "2": { column: 0, span: 1, top: 15 } },
    })
  })

  test("is empty without items", () => {
    expect(computeLayout([], 3, 16, false)).toEqual({ columns: 3, height: 0, items: {} })
  })

  test("counts the resolved column tracks", () => {
    expect(countTracks("120px 120px 120.5px")).toBe(3)
    expect(countTracks("[start] 200px 200px [end]")).toBe(2)
    expect(countTracks("none")).toBe(0)
  })

  test("turns numbers into pixel lengths", () => {
    expect(toLength(16)).toBe("16px")
    expect(toLength("1rem")).toBe("1rem")
    expect(toLength(undefined)).toBeUndefined()
  })

  test("compares layouts by value", () => {
    const a = computeLayout(items(10, 20, 30), 2, 0, false)
    const b = computeLayout(items(10, 20, 30), 2, 0, false)

    expect(isLayoutEqual(a, b)).toBe(true)
    expect(isLayoutEqual(a, computeLayout(items(10, 20, 31), 2, 0, false))).toBe(false)
    expect(isLayoutEqual(a, computeLayout(items(10, 20, 30), 3, 0, false))).toBe(false)
    expect(isLayoutEqual(null, null)).toBe(true)
    expect(isLayoutEqual(a, null)).toBe(false)
  })
})
