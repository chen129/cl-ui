# cl-ui

## 安装
```
npm install @chen129/cl-ui --seave
```

## 引入 cl-ui
```javascript
...
import CLUI  from '@chen129/cl-ui'

import '@chen129/cl-ui/package/index.css'

Vue.use(CLUI)
...
```

## 按需引入
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
```