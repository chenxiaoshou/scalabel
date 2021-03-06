/* global module */
const CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
  entry: {
    create: __dirname + '/app/src/js/create.js',
    image: __dirname + '/app/src/js/image.index.js',
    point_cloud: __dirname + '/app/src/js/point_cloud/point_cloud.index.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/app/dist/js/',
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: __dirname + '/app/src/annotation', to: __dirname + '/app/dist/annotation' },
      { from: __dirname + '/app/src/control', to: __dirname + '/app/dist/control' },
      { from: __dirname + '/app/src/css', to: __dirname + '/app/dist/css' },
      { from: __dirname + '/app/src/img', to: __dirname + '/app/dist/img' },
      { from: __dirname + '/app/src/js/thirdparty', to: __dirname + '/app/dist/js/thirdparty' },
    ])
  ]
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  return config;
};
