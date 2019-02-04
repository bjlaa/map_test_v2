module.exports = {
  //...
  devServer: {
    watchOptions: {
      poll: true,
      proxy: 'https://localhost:8080',
    }
  }
};