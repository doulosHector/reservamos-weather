<script setup>
import { getPlaces } from '@/services/reservamos_api'
import { getWeather } from '@/services/openweathermap_api'
import { ref } from 'vue'
const emit = defineEmits(['newSearch'])

const destination = ref('')
const loading = ref(false)

async function searchDestination() {
  loading.value = true
  try {
    const { data } = await getPlaces(destination.value)
    const cities = data.filter(item => item.result_type === 'city')
    const weatherCities = await Promise.all(
      cities.map(async(city) => {
        const { data: weather } = await getWeather(city.lat, city.long)
        return {
          city: city.city_name,
          country: city.country,
          display: city.display,
          weather
        }
      })
    )
    emit('newSearch', weatherCities)
  } catch (error) {
    console.error(error)
  }
  destination.value = ''
  loading.value = false
}
</script>

<template>
  <div class="flex justify-center items-end space-x-2">
    <div class="flex flex-col mt-10 w-64 space-y-1">
      <label for="destination">Search destination:</label>
      <input
        id="destination"
        type="text"
        class="h-10 px-2 text-lg rounded"
        v-model="destination"
        @keyup.enter="searchDestination"
        >
    </div>
    <button
      class="h-10 py-1 px-6 bg-blue-500 text-white rounded transition-colors duration-300 hover:bg-blue-400"
      :class="{ 'opacity-50': loading }"
      :disabled="loading"
      @click="searchDestination"
      >
      {{ loading ? 'Loading' : 'Search' }}
    </button>
  </div>
</template>