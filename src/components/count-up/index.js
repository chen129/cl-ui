import CountUp from './src'

CountUp.install = function (Vue) {
  Vue.component(CountUp.name, CountUp)
}

export default CountUp
