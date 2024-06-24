<script setup lang="ts">
import { ref } from 'vue'
import DateTime from './DateTime.vue' // Adjust the path as necessary

interface InternalDateTime {
  year: number
  month: number
  day: number
}

const dateModel = ref<InternalDateTime>({ year: 2019, month: 1, day: 1 })

const serialize = (date: InternalDateTime): string => {
  return `${date.year}-${date.month}-${date.day}`
}

const deserialize = (dateString: string): InternalDateTime => {
  const parts = dateString.split('-').map((part) => parseInt(part, 10))
  return {
    year: parts[0],
    month: parts[1],
    day: parts[2],
  }
}
</script>

<template>
  <DateTime
    v-model="dateModel"
    :serialize="serialize"
    :deserialize="deserialize"
  />
</template>

<style scoped></style>
