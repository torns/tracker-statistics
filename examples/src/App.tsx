import { defineComponent } from 'vue'
// import trackerStatistics from 'tracker-statistics'
import { trackerStatistics, prefab } from '../../src/tracker-statistics'

const App = defineComponent({
  name: 'App',
  render() {
    const onClick = () => {
      console.log({ extend: trackerStatistics.extend.code.mall.shopDetail(5, 'asdfad', { b: 7 }), prefab: prefab() })

      setTimeout(() => {
        console.log({ extend: trackerStatistics.extend.code.leave.leavePage(), prefab: prefab() })
      }, 2000)
    }

    return (
      <div onClick={ onClick }>看这，看这，点我</div>
    )
  }
})

export default App
