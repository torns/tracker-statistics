import { createApp } from 'vue'
import App from './App'
import VConsole from 'vconsole'

const vConsole = new VConsole()

const app = createApp(App)
app.mount('#app')
