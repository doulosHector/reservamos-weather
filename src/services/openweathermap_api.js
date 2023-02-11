import axios from 'axios'

const url = 'https://api.openweathermap.org/data/2.5/onecall'

export const getWeather = (lat, lon) => axios.get(url, {
  params: {
    lat,
    lon,
    appid: 'a5a47c18197737e8eeca634cd6acb581',
    exclude: 'current,minutely,hourly,alerts',
    units: 'metric'
  }
})
