<script>
const prefixClassName = 'cl-notice'

export default {
  name: 'cl-notice',
  props: {
    icon: String,
    text: String,
    speed: {
      type: Number,
      default: 50
    },
    delay: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      wrapWidth: 0,
      offsetWidth: 0,
      duration: 0
    }
  },
  watch: {
    text: {
      handler () {
        this.$nextTick(() => {
          const { wrap, content } = this.$refs
          const wrapWidth = wrap.getBoundingClientRect().width
          const offsetWidth = content.getBoundingClientRect().width
          if (offsetWidth > wrapWidth) {
            this.wrapWidth = wrapWidth
            this.offsetWidth = offsetWidth
            this.duration = offsetWidth / this.speed
          }
        })
      },
      immediate: true
    }
  },
  render (h) {
    const { icon } = this.$props
    const { $icon } = this.$slots
    const _this = this
    function LeftIcon () {
      if ($icon) return _this.$slots.icon
      if (icon) {
        return h(
          'Icon',
          {
            props: {
              icon,
              color: '#00e5ff',
              size: '16'
            },
            class: [prefixClassName + '-icon']
          }
        )
      }
    }

    const contentStyle = {
      paddingLeft: this.wrapWidth + 'px',
      animationDelay: this.delay + 's',
      animationDuration: this.duration + 's'
    }

    return h(
      'div',
      {
        class: [prefixClassName],
        on: {
          click: (event) => {
            this.$emit('click', event)
          }
        }
      },
      [
        LeftIcon(),
        h(
          'div',
          {
            class: [prefixClassName + '-wrap'],
            ref: 'wrap'
          },
          [
            h(
              'div',
              {
                class: [prefixClassName + '-wrap-message'],
                ref: 'content',
                style: contentStyle
              },
              this.text
            )
          ]
        )
      ]
    )
  }
}
</script>

<style lang="less" scoped>
.notice {
  display: flex;
  align-items: center;
  padding: 0 25px;
  width: 100%;
  &-icon {
    min-width: 34px;
  }
  &-wrap {
    flex: 1;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    height: 22px;
    &-message {
      position: absolute;
      font-size: 14px;
      color: #00e5ff;
      animation: notice-animation infinite linear;
    }
  }
}
</style>
