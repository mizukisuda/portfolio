<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'FrontChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [{
          label: "Front-end",
          data: [],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(255, 99, 132, 0.7)',
              'rgba(255, 99, 132, 0.7)',
              'rgba(255, 99, 132, 0.7)',
              'rgba(255, 99, 132, 0.7)'
            ],
            borderWidth: 1
          },
        ]
      },
    options:{
      scale:{
        ticks:{
            suggestedMax: 100,
            suggestedMin: 0,
            stepSize: 20,
    }
  },
    legend:{
    display: false,
    }
    },
    }
  },
  // disapatchでactionからデータを持ってくる
created () {
    this.getSkillScore(),
    this.getSkillName()
  },
  mounted () {
    this.renderChart(this.data, this.options)
  },
  methods:{
    // storeからfrontscore, nameを持ってくる
   // dataの中のdatasets配列０番目を持ってくる
    getSkillScore(){
      const skillScore=this.$store.getters.Score(0)
      this.data.datasets[0].data=skillScore
    },
    // storeからname
    getSkillName(){
      const skillScore=this.$store.getters.Name(0)
      this.data.labels=skillScore
    }
  }
}

</script>
