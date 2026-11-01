import { Hero } from "../../components/home/hero"
import { IconsPromo } from "../../components/home/icons-promo"
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
      <IconsPromo />
      <Sponsors />
      <SponsorCta />
    </>
  )
}
