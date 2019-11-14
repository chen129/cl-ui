import './styles/index.less'

import Hello from './components/hello'
import ClCountUp from './components/count-up'

const components = {
  Hello,
  ClCountUp
}

const install = function (Vue) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

export default {
  install,
  ...components
}
