<script setup>
import DayCard from '@/components/DayCard.vue'
const props = defineProps(['destination'])
</script>

<template>
  <div class="mt-4 mx-auto flex flex-col items-center container">
    <p class="sm:text-lg">{{ destination.city }} / {{ destination.state }} / {{ destination.country }}</p>
    <div class="mt-4 grid grid-cols-2 gap-4 content-center sm:grid-cols-3 md:grid-cols-4">
      <DayCard
        v-for="(day, idx) in destination.weather.daily"
        :key="idx"
        :day="day"
        />
    </div>
  </div>
</template>
