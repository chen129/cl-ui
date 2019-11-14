<script>
import { CountUp } from 'countup.js'

const prefixCls = 'cl-count-up'

export default {
  name: 'ClCountUp',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    value: {
      type: Number,
      default: 0
    },
    loop: Boolean,
    interval: {
      type: Number,
      default: 5000
    },
    startVal: {
      type: Number,
      default: 0
    },
    separator: {
      type: String,
      default: ','
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    format: Function
  },
  watch: {
    'value': 'update'
  },
  mounted () {
    this.createCountUp()
  },
  methods: {
    createCountUp () {
      let options = {
        startVal: this.startVal,
        separator: this.separator,
        prefix: this.prefix,
        suffix: this.suffix,
        formattingFn: this.format
      }
      this.countUp = new CountUp(this.$refs.countUp, this.value, options)
      this.loop
        ? this.countUp.start(this.methodToCallOnComplete)
        : this.countUp.start()
    },
    methodToCallOnComplete () {
      this.timer = window.setInterval(() => {
        this.countUp.reset()
        this.countUp.start()
      }, this.interval)
    },
    upDate (value) {
      this.countUp.pauseResume()
      this.countUp.update(value)
    },
    handleClick (ev) {
      this.$emit('click', ev)
    }
  },
  beforeDestroy () {
    this.timer && window.clearInterval(this.timer)
  },
  render (h) {
    return h(
      this.tag,
      {
        class: [
          prefixCls
        ],
        ref: 'countUp',
        on: {
          click: this.handleClick
        }
      }
    )
  }
}
</script>
