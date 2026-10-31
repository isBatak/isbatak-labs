import type { FileConfig } from "@ikona/cli"

export default {
  outputDir: "./generated",
  icons: {
    inputDir: "./svg",
    spriteOutputDir: "./generated",
    optimize: true,
  },
} satisfies FileConfig
