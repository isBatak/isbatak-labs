import { Button } from "@isbatak/react-ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { styled } from "styled-system/jsx";

import { componentItems } from "../../../../components/catalog/catalog-items";
import { ComponentCatalog } from "../../../../components/catalog/component-catalog";
import { Eyebrow, Section } from "../../../../components/home/section";
import { Icon } from "../../../../components/ui/icon";

export const metadata: Metadata = {
  title: "Design system components",
  description:
    "Ark UI components styled with the Panda design system, for React, Vue, Solid and Svelte.",
};

export default function DesignSystemComponentsPage() {
  return (
    <Section>
      <styled.div
        pt={{ base: "16", md: "28" }}
        pb={{ base: "8", md: "10" }}
        maxW="2xl"
      >
        <Eyebrow>Design system</Eyebrow>
        <styled.h1
          mt="4"
          textStyle={{ base: "4xl", md: "5xl" }}
          fontWeight="medium"
          lineHeight="1.05"
          letterSpacing="tighter"
          textWrap="balance"
        >
          Ark UI, styled with Panda.
        </styled.h1>
        <styled.p
          mt="5"
          maxW="lg"
          color="fg.muted"
          lineHeight="1.7"
          textWrap="pretty"
        >
          Accessible Ark UI components wired to the recipes in
          @isbatak/panda-ds, for React, Vue, Solid and Svelte.
        </styled.p>
        <Button asChild variant="outline" size="sm" mt="6" colorPalette="gray">
          <Link href="/ds/installation">
            Installation
            <Icon name="arrow-right" />
          </Link>
        </Button>
      </styled.div>

      <ComponentCatalog items={componentItems()} label="components" />
    </Section>
  );
}
