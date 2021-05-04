module.exports = {
  outputDir: './docs',
  assetsDir: 'static',
  productionSourceMap: true,
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/vue-login/',
};
