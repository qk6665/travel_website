<template>
  <div>
    <HomeHerder></HomeHerder>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
  </div>
</template>

<script>
import HomeHerder from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'home',
  components: {
    HomeHerder,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style scoped>

</style>
