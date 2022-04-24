import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { environment } from '@/utils/environment'
import Vconsole from 'vconsole'
import '@/plugin/rem'

// 初始化样式
import '@/assets/pubStyle/reset.css'

console.log('环境变量：', process.env)

const app = createApp(App)

// 打印
let vConsole = null
if (environment === 'test') {
  vConsole = new Vconsole()
} else {
  vConsole = null
}
app.config.globalProperties.vConsole = vConsole
app.use(store).use(router).mount('#app')
