// @ts-ignore
import { defineComponent, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import trackerStatistics from '../../../src/tracker-statistics'
import { v4 as uuidv4 } from 'uuid'

const HomePage = defineComponent({
  name: 'HomePage',
  setup() {
    const router = useRouter()

    onMounted(() => {
      trackerStatistics.init({
        url: 'http://192.168.0.196:17001/api/sdk/h5',
        method: 'post'
      })
      trackerStatistics.stay.entry()
      trackerStatistics.expose({ name: 'shop', containerId: 'fuji', userId: uuidv4() })
    })

    onBeforeUnmount(() => {
      trackerStatistics.stay.leave(uuidv4())
    })

    const onBuy = () => {
      trackerStatistics.click({ name: '首页', userId: uuidv4() })
      trackerStatistics.buy(uuidv4(), uuidv4())
      trackerStatistics.cart({ itemId: uuidv4(), userId: uuidv4() })
      trackerStatistics.collect('shop', uuidv4(), uuidv4())
      trackerStatistics.comment('shop', '真好用', uuidv4(), uuidv4())
      trackerStatistics.like('shop', uuidv4(), uuidv4())
      trackerStatistics.share('shop', uuidv4(), uuidv4())
      trackerStatistics.subscribe('shop', uuidv4())
      trackerStatistics.unlike('shop', uuidv4(), uuidv4())
      // router.push('/test')
    }

    return {
      onBuy
    }
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
      <div>
        <div id="fuji" style={ { height: '500px', width: '200px', backgroundColor: 'pink', overflow: 'scroll' } }>
          {
            list.map(item => {
              return <div style={ { height: '200px', width: '100%' } } data-id={ item.id }>{ '(' + item.id + ')' + item.name }</div>
            })
          }
        </div>
        <div onClick={ this.onBuy }>立即购买</div>
      </div>
    )
  }
})

export default HomePage
