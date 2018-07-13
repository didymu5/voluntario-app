<template>
<v-card :to="createPathToEvent()">
  <v-card-media
  :src="eventImage"
  height="200px"
  ></v-card-media>
  <v-card-title primary-title>
  <div>
    <span class="grey--text">{{date}}</span>
    <div class="headline">{{title}}</div>
  </div>
  </v-card-title>
    <v-card-actions>
      <v-btn flat>View</v-btn>
    </v-card-actions>
  <v-slide-y-transition>
    <v-card-text v-show="show">
    {{description}}
    </v-card-text>
  </v-slide-y-transition>
</v-card>
</template>
<script>
export default {
  name: "EventCard",
  props: ["id", "title", "eventImage", "description", "date"],
  data: () => ({
    show: false
  }),
  methods: {
    createPathToEvent() {
      let pathing = this.id ? { path: "/events/" + this.id } : null
      return pathing;
    }
  }
};
</script>
