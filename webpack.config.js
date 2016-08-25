var webpack = require('webpack');

module.exports = {

  context: __dirname + "/app",
  devtool: 'cheap-module-eval-source-map',
  entry: [ "./app.js",
          'webpack-hot-middleware/client' ],
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  query:
  {
    presets:['react']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
  loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel"],
      }
    ],
  },

}

