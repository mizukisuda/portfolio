<template>
  <div id="skillSection">
    <div class="skillTitle">
      Skill Set
    </div>
    <div class="skillExplain">
      <p>
        スキルをまとめました。まだまだ知識が浅い段階ではありますが、デザインもできるフロントエンドエンジニアを目指しているため、バックエンドとUI/UXデザインのスキルも高めていきたいと考えています。
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
        <li>JavaScript</li>
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
    <div class="Chart">
      <div
        v-if="isFrontActive"
      >
        <FrontChart />
      </div>
      <div
        v-if="isBackActive"
      >
        <BackChart />
      </div>
      <div
        v-if="isDevOpsActive"
      >
        <DevChart />
      </div>
    </div>
  </div>
</template>

<script>
import FrontChart from "./FrontChart.vue"
import BackChart from "./BackChart.vue"
import DevChart from "./DevChart.vue"

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
  },
  methods: {
    setCurrentChart(chart) {
      this.currentChart = chart;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#skillSection {
  background-color: #fff;
  height: auto;
  width: 100%;
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
  word-wrap: break-all;
  line-height: 1em;
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

  li {
    display: inline;
  }

  .front {
    color: #b51a1a;
    font-size: 18px;
    cursor: pointer;
  }

  .back {
    color: #0f8839;
    font-size: 18px;
    cursor: pointer;
  }

  .devOps {
    color: #571083;
    font-size: 18px;
    cursor: pointer;
  }
}

.skillList {
  width: auto;
  text-align: center;
  font-size: 18px;

  li {
    display: inline-block;
    height: 20px;
    font-weight: bold;
    padding: 10px 20px 7px 20px;
    margin: 5px;
    box-shadow: 0 0 5px gray;
  }

  .front-skills li {
    color: rgba(181, 26, 26, 0.75);
  }

  .back-skills li {
    color: rgba(15, 136, 57, 0.75);
  }

  .dev-skills li {
    color: rgba(87, 16, 131, 0.75);
  }

  .front-change li {
    background-color: rgba(181, 26, 26, 0.25);
    box-shadow: none;
  }

  .back-change li {
    background-color: rgba(15, 136, 57, 0.25);
    box-shadow: none;
  }

  .dev-change li {
    background-color: rgba(87, 16, 131, 0.25);
    box-shadow: none;
  }
}

.Chart {
  width: 280px;
  height: 280px;
  margin: 0 auto;
  padding: 20px;
}
</style>
