<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'DevChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [{
          label: "DevOps",
          data: [],
          backgroundColor: [
            'rgba(87, 16, 131, 0.25)'
            ],
            borderColor: [
              'rgba(87, 16, 131, 0.7)',
              'rgba(87, 16, 131, 0.7)',
              'rgba(87, 16, 131, 0.7)',
              'rgba(87, 16, 131, 0.7)',
              'rgba(87, 16, 131, 0.7)'
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
created () {
    this.getSkillScore(),
    this.getSkillName()
  },
  mounted () {
    this.renderChart(this.data, this.options)
  },
  methods:{
    // storeからscore
    getSkillScore(){
      const skillScore=this.$store.getters.Score(this.$store.state.categories['devops'])
      this.data.datasets[0].data=skillScore
    },
    // storeからname
    getSkillName(){
      const skillScore=this.$store.getters.Name(this.$store.state.categories['devops'])
      this.data.labels=skillScore
    }
  }
}
</script>
