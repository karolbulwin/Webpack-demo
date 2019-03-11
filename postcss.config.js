/* module.exports = ctx => ({
  parser: ctx.parser ? 'sugarss' : false,
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    cssnano: ctx.env === 'production' ? {} : false
  }
}); */
module.exports = {
  map: false,
  plugins: {
    autoprefixer: { browsers: ['last 2 versions', '> 5%'] }
  }
};
console.log('postcss');
