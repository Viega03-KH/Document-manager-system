<template>
    <div class="w-full">
        <label v-if="label" class="block mb-2.5 text-sm font-medium text-heading">
            {{ label }}
        </label>

        <input 
            :type="type" 
            :placeholder="placeholder" 
            :disabled="disabled" 
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"

            class="bg-gray-50 text-gray-900 border text-sm rounded-lg block w-full p-2.5
                   dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white
                   focus:outline-none focus:ring-2"

            :class="[
                borderClass,
                focusClass,
                disabled ? 'opacity-50 cursor-not-allowed' : '',
                customClass
            ]"
        />

        <p v-if="error && errorMessage" class="text-red-500 text-xs mt-1">
            {{ errorMessage }}
        </p>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    modelValue: { type: [String, Number], default: '' },
    label: { type: String, default: '' },
    type: { type: String, default: 'text' },
    variant: { type: String, default: 'blue' },
    placeholder: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    customClass: { type: String, default: '' },
    error: { type: Boolean, default: false },
    errorMessage: { type: String, default: '' }
})

const borderClass = computed(() => {
    if (props.error) return 'border-red-500 dark:border-red-400'

    const borders = {
        blue: 'border-gray-300 dark:border-gray-600',
        gray: 'border-zinc-300 dark:border-zinc-600',
        danger: 'border-red-500 dark:border-red-400',
        dark: 'border-zinc-800',
        ghost: 'border-zinc-300 bg-transparent'
    }

    return borders[props.variant] || borders.blue
})

const focusClass = computed(() => {
    if (props.error)
        return 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-400 dark:focus:border-red-400'

    const focus = {
        blue: 'focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400',
        gray: 'focus:ring-zinc-400 focus:border-zinc-400 dark:focus:ring-zinc-500 dark:focus:border-zinc-500',
        danger: 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-400 dark:focus:border-red-400',
        dark: 'focus:ring-zinc-700 focus:border-zinc-700 dark:focus:ring-zinc-500 dark:focus:border-zinc-500',
        ghost: 'focus:ring-blue-400 focus:border-blue-400'
    }

    return focus[props.variant] || focus.blue
})
</script>
