用于无缝滚动展示
### 基本用法
<scroll />

### 横向滚动(不推荐使用,可使用 [Notice](./notice.md) 代替)
```html
<template>
  <cl-scroll direction="horizontal">
    // ...
  </cl-scroll>
</template>
```
### CountUp Props
| 属性      | 说明                         | 类型                        | 默认值   |
|:----------|:-----------------------------|:----------------------------|:---------|
| tag       | 渲染为指定标签               | string                      | span     |
| data      | 监听数据变化，重新初始化滚动 | any                         | --       |
| direction | 滚动方向                     | string(vertical/horizontal) | vertical |
| speed     | 滚动速率                     | number                      | 40(ms)   |