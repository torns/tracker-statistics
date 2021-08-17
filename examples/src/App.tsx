import { defineComponent, onMounted } from 'vue'
// import trackerStatistics from 'tracker-statistics'
import trackerStatistics from '../../src/tracker-statistics'

const App = defineComponent({
  name: 'App',
  setup() {
    onMounted(() => {
      trackerStatistics.expose('shop', 'fuji')
    })
  },
  render() {
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
      <div id="fuji" style={ { height: '500px', width: '200px', backgroundColor: 'pink', overflow: 'scroll' } }>
        {
          list.map(item => {
            return <div style={ { height: '200px', width: '100%' } } data-id={ item.id }>{ '(' + item.id + ')' + item.name }</div>
          })
        }
      </div>
    )
  }
})

export default App
