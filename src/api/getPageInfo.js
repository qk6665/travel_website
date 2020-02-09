import axios from 'axios'

const getHomeInfo = async (city) => {
  let result = ''
  try {
    result = await axios.get('/getHomeResources?city=' + city)
    if (result.status === 200) {
      return result.data
    }
  } catch (e) {
    console.log(e)
  }
  return result
}

const getCityInfo = async () => {
  let result = ''
  try {
    result = await axios.get('/getResources')
    if (result.status === 200) {
      return result.data
    }
  } catch (e) {
    console.log(e)
  }
  return result
}

export {
  getHomeInfo,
  getCityInfo
}
