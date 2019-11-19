<script>
const VERTICAL = 'vertical'
const HORIZONTAL = 'horizontal'
const prefixCls = 'cl-scroll'

export default {
  name: 'ClScroll',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    direction: {
      type: String,
      default: VERTICAL,
      validator (value) {
        return [VERTICAL, HORIZONTAL].indexOf(value) !== -1
      }
    },
    speed: {
      type: Number,
      default: 40
    }
  },
  data () {
    return {
      copyEl: false,
      scrollY: 0,
      scrollX: 0
    }
  },
  computed: {
    pos () {
      return {
        transform: `translate3d(-${this.scrollX}px, -${this.scrollY}px, 0)`,
        overflow: 'hidden'
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const el = this.$refs.clScroll
      let wrapperSize = this.direction === HORIZONTAL ? el.clientWidth : el.clientHeight
      if (this.direction === HORIZONTAL) {

      } else {
        let parentHeight = el.parentNode.clientHeight
        if (wrapperSize > parentHeight) {
          this.copyEl = true
          this._scrollYFn(wrapperSize)
        } else {
          this.copyEl = false
        }
      }
    },
    _scrollYFn (size) {
      this.timer = window.setInterval(() => {
        this.scrollY = this.scrollY >= size ? 0 : this.scrollY + 1
      }, this.speed)
    }
  },
  beforeDestroy () {
    this.timer && window.setInterval(this.timer)
  },
  render (h) {
    function slotsDefaultEl () {
      if (this.copyEl) {
        return this.$slots.default
      }
    }

    return h(
      this.tag,
      {
        class: [
          `${prefixCls}-${this.direction}`
        ],
        style: this.pos,
        ref: 'clScroll'
      },
      [
        this.$slots.default,
        slotsDefaultEl.call(this)
      ]
    )
  }
}
</script>
