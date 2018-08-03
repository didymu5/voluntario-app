<template>
  <v-container>
    <v-layout column>
      An Event
      {{$route.params.id}}
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'Event',

}
</script>

