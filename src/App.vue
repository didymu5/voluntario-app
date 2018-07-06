<template>
  <v-app>
    <v-progress-linear class="v-preogress-linear--app" v-if="isLoading" height="3" value="10" indeterminate></v-progress-linear>
    <v-navigation-drawer 
      persistent 
      :mini-variant="miniVariant" 
      :clipped="clipped" 
      v-model="drawer" 
      enable-resize-watcher 
      fixed app>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" :href="item.href">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped" elevation-1>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
       <v-spacer></v-spacer>
        <div v-if="isLoggedin" class="user-info-space">
          {{user.name}}
        </div>
    </v-toolbar>
    <v-content>
        <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>   status: <div v-if="isLoggedin">Am logged in</div> is loading: {{isLoading}}
    </v-footer>
</v-app>
</template>
<script>
import {
  VProgressLinear
} from 'vuetify'
export default {
  name: "App",
  components: {
    VProgressLinear
  },
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "event_note",
          title: "Events",
          href: "/events"
        },
        {
          icon: "home",
          title: "Home",
          href: "/"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: true,
      title: "Voluntario"
    };
  },
  created() {
    this.$store.commit('setLoading', true)
  },
  computed: {
    isLoggedin() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    isLoading() {
      return this.$store.getters.loading
    },
    user() {
      return this.$store.getters.user || null
    }
  }
};
</script>
<style>
.v-preogress-linear--app {
  position:fixed; top:0; left: 0; margin:0; z-index: 100
}
</style>
