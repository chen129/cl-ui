<template>
  <cl-count-up :value="5" :format="formatValue" />
</template>

<script>
export default {
  methods: {
    formatValue (num) {
      return num > 9 ? num : `0${num}`
    }
  }
}
</script>
