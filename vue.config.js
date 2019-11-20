const path = require('path')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve('src/styles/variables.less'),
        resolve('src/styles/mixins.less')
      ]
    })
}

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'examples/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    config
      .resolve
      .alias
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
  }
}
