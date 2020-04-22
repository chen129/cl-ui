<template>
  <div class="demo">
    <div class="component-wrapper">
      <div class="component-wrapper-demo demo-notice">
        <div class="demo-notice-wrapper">
          <cl-notice
            @click="onClick"
            text="消息通知，消息通知，消息通知，消息通知，消息通知，消息通知，消息通知，消息通知。"
          />
        </div>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <pre><code class="vue language-html" v-html="codeStr"></code></pre>
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
import hljs from 'highlight.js'

const html =
`<cl-notice @click="onClick" text="消息通知，消息通知，消息通知，消息通知，消息通知，消息通知，消息通知，消息通知" />

// javaScript
export default {
  onClick (event) {
    console.log(event)
  }
}`
const highlightedCode = hljs.highlightAuto(html).value

export default {
  mixins: [mixin],
  data () {
    return {
      codeStr: highlightedCode
    }
  },
  methods: {
    onClick (event) {
      console.log(event)
    }
  }
}
</script>

<style lang="less" scoped>
.demo-notice-wrapper {
  width: 100%;
}
</style>
