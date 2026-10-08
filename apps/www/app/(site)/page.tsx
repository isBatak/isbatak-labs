import { Hero } from "../../components/home/hero"
import { PandaTurbopackPromo } from "../../components/home/panda-turbopack-promo"
import { SponsorCta } from "../../components/home/sponsor-cta"
import { Sponsors } from "../../components/home/sponsors"
import { StackPreferences } from "../../components/home/stack-preferences"

export default function Home() {
  return (
    <>
      <Hero />
      <StackPreferences />
      <PandaTurbopackPromo />
      <Sponsors />
      <SponsorCta />
    </>
  )
}
