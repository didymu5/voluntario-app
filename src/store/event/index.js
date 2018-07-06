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
      const anEvent = {
        title: payload.title,
        date: payload.date,
        eventImage: payload.eventImage,
        numberOfVolunteers: payload.numberOfVolunteers,
        confirmedVolunteers: payload.confirmedVolunteers,
        description: payload.description,
        isActive: payload.isActive
      }
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