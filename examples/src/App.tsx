import { defineComponent } from 'vue'
// import trackerStatistics from 'tracker-statistics'
import trackerStatistics from '../../src/tracker-statistics'

const App = defineComponent({
  name: 'App',
  render() {
    const onClick = () => {
      console.log(trackerStatistics.expose.list('shop'))

      setTimeout(() => {
        console.log(trackerStatistics.stay())
      }, 1000)
    }

    return (
      <div onClick={ onClick }>看这，看这，点我</div>
    )
  }
})

export default App
