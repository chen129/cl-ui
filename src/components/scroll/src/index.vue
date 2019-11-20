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
    data: null,
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
  watch: {
    data: {
      handler (value, oldValue) {
        this.scrollX = this.scrollY = 0
        this.$nextTick(() => {
          this.init()
        })
      },
      deep: true
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
        transform: `translate3d(-${this.scrollX}px, -${this.scrollY}px, 0)`
      }
    }
  },
  created () {
    this.initVal = 0
    this.wrapperSize = 0
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.stop()
      const el = this.$refs.clScroll
      const { marginTop, marginLeft } = getComputedStyle(el, null)
      this.wrapperSize = this.direction === HORIZONTAL
        ? el.scrollWidth + parseInt(marginLeft)
        : el.clientHeight + parseInt(marginTop)
      this._setOverflow(el.parentNode)
      if (this.direction === HORIZONTAL) {
        let parentWidth = el.parentNode.clientWidth
        if (this.wrapperSize > parentWidth) {
          this.copyEl = true
          this.initVal = parseInt(marginLeft)
          this._scrollXFn()
        } else {
          this.copyEl = false
          this.initVal = 0
        }
      } else {
        let parentHeight = el.parentNode.clientHeight
        if (this.wrapperSize > parentHeight) {
          this.copyEl = true
          this.initVal = parseInt(marginTop)
          this._scrollYFn()
        } else {
          this.copyEl = false
          this.initVal = 0
        }
      }
    },
    stop () {
      this.timer && window.clearInterval(this.timer)
    },
    goOn () {
      this.direction === HORIZONTAL
        ? this._scrollXFn()
        : this._scrollYFn()
    },
    _scrollYFn () {
      this.timer = window.setInterval(() => {
        this.scrollY = this.scrollY >= this.wrapperSize ? this.initVal : this.scrollY + 1
      }, this.speed)
    },
    _scrollXFn () {
      this.timer = window.setInterval(() => {
        this.scrollX = this.scrollX >= this.wrapperSize ? this.initVal : this.scrollX + 1
      }, this.speed)
    },
    _setOverflow (el) {
      const { overflow } = getComputedStyle(el, null)
      if (overflow !== 'hidden') {
        el.style.overflow = 'hidden'
      }
    }
  },
  beforeDestroy () {
    this.stop()
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
        ref: 'clScroll',
        on: {
          mouseenter: this.stop,
          mouseleave: this.goOn
        }
      },
      [
        this.$slots.default,
        slotsDefaultEl.call(this)
      ]
    )
  }
}
</script>
