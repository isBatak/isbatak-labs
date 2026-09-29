import { Button } from "@isbatak/react-ui/button"
import { HStack, styled } from "@isbatak/panda-ds/jsx"
import { segmentGroup } from "@isbatak/panda-ds/recipes"

import { ArrowUpRightIcon, ChevronRightIcon, CopyIcon, GithubIcon, NpmIcon, PlayIcon } from "./icons"

const Eyebrow = styled("p", {
  base: { fontFamily: "mono", textStyle: "overline", color: "fg.subtle" },
})

const CodeFrame = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "56px",
    ps: "4",
    pe: "2",
    borderRadius: "l3",
    borderWidth: "1px",
    bg: "bg.subtle",
    fontFamily: "mono",
    fontSize: "0.8125rem",
  },
})

const managers = segmentGroup({ size: "xs", variant: "enclosed" })

export function ToolHero() {
  return (
    <styled.section px="10" bg="bg" textAlign="center">
      <styled.div maxW="2xl" mx="auto" pt="28">
        <styled.nav display="flex" justifyContent="center" alignItems="center" gap="2" color="fg.subtle">
          <Eyebrow>Tools</Eyebrow>
          <ChevronRightIcon />
          <Eyebrow>Dev tool</Eyebrow>
        </styled.nav>
        <styled.h1 mt="5" textStyle="6xl" fontWeight="medium" lineHeight="1" letterSpacing="tighter">
          Sourcery
        </styled.h1>
        <styled.p mt="4" fontFamily="mono" textStyle="sm" color="fg.subtle">
          @isbatak/sourcery
        </styled.p>
        <styled.p mt="5" mx="auto" maxW="lg" color="fg.muted" lineHeight="1.7">
          Hold a hotkey, point at anything on the page and click to open the line of JSX that rendered it in your
          editor.
        </styled.p>
        <styled.div mx="auto" maxW="md" mt="8" mb="6" textAlign="start">
          <div className={managers.root}>
            <span className={managers.item} data-state="checked" data-ssr="">
              pnpm
            </span>
            <span className={managers.item}>npm</span>
            <span className={managers.item}>yarn</span>
            <span className={managers.item}>bun</span>
          </div>
          <CodeFrame mt="6">
            <span>
              <styled.span color="#0000ff">pnpm add</styled.span> <styled.span color="#267f99">-D</styled.span>{" "}
              <styled.span color="#001080">@isbatak/sourcery</styled.span>
            </span>
            <Button variant="ghost" size="xs" aria-label="Copy">
              <CopyIcon />
            </Button>
          </CodeFrame>
        </styled.div>
        <HStack justify="center" gap="6">
          <Button variant="outline" size="sm">
            <NpmIcon />
            npm
          </Button>
          <HStack gap="2" textStyle="sm" color="fg.muted">
            <GithubIcon />
            <styled.span textDecoration="underline" textUnderlineOffset="4px" textDecorationColor="border">
              Source
            </styled.span>
            <ArrowUpRightIcon />
          </HStack>
        </HStack>
      </styled.div>
      <styled.div maxW="4xl" mx="auto" mt="20">
        <Eyebrow mb="5">Demo</Eyebrow>
        <styled.div
          height="480px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="4"
          borderWidth="1px"
          bg="bg.subtle"
        >
          <styled.div
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="14"
            height="14"
            borderRadius="full"
            borderWidth="1px"
            bg="bg"
            fontSize="xl"
          >
            <PlayIcon />
          </styled.div>
          <styled.p color="fg.muted">Video demo coming soon</styled.p>
        </styled.div>
      </styled.div>
    </styled.section>
  )
}
