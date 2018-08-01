const path = require('path');
const {setLoader, setPlugin} = require('../../utils');

module.exports = {
  output: fn => fn({path: path.join(__dirname, 'build')}),
  preset: {
    loaders: [
      setLoader('react'),
      setLoader('graphql'),
    ],
    plugins: [
      setPlugin('html'),
    ],
  }
};
