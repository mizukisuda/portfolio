<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'BackChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Java', 'Ruby', 'RubyOnRails', 'MySQL'],
        datasets: [
          {
            label: 'Back-end',
            data: [15, 15, 10, 30],
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
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
