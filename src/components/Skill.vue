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
    </div>
    <div class="skillCategories">
      <ul>
        <li>
          <span
            class="front"
            @click="setCurrentChart('front')"
          >
            Front-end
          </span>
        </li>
        <li>
          <span
            class="back"
            @click="setCurrentChart('back')"
          >
            Back-end
          </span>
        </li>
        <li>
          <span
            class="devOps"
            @click="setCurrentChart('devOps')"
          >
            DevOps
          </span>
        </li>
      </ul>
    </div>
    <div class="skillList">
      <ul
        class="front-skills"
        :class="{'front-change':isFrontActive}"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        class="back-skills"
        :class="{'back-change':isBackActive}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
      </ul>
      <ul
        class="dev-skills"
        :class="{'dev-change':isDevOpsActive}"
      >
        <li>Linux</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div v-if="isFrontActive">
      <FrontChart />
    </div>
    <div v-if="isBackActive">
      <BackChart />
    </div>
    <div v-if="isDevOpsActive">
      <DevChart />
    </div>
  </div>
</template>

<script>
import FrontChart from "../components/FrontChart.vue"
import BackChart from "../components/BackChart.vue"
import DevChart from "../components/DevChart.vue"

export default {
  name: 'Skill',
  components: {
    FrontChart,
    BackChart,
    DevChart
  },
  data(){
    return {
      currentChart: 'front',
      frontChange: true,
      backChange: false,
      devChange: false
    }
  },
  computed: {
    isFrontActive(){
      return this.currentChart=='front';
    },
    isBackActive(){
      return this.currentChart=='back';
    },
    isDevOpsActive(){
      return this.currentChart=='devOps';
    },
  methods: {
    setCurrentChart(chart) {
      this.currentChart = chart;
    }
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.skillCategories {
  padding: 20px 0;
  text-align: center;
}

.skillCategories .il {
  display: inline-block;
}

.front {
  display: inline-block;
  margin: 0 auto;
  color: #b51a1a;
  font-size: 18px;
  cursor: pointer;
}

.front-skills li {
  color: rgba(181, 26, 26, 0.75);
  height: 30px;
  font-weight: bold;
  padding: 12px 20px 2px 20px;
  box-shadow: 0 0 8px gray;
}

.front-change {
  background-color: rgba(181, 26, 26, 0.25);
}
</style>
