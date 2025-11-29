<template>
    <button class="font-medium rounded-md text-sm px-4 py-2" :type="type" :disabled="disabled || loading"
        :class="[color, customClass]" @click="handleClick">
        <div class="flex items-center justify-center">
            <slot />
        </div>
    </button>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['click'])

const props = defineProps({
    type: { type: String, default: 'button' },
    variant: { type: String, default: 'blue' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    customClass: { type: String, default: '' },
})

const handleClick = (e) => {
    if (props.disabled || props.loading) return
    emit('click', e)
}

const color = computed(() => {
    const colorClasses = {
        blue: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
        gray: 'py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
        purple: 'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"',
        red: 'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
    }
    return `${colorClasses[props.variant] || ''} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}`
})
</script>