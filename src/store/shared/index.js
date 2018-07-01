import auth from 'firebase/auth'

export default {
  state: {
    loading: false,
    error: null
  }, 
  mutaions: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state, payload) {
      state.error = null
    }
  },
  actions: {
    clearError({commit}){
      commit('clearError')
    },
    setError({commit}, payload) {
      commit('setError', payload)
    }
  },
  getters: {
    loading(state) {
      return state.loading
    },
    error(state) {
      return state.error
    }
  }
}