const {extractCssPlugin, postcss} = require('./utils');
const {readFileSync} = require('fs');

module.exports = (
  {env, scssVariables, postcssOpts, exclude = /node_modules/}) => (
  {
    test: /\.scss$/,
    exclude,
    loader: extractCssPlugin(env)([
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
          camelCase: 'dashes',
          localIdentName: '[path]___[name]__[local]',
        }
      },
      postcss(postcssOpts),
      {
        loader: 'sass-loader',
        options: {
          data: scssVariables ? readFileSync(scssVariables, 'utf-8') : '',
        }
      }
    ])
  }
);
