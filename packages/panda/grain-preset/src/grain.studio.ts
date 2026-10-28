import { grainDefaults, grainTheme } from "./grain.preset"

export default {
  layerStyles: ["grain"],
  defaults: grainDefaults,
  theme: grainTheme,
  options: [
    { path: "frequency", min: 0.2, max: 2, step: 0.05 },
    { path: "size", min: 64, max: 512, step: 16 },
    { path: "light.white", condition: "base", min: 0, max: 4, step: 0.05 },
    { path: "light.black", condition: "base", min: 0, max: 1, step: 0.01 },
    { path: "dark.white", condition: "_dark", min: 0, max: 1, step: 0.01 },
    { path: "dark.black", condition: "_dark", min: 0, max: 3, step: 0.05 },
  ],
}
