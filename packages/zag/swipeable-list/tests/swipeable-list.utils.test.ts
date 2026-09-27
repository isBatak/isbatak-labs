import { describe, expect, test } from "vitest"
import {
  FLICK_VELOCITY,
  MAX_VELOCITY,
  applyResistance,
  createSpring,
  getFullSwipeDistance,
  getSideFromSign,
  getSideSign,
  getSnapSign,
  getSpringOptions,
  getSwipeAxis,
  getVelocity,
  rubberBand,
} from "../src/swipeable-list.utils"

describe("swipeable list utilities", () => {
  test("maps logical sides to physical offsets", () => {
    expect(getSideSign("start", "ltr")).toBe(1)
    expect(getSideSign("end", "ltr")).toBe(-1)
    expect(getSideSign("start", "rtl")).toBe(-1)
    expect(getSideSign("end", "rtl")).toBe(1)

    expect(getSideFromSign(1, "ltr")).toBe("start")
    expect(getSideFromSign(-1, "ltr")).toBe("end")
    expect(getSideFromSign(1, "rtl")).toBe("end")
    expect(getSideFromSign(-1, "rtl")).toBe("start")
  })

  test("decides the swipe axis once the threshold is passed", () => {
    expect(getSwipeAxis(4, 3, 10)).toBeNull()
    expect(getSwipeAxis(12, 3, 10)).toBe("x")
    expect(getSwipeAxis(-12, 3, 10)).toBe("x")
    expect(getSwipeAxis(3, 12, 10)).toBe("y")
    expect(getSwipeAxis(11, 11, 10)).toBe("y")
  })

  test("resists dragging past the limits", () => {
    expect(rubberBand(0, 300, 0.55)).toBe(0)
    expect(rubberBand(100, 0, 0.55)).toBe(0)
    expect(rubberBand(100, 300, 0.55)).toBeCloseTo(46.48, 2)
    expect(rubberBand(-100, 300, 0.55)).toBeCloseTo(-46.48, 2)

    expect(applyResistance(50, -80, 80, 300, 0.55)).toBe(50)
    expect(applyResistance(180, -80, 80, 300, 0.55)).toBeCloseTo(126.48, 2)
    expect(applyResistance(-180, -80, 80, 300, 0.55)).toBeCloseTo(-126.48, 2)
    expect(applyResistance(1e6, 0, 0, 300, 0.55)).toBeLessThan(300)
  })

  test("measures release velocity from recent samples", () => {
    expect(getVelocity([])).toBe(0)
    expect(getVelocity([{ time: 0, offset: 0 }])).toBe(0)
    expect(
      getVelocity([
        { time: 0, offset: 0 },
        { time: 50, offset: 10 },
        { time: 100, offset: 20 },
      ]),
    ).toBe(200)
    expect(
      getVelocity([
        { time: 0, offset: 500 },
        { time: 200, offset: 0 },
        { time: 250, offset: 10 },
      ]),
    ).toBe(200)
    expect(
      getVelocity([
        { time: 0, offset: 0 },
        { time: 10, offset: -100 },
      ]),
    ).toBe(-MAX_VELOCITY)
  })

  test("keeps the full-swipe distance beyond the actions", () => {
    expect(getFullSwipeDistance(400, 80, 0.5)).toBe(200)
    expect(getFullSwipeDistance(400, 180, 0.5)).toBe(220)
  })

  test("snaps by position when released slowly", () => {
    const widths = { positiveWidth: 80, negativeWidth: 160, threshold: 0.5 }
    expect(getSnapSign({ ...widths, offset: 30, velocity: 0 })).toBe(0)
    expect(getSnapSign({ ...widths, offset: 40, velocity: 0 })).toBe(1)
    expect(getSnapSign({ ...widths, offset: -70, velocity: 0 })).toBe(0)
    expect(getSnapSign({ ...widths, offset: -80, velocity: 0 })).toBe(-1)
    expect(getSnapSign({ ...widths, offset: 35, velocity: 50 })).toBe(1)
    expect(getSnapSign({ positiveWidth: 0, negativeWidth: 0, threshold: 0.5, offset: 60, velocity: 0 })).toBe(0)
  })

  test("snaps by direction when flicked", () => {
    const widths = { positiveWidth: 80, negativeWidth: 160, threshold: 0.5 }
    expect(getSnapSign({ ...widths, offset: 5, velocity: FLICK_VELOCITY })).toBe(1)
    expect(getSnapSign({ ...widths, offset: 70, velocity: -FLICK_VELOCITY })).toBe(0)
    expect(getSnapSign({ ...widths, offset: -150, velocity: FLICK_VELOCITY })).toBe(0)
    expect(getSnapSign({ ...widths, offset: -5, velocity: -FLICK_VELOCITY })).toBe(-1)
    expect(getSnapSign({ ...widths, positiveWidth: 0, offset: 5, velocity: FLICK_VELOCITY })).toBe(0)
  })

  test("uses a bouncy spring only for flicks", () => {
    expect(getSpringOptions(0, 80, 20, 0.14)).toEqual({ from: 0, to: 80, velocity: 20, bounce: 0, duration: 0.3 })
    expect(getSpringOptions(0, 80, 5000, 0.14)).toEqual({
      from: 0,
      to: 80,
      velocity: MAX_VELOCITY,
      bounce: 0.14,
      duration: 0.4,
    })
  })

  test("springs from the start value to rest at the target", () => {
    const critical = createSpring({ from: 0, to: 100, velocity: 0, bounce: 0, duration: 0.3 })
    expect(critical(0).value).toBe(0)
    expect(critical(0).done).toBe(false)
    expect(critical(0.15).value).toBeGreaterThan(50)
    expect(critical(2)).toEqual({ value: 100, velocity: 0, done: true })

    const bouncy = createSpring({ from: 0, to: 100, velocity: 0, bounce: 0.5, duration: 0.4 })
    const peak = Math.max(...Array.from({ length: 100 }, (_, index) => bouncy(index / 100).value))
    expect(peak).toBeGreaterThan(100)
    expect(bouncy(3).done).toBe(true)
  })

  test("carries the release velocity into the spring", () => {
    const spring = createSpring({ from: 0, to: 0, velocity: 1000, bounce: 0, duration: 0.3 })
    expect(spring(0).velocity).toBeCloseTo(1000, -1)
    expect(spring(0.02).value).toBeGreaterThan(0)
  })
})
