import { createApp } from 'vue'
import './styles/general.scss'
import App from './App.vue'
import { router } from './router.js'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"


createApp(App).use(router).mount('#app')
