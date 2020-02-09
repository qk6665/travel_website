<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './component/Banner'
import DetailHeader from './component/Header'
export default {
  name: 'detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
