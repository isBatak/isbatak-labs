<script lang="ts">
  import { Accordion } from "@isbatak/svelte-ui/accordion"
  import { css } from "styled-system/css"
</script>

<Accordion.Root defaultValue={["shipping"]} collapsible class={css({ width: "full", maxW: "md" })}>
  <Accordion.Item value="shipping">
    <Accordion.ItemTrigger>
      How long does shipping take?
      <Accordion.ItemIndicator />
    </Accordion.ItemTrigger>
    <Accordion.ItemContent>
      <Accordion.ItemBody>Orders ship within two working days and arrive in three to five.</Accordion.ItemBody>
    </Accordion.ItemContent>
  </Accordion.Item>
  <Accordion.Item value="returns">
    <Accordion.ItemTrigger>
      Can I return an item?
      <Accordion.ItemIndicator />
    </Accordion.ItemTrigger>
    <Accordion.ItemContent>
      <Accordion.ItemBody>Yes, within 30 days of delivery, as long as it's unused.</Accordion.ItemBody>
    </Accordion.ItemContent>
  </Accordion.Item>
  <Accordion.Item value="payment">
    <Accordion.ItemTrigger>
      Which payment methods do you take?
      <Accordion.ItemIndicator />
    </Accordion.ItemTrigger>
    <Accordion.ItemContent>
      <Accordion.ItemBody>Cards, PayPal and bank transfer.</Accordion.ItemBody>
    </Accordion.ItemContent>
  </Accordion.Item>
</Accordion.Root>
