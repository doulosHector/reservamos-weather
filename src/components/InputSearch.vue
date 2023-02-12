<script setup>
import { getPlaces } from '@/services/reservamos_api'
import { getWeather } from '@/services/openweathermap_api'
import { ref } from 'vue'
const emit = defineEmits(['new-destination'])

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
          state: city.state,
          country: city.country,
          weather
        }
      })
    )
    emit('new-destination', weatherCities)
  } catch (error) {
    console.error(error)
  }
  destination.value = ''
  loading.value = false
}
</script>

<template>
  <div class="flex items-end space-x-2 justify-center">
    <div class="flex flex-col mt-10 w-48 sm:w-64 space-y-1">
      <label for="destination" class="font-semibold lg:text-lg">Search destination:</label>
      <input
        id="destination"
        type="text"
        class="h-10 px-2 rounded sm:text-lg"
        :class="{ 'opacity-50': loading }"
        v-model="destination"
        @keyup.enter="searchDestination"
        :disabled="loading"
        >
    </div>
    <button
      class="h-10 py-1 px-4 bg-blue-500 text-white rounded transition-colors duration-300 hover:bg-blue-400 font-semibold text-sm sm:text-base sm:px-6"
      :class="{ 'opacity-50': loading || !destination }"
      :disabled="loading || !destination"
      @click="searchDestination"
      >
      {{ loading ? 'Loading...' : 'Search' }}
    </button>
  </div>
</template>