<template>
  <div>
    <HomeHerder></HomeHerder>
    <HomeSwiper></HomeSwiper>
    <div>hello</div>
  </div>
</template>

<script>
import HomeHerder from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'home',
  components: {
    HomeHerder,
    HomeSwiper
  }
}
</script>

<style scoped>

</style>
