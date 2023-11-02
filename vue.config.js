const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:8003', // Replace with the URL of your API server
        changeOrigin: true
      }
    }
  }
})
