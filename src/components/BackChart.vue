<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'BackChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Back-end',
            data: [],
          backgroundColor: [
              'rgba(15, 136, 57, 0.2)',
            ],
            borderColor: [
              'rgba(15, 136, 57, 0.7)',
              'rgba(15, 136, 57, 0.7)',
              'rgba(15, 136, 57, 0.7)',
              'rgba(15, 136, 57, 0.7)'
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
      const skillScore=this.$store.getters.backScore
      this.data.datasets[0].data=skillScore
    },
    // storeからname
    getSkillName(){
      const skillScore=this.$store.getters.backName
      this.data.labels=skillScore
    }
  }
}
</script>
