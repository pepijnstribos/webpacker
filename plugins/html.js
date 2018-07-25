const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = ({cwd, index = 'src/index.html'}) => new HtmlWebpackPlugin({
  template: path.isAbsolute(index) ? index : path.join(cwd, index),
  hash: false,
  baseHref: '/',
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  }
});
