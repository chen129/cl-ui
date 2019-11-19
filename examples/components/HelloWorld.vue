<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Hello />
    <count-up />
    <scroll />
  </div>
</template>

<script>
import CountUp from './CountUp'
import Scroll from './Scroll'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      a: 1
    }
  },
  methods: {
    onClick (ev) {
      console.log(ev)
    }
  },
  components: {
    CountUp,
    Scroll
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.count-up {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
