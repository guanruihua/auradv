import { createApp } from 'vue'
import App from './app.tsx'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

