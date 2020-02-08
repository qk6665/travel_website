<template>
  <div>
    <city-herder></city-herder>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import CityHerder from './component/Header'
import CitySearch from './component/Search'
import CityList from './component/List'
import CityAlphabet from './component/Alphabet'
import { getCityInfo } from '../../api/getPageInfo'
export default {
  name: 'city',
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  components: {
    CityAlphabet,
    CityList,
    CitySearch,
    CityHerder
  },
  methods: {
    _getCityInfo () {
      getCityInfo().then((res) => {
        console.log(res)
        if (res.ret && res.data) {
          const data = res.data
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      })
    }
  },
  mounted () {
    this._getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
