import { resolve } from "node:path"
import type { NextConfig } from "next"
import { withSourcery } from "@isbatak/sourcery/next"

const pandaLoader = {
  loaders: ["./panda-turbopack-loader.cjs"],
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  experimental: {
    turbopackRustReactCompiler: true,
  },
  // Workspace packages that export their TypeScript source
  transpilePackages: [
    "@isbatak/zag-wheel-picker",
    "@isbatak/ark-wheel-picker",
    "@isbatak/panda-ds",
    "@isbatak/panda-wheel-picker",
    "@isbatak/compositions",
    "@isbatak/react-ui",
  ],
  async redirects() {
    return [
      { source: "/docs/components/:slug", destination: "/components/:slug", permanent: true },
      { source: "/docs/:path*", destination: "/components", permanent: true },
    ]
  },
  async rewrites() {
    return [
      { source: "/components/:slug.md", destination: "/md/components/:slug" },
      { source: "/components/:slug/:section.md", destination: "/md/components/:slug/:section" },
      {
        source: "/components/:slug/:framework/:styling",
        destination: "/md/components/:slug",
        has: [{ type: "header", key: "accept", value: "(.*)text/markdown(.*)" }],
      },
      {
        source: "/components/:path+",
        destination: "/md/components/:path+",
        has: [{ type: "header", key: "accept", value: "(.*)text/markdown(.*)" }],
      },
    ]
  },
  turbopack: {
    rules: {
      "./app/**/*.tsx": pandaLoader,
      "./components/**/*.tsx": pandaLoader,
    },
    resolveAlias: {
      // Written by scripts/panda-internal-css.mjs
      "@pandacss-internal/css": "./.panda/internal-css.mjs",
    },
  },
}

export default withSourcery(nextConfig, {
  injectTo: resolve("components/providers.tsx"),
  exclude: ["/packages/"],
  panda: true,
})
