<script setup>
import DayCard from '@/components/DayCard.vue'
const props = defineProps(['destination'])
</script>

<template>
  <div class="mt-4">
    <p class="text-lg">{{ destination.city }} / {{ destination.state }} / {{ destination.country }}</p>
    <div class="flex flex-wrap space-x-4 mt-4">
      <DayCard
        v-for="(day, idx) in destination.weather.daily"
        :key="idx"
        :day="day"
        />
    </div>
  </div>
</template>
