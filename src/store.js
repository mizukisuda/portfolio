import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex) //vuexが読み込まれている
// stateのデフォルトで
export default new Vuex.Store({
  state: {
  skillScore: [],
  // falseを定義して初期値を読み込まないにする
  loaded: false,
  categories: {'front-end' : 0, 'back-end' : 1, 'devops' : 2}
  },
// ①空の配列（scoreAllay）
// ②に入れたいデータを指定する
// skillScoreの[0](=categoryのfront-end)のskill（skillInfoとする）からforEach文でscoreをscoreAllyにプッシュする
  getters: {
    Score:(state)=>(index)=>{
      const frontScoreAllay=[]
      state.skillScore[index].skill.forEach((skillInfo)=>{
        frontScoreAllay.push(skillInfo.score)
      })
      return frontScoreAllay
    },
    Name:(state)=>(index)=>{
      const frontNameAllay=[]
      state.skillScore[index].skill.forEach((skillInfo)=>{
        frontNameAllay.push(skillInfo.name)
      })
      return frontNameAllay
    }
  },

  mutations: {
    setSkillScore(state,payload) {
      state.skillScore=payload.skillScore;
      state.loaded= true
    },
  },
// axiosのロードが終わるまでasyncをしない
  actions: {
    async getSkillScore({commit}){
      const skillScore = [];
      const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skills';
      const res = await axios.get(functionsUrl);
      res.data.forEach((score)=>{
          skillScore.push(score);
      });
    commit('setSkillScore',{skillScore});
    },
  }
});
