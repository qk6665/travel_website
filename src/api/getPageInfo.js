import axios from 'axios'

const getHomeInfo = async () => {
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
  getHomeInfo
}
