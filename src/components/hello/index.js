import Hello from './src'

Hello.install = function (Vue) {
  Vue.component(Hello.name, Hello)
}

export default Hello
