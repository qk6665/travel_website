<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img class="gallery-img" src="http://img1.qunarzz.com/sight/p0/1602/45/459bd3d00321a44790.water.jpg_r_800x800_523d81a9.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="gallery-img" src="http://img1.qunarzz.com/sight/p0/1602/45/459bd3d00321a44790.water.jpg_r_800x800_523d81a9.jpg" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      height 0
      width 100%
      padding-bottom 100%
      .gallery-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
