<script setup lang="ts">
import { Avatar } from "@isbatak/vue-ui/avatar"
import { Center } from "@isbatak/vue-ui/center"
import { Icon } from "@isbatak/vue-ui/icon"
import { Sidebar } from "@isbatak/vue-ui/sidebar"
</script>

<template>
  <Sidebar.Root variant="subtle" aria-label="Accounts">
    <Sidebar.Section>
      <Sidebar.SectionTitle>Painters</Sidebar.SectionTitle>
      <Sidebar.SectionContent>
        <Sidebar.MenuItem aria-current="true">
          <Sidebar.MenuItemStartElement>
            <Avatar.Root shape="rounded">
              <Avatar.Fallback name="Claude Monet" />
              <Avatar.Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/330px-Claude_Monet_1899_Nadar_crop.jpg"
              />
            </Avatar.Root>
          </Sidebar.MenuItemStartElement>
          <Sidebar.MenuItemText>
            <Sidebar.MenuItemTextTitle>Claude Monet</Sidebar.MenuItemTextTitle>
            <Sidebar.MenuItemTextDescription>Impressionism</Sidebar.MenuItemTextDescription>
          </Sidebar.MenuItemText>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuItemStartElement>
            <Avatar.Root shape="rounded">
              <Avatar.Fallback name="Rembrandt van Rijn" />
              <Avatar.Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/330px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg"
              />
            </Avatar.Root>
          </Sidebar.MenuItemStartElement>
          <Sidebar.MenuItemText>
            <Sidebar.MenuItemTextTitle>Rembrandt van Rijn</Sidebar.MenuItemTextTitle>
            <Sidebar.MenuItemTextDescription>Dutch Golden Age</Sidebar.MenuItemTextDescription>
          </Sidebar.MenuItemText>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuItemStartElement>
            <Avatar.Root shape="rounded">
              <Avatar.Fallback name="Élisabeth Vigée Le Brun" />
              <Avatar.Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg/330px-Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg"
              />
            </Avatar.Root>
          </Sidebar.MenuItemStartElement>
          <Sidebar.MenuItemText>
            <Sidebar.MenuItemTextTitle>Élisabeth Vigée Le Brun</Sidebar.MenuItemTextTitle>
            <Sidebar.MenuItemTextDescription>Rococo</Sidebar.MenuItemTextDescription>
          </Sidebar.MenuItemText>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuItemStartElement>
            <Center boxSize="10" bg="bg.muted" borderRadius="l2">
              <Icon name="plus" />
            </Center>
          </Sidebar.MenuItemStartElement>
          <Sidebar.MenuItemText>Add painter</Sidebar.MenuItemText>
        </Sidebar.MenuItem>
      </Sidebar.SectionContent>
    </Sidebar.Section>
    <Sidebar.Separator />
    <Sidebar.Section>
      <Sidebar.SectionContent>
        <Sidebar.MenuItem>
          <Sidebar.MenuItemStartElement>
            <Icon name="bell" />
          </Sidebar.MenuItemStartElement>
          <Sidebar.MenuItemText>Notifications</Sidebar.MenuItemText>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuItemStartElement>
            <Icon name="contrast" />
          </Sidebar.MenuItemStartElement>
          <Sidebar.MenuItemText>Appearance</Sidebar.MenuItemText>
        </Sidebar.MenuItem>
        <Sidebar.MenuItem>
          <Sidebar.MenuItemStartElement>
            <Icon name="help" />
          </Sidebar.MenuItemStartElement>
          <Sidebar.MenuItemText>Help</Sidebar.MenuItemText>
        </Sidebar.MenuItem>
      </Sidebar.SectionContent>
    </Sidebar.Section>
    <Sidebar.Section>
      <Sidebar.SectionContent>
        <Sidebar.MenuItem>
          <Sidebar.MenuItemStartElement color="fg.error">
            <Icon name="power" />
          </Sidebar.MenuItemStartElement>
          <Sidebar.MenuItemText>Log out</Sidebar.MenuItemText>
        </Sidebar.MenuItem>
      </Sidebar.SectionContent>
    </Sidebar.Section>
  </Sidebar.Root>
</template>
