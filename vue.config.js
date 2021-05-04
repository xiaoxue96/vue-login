module.exports = {
  outputDir: './dist',
  assetsDir: 'static',
  productionSourceMap: true,
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/vue-login/',
};
