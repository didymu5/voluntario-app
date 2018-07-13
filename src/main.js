import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import config from '../fb.config'
import firebase from 'firebase/app'
import store from './store/index'
import db from './db'

const loadMockData_Events = (db, store) => {
  db.events.forEach(item => {
    store.dispatch('createEvent', item)
  });
  return
}
//create db mock loaders. Load mock data locally when productTip is false
Vue.config.productionTip = false
firebase.initializeApp(config)
if(!Vue.config.productionTip) {
  loadMockData_Events(db.mock, store)
}

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
    }
  },
  render: h => h(App)
}).$mount('#app')
