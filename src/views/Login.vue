<template>
  <div class="voluntario-signin">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>Login</h1>
          <v-btn v-on:click="loginWithGoogle">Login with Google</v-btn>
          <br>
          <v-btn v-if="isLoggedin" flat v-on:click="logout">Log out</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login',
  data: () => {
    return {
      user: null
    }
  },
  created() {
    
  },
  computed: {
    isLoggedin() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    loginWithGoogle() {
      this.$store.dispatch('signUserInGoogle')
    },
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

