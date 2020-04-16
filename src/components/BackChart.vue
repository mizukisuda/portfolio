<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['java', 'Ruby', 'RubyOnRails', 'MySQL'],
        datasets: [{
          data: [10, 15, 20, 15,],
          backgroundColor: [
            'rgba(50, 150, 50, 0.25)'
          ],
        }]
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
