import { createApp } from 'vue'
import App from './App.vue'
<<<<<<< HEAD

createApp(App).mount('#app')
=======
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
>>>>>>> 1935429 (init)
