import axios from 'axios'

const url = 'https://search.reservamos.mx/api/v2/places'

export const getPlaces = (place) => axios.get(url, {
  params: {
    q: place
  }
})
