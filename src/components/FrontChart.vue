<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['HTML', 'CSS', 'Javascript','SCSS', 'Vue'],
        datasets: [{
          data: [ 20, 30, 10, 5, 15],
          backgroundColor: [
            'rgba(100, 0, 150, 0.25)'
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
