import './assets/main.css'

import { createApp } from 'vue'
import Toast from 'vue-toastification'
import "vue-toastification/dist/index.css"
import App from './App.vue'
import router from './router.js'

createApp(App).use(Toast).use(router).mount('#app')
