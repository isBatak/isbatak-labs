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
      { source: "/docs/components/:slug", destination: "/prototypes/:slug", permanent: true },
      { source: "/docs/:path*", destination: "/prototypes", permanent: true },
      { source: "/components/:path*", destination: "/prototypes/:path*", permanent: true },
      {
        source: "/prototypes/:slug/:framework(react|vue|svelte|solid|preact|vanilla)/:styling(panda|css)",
        destination: "/prototypes/:slug/:framework/:styling/zag",
        permanent: false,
        missing: [{ type: "header", key: "accept", value: "(.*)text/markdown(.*)" }],
      },
    ]
  },
  async rewrites() {
    return [
      { source: "/prototypes/:slug.md", destination: "/md/prototypes/:slug" },
      { source: "/prototypes/:slug/:section.md", destination: "/md/prototypes/:slug/:section" },
      {
        source: "/prototypes/:slug/:framework/:styling/:api?",
        destination: "/md/prototypes/:slug",
        has: [{ type: "header", key: "accept", value: "(.*)text/markdown(.*)" }],
      },
      {
        source: "/prototypes/:path+",
        destination: "/md/prototypes/:path+",
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
