<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :galleryImgs="galleryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './component/Banner'
import DetailHeader from './component/Header'
import DetailList from './component/List'
import { getDetailInfo } from '../../api/getPageInfo'
export default {
  name: 'detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      list: []
    }
  },
  components: {
    DetailList,
    DetailBanner,
    DetailHeader
  },
  methods: {
    _getDetailInfo () {
      getDetailInfo(this.$route.params.id).then((res) => {
        if (res.ret && res.data) {
          const data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.galleryImgs = data.galleryImgs
          this.list = data.categoryList
        }
      })
    }
  },
  mounted () {
    this._getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
