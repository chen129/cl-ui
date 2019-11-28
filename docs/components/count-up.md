用于展示数字累加动效
### 基本用法
::: tip 提示
开始数值（默认为0）累加至目标数值  
:::
<count-up />

### 循环滚动
```html
<template>
  <cl-count-up :value="4560" loop />
  <cl-count-up :value="4560" :interval="3000" loop />
</template>
```
### 自定义展示效果
```html
<template>
  // separator 默认为","
  <cl-count-up :value="4560" separator="-" />
  <cl-count-up :value="4560" prefix="总人数：" suffix="人" />
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
```
### CountUp Props
| 属性 | 说明 | 类型 | 默认值 |
| :- | :- | :- | :- |
| value | 展示数值 | number | 0 |
| tag | 渲染为指定标签 | string | span |
| startVal | 开始数值 | number | 0 |
| loop | 是否循环滚动 | boolean | false |
| interval | 循环滚动间隔时间，仅在loop模式下有效 | number | 5000 |
| separator | 分组分隔符，在使用format时无效 | string | , |
| prefix | 前置文本，在使用format时无效 | string |  |
| suffix | 后置文本，在使用format时无效 | string |  |
| format | 格式化文本，回调参数num | function | -- |
### CountUp Events
| 事件名称 | 说明 | 回调参数 |
| :- | :- | :- |
| click | 自定义click事件 | event |