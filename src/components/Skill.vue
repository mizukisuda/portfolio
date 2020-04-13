<template>
  <div id="skillSection">
    <div class="skillTitle">
      Skill Set
    </div>
    <div class="skillExplain">
      <p>
        修練のすえ身につけたスキルをまとめました。デザインもできるフロントエンドエンジニアを目指しているため、バックエンドとUI/UXデザインのスキルも高めていきたいと考えています。
      </p>
      <div class="myGitHub">
        <label class="gitHubLabel">GitHub：
          <a
            class="gitHubLink"
            href="https://github.com/mizukisuda"
          >https://github.com/mizukisuda</a>
        </label>
      </div>
      <a class="skillCategories" />
      <div class="skillList" />
      <div class="skillGraph" />
    </div>
  </div>
</template>

<script>
/* Only comments */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

#skillSection {
  background-color: white;
  height: auto;
  width: 100%;
  padding: 0 0 20px 0;
}

.skillTitle {
  padding: 20px 0 20px 0;
  text-align: center;
  color: #707070;
  font-weight: bold;
  font-size: 18pt;
  font-family: "Noto Sans JP", sans-serif;
  text-shadow: 1px 2px 3px #808080;
}

.skillExplain {
  margin: 0 auto;
  width: 80%;
  color: #707070;
  font-size: 12pt;
  font-family: "Noto Sans JP", sans-serif;
  word-wrap: break-all;/* 折り返し */
  line-height: 0.25 em;/* 行間の調節 */
}

.myGitHub {
  text-align: center;
  padding-top: 10px;
}

.gitHubLabel {
  display: inline-block;
  color: #20879f;
  font-size: 12pt;
  font-family: "Noto Sans JP", sans-serif;
}

</style>
