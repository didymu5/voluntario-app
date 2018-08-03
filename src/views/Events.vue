<template>
  <div>
    <event-list v-if="showEventList" :events="eventList" />
  </div>

</template>

<script>
import EventList from './../components/EventList'
import Event from './../components/Event'
export default {
  name: 'Events',
  components: {
    EventList,
    Event
  },
  data: () => ({
    eventList: [],
    showEventList: true
  }),
  created() {
    this.eventList = this.$store.getters.allEvents
    this.$store.dispatch('setLoading', false)
  }
}
</script>

