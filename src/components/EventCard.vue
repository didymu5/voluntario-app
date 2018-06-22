<template>
<v-card>
    <v-card-media
    :src="eventImage"
    height="200px"
    >
    </v-card-media>
    <v-card-title primary-title>
    <div>
        <div class="headline">{{title}}</div>
    </div>
    </v-card-title>
    <v-card-actions>
    <v-btn flat>Share</v-btn>
    <v-btn flat color="purple">Explore</v-btn>
    <v-spacer></v-spacer>
    <v-btn icon @click.native="show = !show">
        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
    </v-btn>
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
  name: 'EventCard',
  props: ['title', 'eventImage', 'description', 'date'],
  data: () => ({
    show: false,
  }),
  created() {
    console.log(this.eventImage)
  }
}
</script>
