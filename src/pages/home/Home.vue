<template>
  <div>
    <home-herder></home-herder>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHerder from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { getHomeInfo } from '../../api/getPageInfo'
export default {
  name: 'home',
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHerder,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    _getHomeInfo () {
      getHomeInfo().then((res) => {
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      })
    }
  },
  mounted () {
    this._getHomeInfo()
  }
}
</script>

<style scoped>

</style>
