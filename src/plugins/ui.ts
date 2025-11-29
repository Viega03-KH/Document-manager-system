import type { App } from 'vue'
import UButton from '@/components/dock-ui/UButton.vue'
import UInput from '@/components/dock-ui/UInput.vue'

export default {
  install(app: App) {
    app.component('UButton', UButton)
    app.component('UInput', UInput)
  },
}
