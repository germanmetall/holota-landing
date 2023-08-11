const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_TYPE === 'gh' 
    ? '/holota-landing/'
    : ''
})