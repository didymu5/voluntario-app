import auth from 'firebase/auth'
console.log(auth)
export default {
  state: {
    user: null
  }, 
  mutaions: {
    setUser(state, payload) {
      state.user =  payload
    }
  },
  actions: {

  }
}