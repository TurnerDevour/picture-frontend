import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Antd from './plugin/antDesignPlugin'
import router from './router'
import './permission'

const app = createApp(App)

app.use(createPinia())
app.use(Antd)
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
