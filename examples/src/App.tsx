import { defineComponent } from 'vue'
// import trackerStatistics from 'tracker-statistics'
import trackerStatistics from '../../src/tracker-statistics'

const App = defineComponent({
  name: 'App',
  render() {
    const onClick = () => {
      // console.log(trackerStatistics.expose('shop', 1))

      // setTimeout(() => {
      //   console.log(trackerStatistics.stay())
      // }, 1000)
    }

    const list = [
      { name: '看这，看这，点我', id: 1 },
      { name: '看这，看这，点我', id: 11 },
      { name: '看这，看这，点我', id: 12 },
      { name: '看这，看这，点我', id: 13 },
      { name: '看这，看这，点我', id: 14 },
      { name: '看这，看这，点我', id: 15 },
      { name: '看这，看这，点我', id: 16 },
      { name: '看这，看这，点我', id: 17 },
      { name: '看这，看这，点我', id: 18 },
      { name: '看这，看这，点我', id: 19 },
      { name: '看这，看这，点我', id: 111 },
      { name: '看这，看这，点我', id: 112 },
      { name: '看这，看这，点我', id: 113 },
      { name: '看这，看这，点我', id: 114 },
      { name: '看这，看这，点我', id: 115 }
    ]

    return (
      <div id="fuji">
        {
          list.map(item => {
            trackerStatistics.expose('shop', item.id, 'fuji')
            return  <div style={ { height: '200px', width: '100%' } } onClick={ onClick }>{ item.name }</div>
          })
        }
      </div>
    )
  }
})

export default App
