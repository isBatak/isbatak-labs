import type { Metadata } from "next"

import { PlusAgencyWork } from "../../../components/plus/agency-work"
import { PlusClosing } from "../../../components/plus/closing"
import { PlusFaq } from "../../../components/plus/faq"
import { PlusHero } from "../../../components/plus/hero"
import { PlusLibrary } from "../../../components/plus/library"
import { PlusPricing } from "../../../components/plus/pricing"
import { PlusProof } from "../../../components/plus/proof"

export const metadata: Metadata = {
  title: "Plus",
  description:
    "Premium media blocks, Figma components with Code Connect mappings and an agent kit, plus retainers for agencies shipping accessible, agent-ready design systems.",
}

export default function PlusPage() {
  return (
    <>
      <PlusHero />
      <PlusLibrary />
      <PlusPricing />
      <PlusAgencyWork />
      <PlusProof />
      <PlusFaq />
      <PlusClosing />
    </>
  )
}
