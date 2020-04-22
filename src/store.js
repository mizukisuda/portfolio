import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex) //vuexが読み込まれている

export default new Vuex.Store({
  state: {
  skillScore: []
  },

  getters: {
    skillScore(state) {
      return state.skillScore }
  },

  mutations: {
    setSkillScore(state,payload) {
      state.skillScore=payload.skillScore
    }
  },

  actions: {
    async getSkillScore({commit}){
      const skillScore = [];
      const res = await axios.get('https://us-central1-portfolio-47ea0.cloudfunctions.net/skills')
      res.data.forEach((score)=>{
          skillScore.push(score);
      });
    commit('setSkillScore',{skillScore});
    },
  }
});
