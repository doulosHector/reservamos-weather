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
  <div
    class="bg-white rounded w-32 h-44 p-2 text-center text-sm lg:text-lg lg:w-40 lg:h-48"
    :class="{ 'bg-red-200': day.maxTemp }"
    >
    <p class="font-semibold">{{ getDate(day.dt) }}</p>
    <img
      :src="iconUrl"
      :alt="day.weather[0].description"
      class="mx-auto"
      >
    <p class="mt-2">{{ day.temp.max }}° / {{ day.temp.min }}°</p>
  </div>
</template>
