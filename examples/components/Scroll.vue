<template>
  <div class="demo-scroll">
    <div class="demo-scroll-wrapper">
      <cl-scroll :data="data" class="scroll">
        <ul class="list">
          <li v-for="(item, index) in data" :key="index">{{ item }}</li>
        </ul>
      </cl-scroll>
    </div>
    <div class="demo-scroll-horizontal">
      <cl-scroll class="scroll-horizontal" tag="p" direction="horizontal">开始231231231231231232327899676556353532fdsfaffffffffff321结束。</cl-scroll>
    </div>
    <div @click="changeData">点击</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ]
    }
  },
  methods: {
    changeData () {
      this.data = [1, 3, 4]
    }
  }
}
</script>

<style lang="less">
.scroll {
  margin: 20px 0;
}
.demo-scroll-wrapper {
  width: 500px;
  height: 200px;
  border: 1px solid @red;
  margin: 0 auto;
  box-sizing: border-box;
}
.demo-scroll-horizontal {
  width: 500px;
  margin: 20px auto;
  border: 1px solid @red;
  text-align: left;
}
.scroll-horizontal {
  margin: 0 20px;
}
ul,
li {
  padding: 0;
  list-style: none;
  margin: 0;
  text-align: left;
}
li {
  padding: 5px 20px;
}
.list {
  // margin: 20px 0;
}
</style>
