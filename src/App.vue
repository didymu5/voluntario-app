<template>
  <v-app>
    <v-navigation-drawer 
      persistent 
      :mini-variant="miniVariant" 
      :clipped="clipped" 
      v-model="drawer" 
      enable-resize-watcher 
      fixed app>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
        <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
	<span>&copy; 2018</span>   status: <div v-if="isLoggedin">Am logged in</div>
    </v-footer>
</v-app>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: true,
      title: "Voluntario",
      userInfo: this.$store.getters.user
    };
  },
  created() {

  },
  computed: {
    isLoggedin() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }
};
</script>
