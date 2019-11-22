# cl-ui

## :rainbow: 安装
nmp 安装
```
npm install @chen129/cl-ui --seave
```
CDN
```html
// 引入样式
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@chen129/cl-ui@0.3.0/package/clUi.css">

// 引入组件库
<script src="https://cdn.jsdelivr.net/npm/@chen129/cl-ui@0.3.0/package/clUi.umd.min.js"></script>
```

## :beers: 引入 cl-ui
```javascript
import CLUI  from '@chen129/cl-ui'

import '@chen129/cl-ui/package/index.css'

Vue.use(CLUI)
```

## :hammer: 按需引入
- 借助插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)可以实现按需加载组件，减少文件体积。首先安装，并在文件 babel.config.js 中配置：

```
npm install babel-plugin-import --save-dev
```

```javascript
// babel.config.js
module.exports = {
  ...
  plugins: [['import', {
    'libraryName': '@chen129/cl-ui',
    'libraryDirectory': 'src/components'
  }]]
}

// main.js
import { Hello } from '@chen129/cl-ui'
import '@chen129/cl-ui/package/index.css'

Vue.component(Hello.name, Hello)
//or
Vue.use(Hello)
```
## :penguin: 文档
- [CountUp 数字累加](./md/count-up.md)
- [Scroll 无缝滚动](./md/scroll.md)