<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'DevChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Linux', 'Node', 'Git', 'GitHub','Firebase'],
        datasets: [{
          label: "DevOps",
          data: [ 20, 20, 40, 40, 20],
          backgroundColor: [
            'rgba(87, 16, 131, 0.25)'
            ],
            borderColor: [
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
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
