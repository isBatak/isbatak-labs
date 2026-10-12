import type { ItemState } from "./text-flip.types"

export function wrapIndex(index: number, count: number) {
  return ((index % count) + count) % count
}

export function getItemState(item: number, index: number, previousIndex: number): ItemState {
  if (item === index) return previousIndex < 0 ? "visible" : "entering"
  if (item === previousIndex) return "exiting"
  return "hidden"
}
