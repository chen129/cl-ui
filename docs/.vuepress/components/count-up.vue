<template>
  <div class="demo">
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <p class="demo-count-up">
          <cl-count-up :value="4567" />
        </p>
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
      codeStr: `<cl-count-up :value="4567" />`
    }
  }
}
</script>

<style lang="less" scoped>
.demo-count-up {
  font-size: 24px;
  line-height: 1;
  margin: 0;
}
</style>

