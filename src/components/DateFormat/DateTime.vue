<template>
    <div>
      <input
        name="year"
        :value="modelValue.year"
        @input="handleInput('year', $event)"
      />
      <input
        name="month"
        :value="modelValue.month"
        @input="handleInput('month', $event)"
      />
      <input
        name="day"
        :value="modelValue.day"
        @input="handleInput('day', $event)"
      />
  
      <pre>
        Internal date is:
        {{ modelValue }}
      </pre>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  interface InternalDateTime {
    year: number;
    month: number;
    day: number;
  }
  
  export default defineComponent({
    props: {
      modelValue: {
        type: Object as () => InternalDateTime,
        required: true,
      },
      serialize: {
        type: Function as () => (date: InternalDateTime) => string,
        required: true,
      },
      deserialize: {
        type: Function as () => (dateString: string) => InternalDateTime,
        required: true,
      },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      // Local reference to the modelValue to work with reactivity
      const date = ref(props.modelValue);
      // Function to handle input changes
      const handleInput = (field: keyof InternalDateTime, event: Event) => {
        const target = event.target as HTMLInputElement;
        const value = parseInt(target.value, 10);
        if (!isNaN(value)) {
          date.value[field] = value;
          emit('update:modelValue', props.serialize(date.value));
        }
      };
  
      return {
        modelValue: date,
        handleInput,
      };
    },
  });
  </script>
  