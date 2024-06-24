<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue'

interface InternalDateTime {
  year: number
  month: number
  day: number
}

const props = defineProps<{
  modelValue: InternalDateTime
  serialize: (date: InternalDateTime) => string
  deserialize: (dateString: string) => InternalDateTime
}>()

const emit = defineEmits(['update:modelValue'])

const date = ref<InternalDateTime>({ ...props.modelValue })

watch(
  () => props.modelValue,
  (newValue) => {
    date.value = { ...newValue }
  },
)

const handleInput = (field: keyof InternalDateTime, event: Event) => {
  const target = event.target as HTMLInputElement
  const value = parseInt(target.value, 10)
  if (!isNaN(value)) {
    date.value[field] = value
    emit('update:modelValue', { ...date.value })
  }
}
</script>

<template>
  <div>
    <input
      type="number"
      :value="date.year"
      @input="handleInput('year', $event)"
    />
    <input
      type="number"
      :value="date.month"
      @input="handleInput('month', $event)"
    />
    <input
      type="number"
      :value="date.day"
      @input="handleInput('day', $event)"
    />
    <pre>
      Serialized date is: {{ props.serialize(date) }}
    </pre>
    <pre>
      Deserialized date is: {{ props.deserialize(props.serialize(date)) }}
    </pre>
    <pre>
      Internal date is: {{ date }}
    </pre>
  </div>
</template>

<style scoped></style>
