<template>
  <div>
    <event-list :events="eventList" />
  </div>
</template>

<script>
import EventList from './../components/EventList'
export default {
  name: 'Events',
  components: {
    EventList
  },
  data: () => ({
    eventList: []
  }),
  created() {
    this.eventList = this.$store.getters.allEvents

    this.$store.dispatch('setLoading', false)
  }
}
</script>

