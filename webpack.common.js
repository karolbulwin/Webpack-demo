const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    another: './src/another-module.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        },
        {
          name: 'theme-color',
          content: '#4285f4'
        },
        {
          name: 'description',
          content: 'playing with webpack'

        },
        {
          name: 'author',
          content: 'Karol Bulwin'
        }
      ],
      title: 'Webpack',
      lang: 'en-US'
    })
  ]
};
