<script lang="ts">
import { defineComponent } from 'vue'
import DateTime from './DateTime.vue' // adjust path as necessary

interface InternalDateTime {
    year: number;
    month: number;
    day: number;
  }

export default defineComponent({
  components: {
    DateTime,
  },
  data() {
    return {
      dateModel: { year: 2019, month: 1, day: 1 },
    }
  },
  methods: {
    serialize(date: InternalDateTime):string {
      // Implement serialization logic if needed
      return `${date.year}-${date.month}-${date.day}`
    },
    deserialize():InternalDateTime {
      // Implement deserialization logic if needed
      return { year: 2019, month: 1, day: 1 }
    },
  },
})
</script>

<template>
  <DateTime
    v-model="dateModel"
    :serialize="serialize"
    :deserialize="deserialize"
  />
  <pre>
      Internal date is: {{ dateModel }}
    </pre
  >
</template>

<style scoped></style>
