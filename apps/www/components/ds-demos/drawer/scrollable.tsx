"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { styled } from "styled-system/jsx"

export function DrawerScrollableDemo() {
  return (
    <Drawer.Root size="sm">
      <Drawer.Trigger asChild>
        <Button>Read terms</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header borderBottomWidth="1px">
              <Drawer.Title>Terms of use</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body display="flex" flexDirection="column" gap="3" py="4">
              <Drawer.Description>The header and footer stay in place while this text scrolls.</Drawer.Description>
              <styled.h3 fontWeight="semibold">Accounts</styled.h3>
              <p>
                When you create an account, you are responsible for keeping your password confidential and for all
                activity that happens under your account.
              </p>
              <p>
                Tell us right away if you notice any unauthorized use of your account or any other breach of security.
              </p>
              <styled.h3 fontWeight="semibold">Acceptable use</styled.h3>
              <p>
                Use the service only through the interfaces we provide. Do not attempt to bypass or break our security
                measures, and do not scrape or mine data with automated tools.
              </p>
              <p>
                Do not use the service to harass or harm other people. We may close accounts that break this rule
                without notice.
              </p>
              <styled.h3 fontWeight="semibold">Your content</styled.h3>
              <p>
                You keep ownership of the content you submit. You give us a license to store, display and process it so
                we can run the service for you.
              </p>
              <p>
                You confirm that you have the rights to everything you upload and that it does not infringe on the
                rights of anyone else.
              </p>
              <styled.h3 fontWeight="semibold">Termination</styled.h3>
              <p>
                We may suspend or end your access at any time if you break these terms. When that happens, your right to
                use the service ends right away.
              </p>
              <p>
                Sections that by their nature should survive termination, such as ownership and limitation of liability,
                stay in effect.
              </p>
              <styled.h3 fontWeight="semibold">Liability</styled.h3>
              <p>
                The service is provided as is. We do not promise that it will always be available, error free or secure.
              </p>
              <p>
                We are not liable for indirect or consequential damages, including lost profits or data, that come from
                your use of the service.
              </p>
              <styled.h3 fontWeight="semibold">Changes</styled.h3>
              <p>
                We may update these terms. For material changes we give at least 30 days of notice before the new terms
                take effect.
              </p>
            </Drawer.Body>
            <Drawer.Footer borderTopWidth="1px" pt="4">
              <Drawer.ActionTrigger asChild>
                <Button variant="outline">Decline</Button>
              </Drawer.ActionTrigger>
              <Button>Accept</Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
