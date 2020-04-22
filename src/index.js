import './styles/index.less'

import Hello from './components/hello'
import ClCountUp from './components/count-up'
import ClScroll from './components/scroll'
import ClNotice from './components/notice'

const components = {
  Hello,
  ClCountUp,
  ClScroll,
  ClNotice
}

const install = function (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
