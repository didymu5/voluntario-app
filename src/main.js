import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import config from '../fb.config'
import firebase from 'firebase/app'
import store from './store/index'

Vue.config.productionTip = false
firebase.initializeApp(config)

new Vue({
  router,
  store,
  created() {
    this.$store.dispatch('setLoading', false)
    if(this.$store.getters.user) {
      console.log(this.$store.getters.user.displayName)
    }
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  },
  computed: {
    getUser() {
      return this.$store.getters.user
    }
  },
  method: {
    login(user) {
      this.$store.dispatch('autoSignIn', user)
      this.$store.dispatch('hello', 'hi there')
    }
  },
  render: h => h(App)
}).$mount('#app')