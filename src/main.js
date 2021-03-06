import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'

import BaseRegisterButton from './components/ui/BaseRegisterButton.vue'
// consider delete
import BaseItemButton from './components/ui/BaseItemButton.vue'
import ProductItemTemplate from './components/ProductItemTemplate.vue'
import ViewAllButton from './components/ui/ViewAllButton.vue'
import BaseArrowButton from './components/ui/BaseArrowButton.vue'

const app = createApp(App)

app.config.errorHandler = (err, vm, info) => {
  console.log(err)
  console.log(vm)
  console.log(info)
}
app.config.performance = true

app.component('base-register-button', BaseRegisterButton)
app.component('base-item-button', BaseItemButton)
app.component('product-item-template', ProductItemTemplate)
app.component('base-arrow-button', BaseArrowButton)
app.component('view-all-btn', ViewAllButton)

app.use(store)
app.use(router)
app.mount('#app')
