import { createApp } from 'vue'
import App from './App'
import router from './router'
import VConsole from 'vconsole'

const vConsole = new VConsole()

const app = createApp(App)
app.use(router)
app.mount('#app')
