import { defineComponent } from 'vue'
import trackerStatistics from '../../../src/tracker-statistics'

const TestPage = defineComponent({
  name: 'TestPage',
  setup() {
    const onBuy = () => {
      console.log(121)
      trackerStatistics.cart(1)
    }

    return {
      onBuy
    }
  },
  render() {
    return (
      <div onClick={ this.onBuy }>12312313</div>
    )
  }
})

export default TestPage
