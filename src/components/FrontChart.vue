<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'FrontChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['HTML', 'CSS', 'JavaScript','SCSS', 'Vue'],
        datasets: [{
          label: "Front-end",
          data: [ 40, 50, 20, 20, 20],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
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
  }
    }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
