<script setup>
import InputSearch from '@/components/InputSearch.vue'
import DestinationWeather from '@/components/DestinationWeather.vue'
import { reactive } from 'vue'

const destinations = reactive([])

function addDestination(destination) {
  destinations.push(...destination)
}
</script>

<template>
  <header class="h-16 bg-white flex items-center justify-center">
    <h1 class="text-xl">
      Reservamos Weather Comparator
    </h1>
  </header>
  <main class="px-8">
    <InputSearch
      @new-destination="addDestination"
      />
    <div class="mx-auto">
      <DestinationWeather
        v-for="(dest, idx) in destinations"
        :key="idx"
        :destination="dest"
        />
    </div>
  </main>
</template>

<style scoped>

</style>
