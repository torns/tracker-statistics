<template>
  <div>
    <div class="u-page">
      <!-- 所有内容的容器 -->
      <div @click="pageHook">点击跳转首页分包</div>
    </div>
    <!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
    <u-tabbar :list="vuex_tabbar" :mid-button="true" />
  </div>
</template>

<script>
import { comment } from '@/api/test'
import trackerStatistics from '../../../../../dist/tracker-statistics.es5'

export default {
  name: 'Index',
  mounted() {
    trackerStatistics.init({
      url: 'http://192.168.0.196:17001/api/sdk/h5',
      method: 'post'
    })
    this.getStory()
  },
  methods: {
    getStory() {
      comment().then(res => {
        console.log(res)
      })
    },

    pageHook() {
      uni.navigateTo({ url: '/pagesA/index/index' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
