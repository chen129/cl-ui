<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <cl-count-up :value="num" />
    <p class="title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'CL-UI',
      num: 23
    }
  },
  mounted () {
    this.num = 45
  }
}
</script>

<style lang="less">
.title {
  font-size: 64px;
  font-weight: bold;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
