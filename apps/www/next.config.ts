import { resolve } from "node:path"
import type { NextConfig } from "next"
import { withPandaCss } from "@isbatak/panda-turbopack/next"
import { withSourcery } from "@isbatak/sourcery/next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    turbopackRustReactCompiler: true,
    turbopackLazyDynamicImports: true,
    turbopackGc: true,
  },
  // Workspace packages that export their TypeScript source
  transpilePackages: [
    "@isbatak/zag-masonry",
    "@isbatak/zag-wheel-picker",
    "@isbatak/ark-masonry",
    "@isbatak/ark-wheel-picker",
    "@isbatak/panda-ds",
    "@isbatak/panda-masonry",
    "@isbatak/panda-wheel-picker",
    "@isbatak/compositions",
    "@isbatak/react-ui",
  ],
  async redirects() {
    return [
      { source: "/docs/components/:slug", destination: "/components/:slug", permanent: true },
      { source: "/docs/:path*", destination: "/components", permanent: true },
      {
        source: "/components/:slug/:framework(react|vue|svelte|solid|preact|vanilla)/:styling(panda|css)",
        destination: "/components/:slug/:framework/:styling/zag",
        permanent: false,
        missing: [{ type: "header", key: "accept", value: "(.*)text/markdown(.*)" }],
      },
    ]
  },
  async rewrites() {
    return [
      { source: "/components/:slug.md", destination: "/md/components/:slug" },
      { source: "/components/:slug/:section.md", destination: "/md/components/:slug/:section" },
      {
        source: "/components/:slug/:framework/:styling/:api?",
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
}

const withPanda = withPandaCss(nextConfig, {
  include: ["./app/**/*.tsx", "./components/**/*.tsx"],
})

export default withSourcery(withPanda, {
  injectTo: resolve("components/providers.tsx"),
  exclude: ["/packages/"],
  panda: true,
})
