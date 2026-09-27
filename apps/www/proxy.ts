import { type NextRequest, NextResponse } from "next/server"

import {
  defaultVariant,
  FRAMEWORK_KEY,
  isFramework,
  isStyling,
  STYLING_KEY,
  variantPath,
} from "./components/docs/variant"

export function proxy(request: NextRequest) {
  const framework = request.cookies.get(FRAMEWORK_KEY)?.value
  const styling = request.cookies.get(STYLING_KEY)?.value
  const url = request.nextUrl.clone()
  url.pathname = variantPath(url.pathname, {
    framework: isFramework(framework) ? framework : defaultVariant.framework,
    styling: isStyling(styling) ? styling : defaultVariant.styling,
  })
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    {
      source: "/components/:slug([^/.]+)",
      missing: [{ type: "header", key: "accept", value: "(.*)text/markdown(.*)" }],
    },
  ],
}
