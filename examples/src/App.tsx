import { defineComponent } from 'vue'
import trackerStatistics from 'tracker-statistics'

const App = defineComponent({
  name: 'App',
  render() {
    trackerStatistics()

    return (
      <div>123</div>
    )
  }
})

export default App
