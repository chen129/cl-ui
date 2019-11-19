import './styles/index.less'

import Hello from './components/hello'
import ClCountUp from './components/count-up'
import ClScroll from './components/scroll'

const components = {
  Hello,
  ClCountUp,
  ClScroll
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
