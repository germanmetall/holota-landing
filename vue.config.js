const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    marathon: {
      entry: 'src/marathon.js',
      template: 'public/index.html',
      filename: 'marathon.html',
      title: 'Marathon'
    }
  },
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_TYPE === 'gh' 
    ? '/holota-landing/'
    : ''
})
