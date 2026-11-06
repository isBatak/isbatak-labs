<script setup lang="ts">
import { IconButton } from "@isbatak/vue-ui/button"
import { Editable } from "@isbatak/vue-ui/editable"
import { Icon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <Editable.Root defaultValue="Click to edit">
    <Editable.Area>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Area>
    <Editable.Control>
      <Editable.EditTrigger :asChild="true">
        <IconButton variant="ghost" size="xs" aria-label="Edit">
          <Icon name="edit" />
        </IconButton>
      </Editable.EditTrigger>
      <Editable.CancelTrigger :asChild="true">
        <IconButton variant="outline" size="xs" aria-label="Cancel">
          <Icon name="close" />
        </IconButton>
      </Editable.CancelTrigger>
      <Editable.SubmitTrigger :asChild="true">
        <IconButton variant="outline" size="xs" aria-label="Save">
          <Icon name="check" />
        </IconButton>
      </Editable.SubmitTrigger>
    </Editable.Control>
  </Editable.Root>
</template>
