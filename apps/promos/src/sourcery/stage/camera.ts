import type { Rect } from "../lib/motion"

export interface Camera {
  x: number
  y: number
  zoom: number
}

export interface Viewport {
  width: number
  height: number
}

export function toScreen(rect: Rect, camera: Camera, viewport: Viewport): Rect {
  return {
    x: viewport.width / 2 + (rect.x - camera.x) * camera.zoom,
    y: viewport.height / 2 + (rect.y - camera.y) * camera.zoom,
    w: rect.w * camera.zoom,
    h: rect.h * camera.zoom,
  }
}

export function worldTransform(camera: Camera, viewport: Viewport) {
  return `translate(${viewport.width / 2}px, ${viewport.height / 2}px) scale(${camera.zoom}) translate(${-camera.x}px, ${-camera.y}px)`
}
