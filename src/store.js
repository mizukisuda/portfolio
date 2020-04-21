import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //vuexが読み込まれている

const store = new Vuex.Store({
  state: {
  score: [],
    apiUrl:'https://us-central1-portfolio-47ea0.cloudfunctions.net/skills'
  },
  mutations: {
    setScore(state, payload) {
      state.score = payload.score
    }
  },
  actions: {
    doUpdate({commit}, score){
    commit('setScore',{score})
    }
    },
  getters: {
    score(state) { return state.score }
  }
})

console.log(store.state.score)
