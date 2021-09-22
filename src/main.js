import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BaseLongButton from './components/ui/BaseLongButton.vue'

const app = createApp(App)

app.component('base-long-button', BaseLongButton)

app.use(store)
app.use(router)
app.mount('#app')
