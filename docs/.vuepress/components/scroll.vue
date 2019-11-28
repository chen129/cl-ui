<template>
  <div class="demo">
    <div class="component-wrapper">
      <div class="component-wrapper-demo demo-scroll">
        <div class="demo-scroll-wrapper">
          <cl-scroll>
            <ul class="list">
              <li class="list-item">无缝滚动 1</li>
              <li class="list-item">无缝滚动 2</li>
              <li class="list-item">无缝滚动 3</li>
              <li class="list-item">无缝滚动 4</li>
              <li class="list-item">无缝滚动 5</li>
              <li class="list-item">无缝滚动 6</li>
              <li class="list-item">无缝滚动 7</li>
              <li class="list-item">无缝滚动 8</li>
            </ul>
          </cl-scroll>
        </div>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <pre><code class="vue">{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin'

export default {
  mixins: [mixin],
  data () {
    return {
      codeStr: `<cl-scroll>
          <ul class="list">
            <li class="list-item">无缝滚动 1</li>
            <li class="list-item">无缝滚动 2</li>
            <li class="list-item">无缝滚动 3</li>
            <li class="list-item">无缝滚动 4</li>
            <li class="list-item">无缝滚动 5</li>
            <li class="list-item">无缝滚动 6</li>
            <li class="list-item">无缝滚动 7</li>
            <li class="list-item">无缝滚动 8</li>
          </ul>
      </cl-scroll>`
    }
  }
}
</script>

<style lang="less" scoped>
.demo-scroll-wrapper {
  height: 300px;
  .list, .list-item {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .list-item {
    padding: 10px;
  }
}
</style>
