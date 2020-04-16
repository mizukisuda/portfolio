<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Linux', 'Node', 'Git', 'GitHub','Firebase'],
        datasets: [{
          data: [ 20, 10, 30, 30, 10],
          backgroundColor: [
            'rgba(87, 16, 131, 0.25)'
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
