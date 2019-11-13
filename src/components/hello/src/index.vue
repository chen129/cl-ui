<template>
  <div class="cl-hello">
    {{ hello }}
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      hello: 'hello world!'
    }
  }
}
</script>
