
import { createStore } from 'vuex'
import getters from './getters'
import { modulesProps } from '@/hooks/useInterface'
const modulesFiles = require.context('./modules', true, /\.ts$/)
let modules = null

modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {} as modulesProps)

const store = createStore({
  modules: {
    ...modules
  },
  getters
})

export default store
