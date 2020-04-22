<template>
  <div id="aboutSection">
    <div class="aboutTitle">
      About Me
    </div>
    <div class="aboutExplain">
      <p>
        北海道出身の新卒一年目。大学では教育哲学を学んでおり、「自己を助けるテクノロジーとしての当事者研究」をテーマに卒業研究を執筆。具体的には、「精神障害や依存症の当事者が薬物療法だけに頼らず自身と向き合っていく方法」を研究した。しかし、「自己を助ける」ということをWeb系アプリケーションなどのIT技術を用いて実現することに可能性を感じ、教育者からエンジニアに方向転換。以降は哲学や行動経済学、Webサービスの技術に興味を持ち、未経験から技術を学ぶ。
      </p>
    </div>
  </div>
</template>

<script>
// export default{
  // name: 'About',
  // computed: {
    // score(){
      // return this.$store.getters.skillScore[0].category
    // }},
    // methods:{
      // getScore(){
        // this.$store.dispatch('getSkillScore')
      // }
    // }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#aboutSection {
  background-color: #f5f5f5;
  padding: 0 0 20px 0;
}

.aboutTitle {
  padding: 20px 0 20px 0;
  text-align: center;
  color: #20879f;
  font-weight: bold;
  font-size: 18pt;
  font-family: "Noto Sans JP", sans-serif;
  text-shadow: 1px 2px 3px #808080;
}

.aboutExplain {
  margin: 0 auto;
  width: 80%;
  line-height: 1em;
}

p {
  color: #707070;
  font-size: 12pt;
  font-family: "Noto Sans JP", sans-serif;
  word-wrap: break-all;
}
</style>
