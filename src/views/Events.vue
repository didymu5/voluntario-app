<template>
  <v-layout row wrap>
      <v-flex xs12 sm4 v-for="event in eventList" v-bind:key="event.index">
        <EventCard :title="event.title" :date="event.date" :eventImage="event.eventImage" />
      </v-flex>
    </v-layout>
</template>

<script>
import Events from './../store/mock/events';
import EventCard from './../components/EventCard';
export default {
  name: 'Events',
  components: {
    EventCard
  },
  data: () => ({
    show: false,
    eventList: Events
  }),
  created: function () {
    // console.log(Events)
  }
}
</script>

