import Notice from './src'

Notice.install = function (Vue) {
  Vue.component(Notice.name, Notice)
}

export default Notice
