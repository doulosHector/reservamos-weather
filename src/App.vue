<script setup>
import InputSearch from '@/components/InputSearch.vue'
import { ref } from 'vue'

const searches = ref([])

function addSearch(search) {
  console.log(search)
}
</script>

<template>
  <header class="h-16 bg-white flex items-center justify-center">
    <h1 class="text-xl">
      Reservamos Weather Comparator
    </h1>
  </header>
  <main>
    <InputSearch
      @new-search="addSearch"
      />
  </main>
</template>

<style scoped>

</style>
