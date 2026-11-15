<script module lang="ts">
  import type { Snippet } from "svelte"
  import type { HTMLIframeAttributes } from "svelte/elements"

  export interface FrameProps extends HTMLIframeAttributes {
    /** Additional content to be inserted into the frame's <head> */
    head?: Snippet | undefined
    /** Callback function to be executed when the frame is mounted */
    onMount?: (() => void) | undefined
    /** Callback function to be executed when the frame is unmounted */
    onUnmount?: (() => void) | undefined
    /** The source document to be displayed in the frame */
    srcdoc?: string | undefined
    /** The bindable ref of the iframe */
    ref?: HTMLIFrameElement | null | undefined
    unstyled?: boolean | undefined
  }

  const initialSrcDoc =
    '<html><head><style>*,*::before,*::after { margin: 0; padding: 0; box-sizing: border-box; }</style></head><body><div class="frame-root"></div></body></html>'

  function getMountNode(frame: HTMLIFrameElement) {
    const doc = frame.contentWindow?.document
    if (!doc) return null
    return doc.body.querySelector<HTMLElement>(".frame-root") || doc.body
  }
</script>

<script lang="ts">
  import { EnvironmentProvider } from "@ark-ui/svelte/environment"
  import { Portal } from "@ark-ui/svelte/portal"
  import { frame } from "@isbatak/panda-ds/recipes"

  import FrameContent from "./frame-content.svelte"

  let {
    head,
    onMount,
    onUnmount,
    srcdoc,
    ref = $bindable(null),
    unstyled,
    class: className,
    children,
    ...props
  }: FrameProps = $props()

  let mountNode = $state<HTMLElement | null>(null)

  $effect(() => {
    const doc = ref?.contentWindow?.document
    if (!ref || !doc) return
    doc.open()
    doc.write(srcdoc ?? initialSrcDoc)
    doc.close()
    mountNode = getMountNode(ref)
  })

  $effect(() => {
    const frameNode = ref
    const node = mountNode
    const win = frameNode?.contentWindow as (Window & typeof globalThis) | null | undefined
    if (!frameNode || !node || !win) return
    const exec = () => {
      win.requestAnimationFrame(() => {
        if (!frameNode.contentDocument?.documentElement) return
        frameNode.style.setProperty("--width", `${node.scrollWidth}px`)
        frameNode.style.setProperty("--height", `${node.scrollHeight}px`)
      })
    }
    const resizeObserver = new win.ResizeObserver(exec)
    exec()
    resizeObserver.observe(node)
    return () => resizeObserver.disconnect()
  })
</script>

<iframe bind:this={ref} {...props} class={[!unstyled && frame(), className]}>
  <EnvironmentProvider value={() => ref?.contentDocument ?? document}>
    {#if mountNode}
      <Portal container={mountNode}>
        <FrameContent {onMount} {onUnmount}>
          {@render children?.()}
        </FrameContent>
      </Portal>
      {#if head && ref?.contentDocument?.head}
        <Portal container={ref.contentDocument.head}>
          {@render head()}
        </Portal>
      {/if}
    {/if}
  </EnvironmentProvider>
</iframe>
