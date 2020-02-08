<template>
  <div>
    <city-herder></city-herder>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import CityHerder from './component/Header'
import CitySearch from './component/Search'
import CityList from './component/List'
import CityAlphabet from './component/Alphabet'
export default {
  name: 'city',
  components: {
    CityAlphabet,
    CityList,
    CitySearch,
    CityHerder
  }
}
</script>

<style lang="stylus" scoped>

</style>
