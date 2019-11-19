<template>
  <div class="demo-scroll-wrapper">
    <cl-scroll class="scroll">
      <ul class="list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
      </ul>
    </cl-scroll>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less">
.scroll {
  margin: 20px;
}
.demo-scroll-wrapper {
  width: 500px;
  height: 200px;
  border: 1px solid red;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
}
ul, li {
  padding: 0;
  list-style: none;
  margin: 0;
  text-align: left;
}
li {
  padding: 5px 20px;
}
</style>
