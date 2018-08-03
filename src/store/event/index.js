export default {
  state: {
    event: null,
    events: []
  },
  mutations: {
    createEvent(state, payload) {
      state.events.push(payload)
    }
  },
  actions: {
    createEvent({commit}, payload) {
      const anEvent = {...payload}
      commit('createEvent', anEvent)
    }
  },
  getters: {
    allEvents(state) {
      return state.events.sort((eventA, eventB) => {
        return eventA.date > eventB.date
      })
    }
  }
}
