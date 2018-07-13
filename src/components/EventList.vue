<template>
  <v-container grid-list-md="true">
    <v-subheader>Upcoming</v-subheader>
    <v-layout row wrap>
      <v-flex xs12 sm4 v-for="event in eventList" v-bind:key="event.index">
        <EventCard :id="event.id" :title="event.title" :date="event.date" :eventImage="event.eventImage" :description="event.description" :stuff="'hello'"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { VSubheader } from "vuetify";
import EventCard from "./../components/EventCard";

export default {
  name: "EventList",
  props: {
    events: Array
  },
  components: {
    EventCard,
    VSubheader
  },
  data: () => ({
    eventList: []
  }),
  created() {
    this.eventList = this.events
  }
};
</script>

