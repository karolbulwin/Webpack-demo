module.exports = ({ file, options, env }) => ({
  plugins: {
    // 'postcss-import': { root: file.dirname },
    // 'postcss-preset-env': options['postcss-preset-env'] ? options['postcss-preset-env'] : false,
    cssnano: env === 'production' ? {} : false,
    autoprefixer: { browsers: ['last 2 versions', '> 5%'] }
  }
});
