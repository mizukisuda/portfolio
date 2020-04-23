import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex) //vuexが読み込まれている
// stateのデフォルトで
export default new Vuex.Store({
  state: {
  skillScore: [],
  // falseを定義して初期値を読み込まないにする
  loaded: false
  },
// ①空の配列（scoreAllay）
// ②に入れたいデータを指定する
// skillScoreの[0](=categoryのfront-end)のskill（skillInfoとする）からforEach文でscoreをscoreAllyにプッシュする
  getters: {
    frontScore(state){
      const frontScoreAllay=[]
      state.skillScore[0].skill.forEach((skillInfo)=>{
        frontScoreAllay.push(skillInfo.score)
      })
      return frontScoreAllay
    },
    backScore(state){
      const backScoreAllay=[]
      state.skillScore[1].skill.forEach((skillInfo)=>{
        backScoreAllay.push(skillInfo.score)
      })
      return backScoreAllay
    },
    devScore(state){
      const devScoreAllay=[]
      state.skillScore[2].skill.forEach((skillInfo)=>{
        devScoreAllay.push(skillInfo.score)
      })
      return devScoreAllay
    },
    frontName(state){
      const frontNameAllay=[]
      state.skillScore[0].skill.forEach((skillInfo)=>{
        frontNameAllay.push(skillInfo.name)
      })
      return frontNameAllay
    },
    backName(state){
      const backNameAllay=[]
      state.skillScore[1].skill.forEach((skillInfo)=>{
        backNameAllay.push(skillInfo.name)
      })
      return backNameAllay
    },
    devName(state){
      const devNameAllay=[]
      state.skillScore[2].skill.forEach((skillInfo)=>{
        devNameAllay.push(skillInfo.name)
      })
      return devNameAllay
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
