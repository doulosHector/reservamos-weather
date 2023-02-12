<script setup>
import { computed } from 'vue'
const props = defineProps(['day'])

function getDate(unixDate) {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const d = new Date(unixDate * 1000)
  return `${d.getDate()} ${months[d.getMonth()]}`
}

const iconUrl = computed(() => {
  return `http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`
})
</script>

<template>
  <div class="bg-white rounded w-40 h-48 p-2 text-center">
    <p class="text-lg font-semibold">{{ getDate(day.dt) }}</p>
    <img
      :src="iconUrl"
      :alt="day.weather[0].description"
      class="mx-auto"
      >
    <p class="text-lg mt-2">{{ day.temp.max }}° / {{ day.temp.min }}°</p>
  </div>
</template>
