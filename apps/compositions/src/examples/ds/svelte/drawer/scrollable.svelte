<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Drawer } from "@isbatak/svelte-ui/drawer"
  import { css } from "styled-system/css"

  const heading = css({ fontWeight: "semibold" })
</script>

<Drawer.Root contentSize="md">
  <Drawer.Trigger>
    {#snippet asChild(props)}
      <Button {...props()}>Read terms</Button>
    {/snippet}
  </Drawer.Trigger>
  <Portal>
    <Drawer.Backdrop />
    <Drawer.Positioner>
      <Drawer.Content>
        <Drawer.Header class={css({ borderBottomWidth: "1px" })}>
          <Drawer.Title>Terms of use</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body class={css({ display: "flex", flexDirection: "column", gap: "3", py: "4" })}>
          <Drawer.Description>The header and footer stay in place while this text scrolls.</Drawer.Description>
          <h3 class={heading}>Accounts</h3>
          <p>When you create an account, you are responsible for keeping your password confidential and for all activity that happens under your account.</p>
          <p>Tell us right away if you notice any unauthorized use of your account or any other breach of security.</p>
          <h3 class={heading}>Acceptable use</h3>
          <p>Use the service only through the interfaces we provide. Do not attempt to bypass or break our security measures, and do not scrape or mine data with automated tools.</p>
          <p>Do not use the service to harass or harm other people. We may close accounts that break this rule without notice.</p>
          <h3 class={heading}>Your content</h3>
          <p>You keep ownership of the content you submit. You give us a license to store, display and process it so we can run the service for you.</p>
          <p>You confirm that you have the rights to everything you upload and that it does not infringe on the rights of anyone else.</p>
          <h3 class={heading}>Termination</h3>
          <p>We may suspend or end your access at any time if you break these terms. When that happens, your right to use the service ends right away.</p>
          <p>Sections that by their nature should survive termination, such as ownership and limitation of liability, stay in effect.</p>
          <h3 class={heading}>Liability</h3>
          <p>The service is provided as is. We do not promise that it will always be available, error free or secure.</p>
          <p>We are not liable for indirect or consequential damages, including lost profits or data, that come from your use of the service.</p>
          <h3 class={heading}>Changes</h3>
          <p>We may update these terms. For material changes we give at least 30 days of notice before the new terms take effect.</p>
        </Drawer.Body>
        <Drawer.Footer class={css({ borderTopWidth: "1px", pt: "4" })}>
          <Drawer.ActionTrigger>
            {#snippet asChild(props)}
              <Button {...props()} variant="outline">Decline</Button>
            {/snippet}
          </Drawer.ActionTrigger>
          <Button>Accept</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Positioner>
  </Portal>
</Drawer.Root>
