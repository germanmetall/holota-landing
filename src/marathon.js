import { createApp } from 'vue'
import App from './Marathon.vue'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).mount('#app')
