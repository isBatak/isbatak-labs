import { Config } from "@remotion/cli/config"

Config.setVideoImageFormat("jpeg")
Config.setOverwriteOutput(true)
Config.setCodec("h264")
Config.setCrf(18)
Config.overrideWebpackConfig((config) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      { resourceQuery: /raw/, type: "asset/source" },
      ...(config.module?.rules ?? []).map((rule) =>
        rule && typeof rule === "object" ? { ...rule, resourceQuery: { not: [/raw/] } } : rule,
      ),
    ],
  },
}))
