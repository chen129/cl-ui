import './styles/index.less'

import Hello from './components/hello'

const components = {
  Hello
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
