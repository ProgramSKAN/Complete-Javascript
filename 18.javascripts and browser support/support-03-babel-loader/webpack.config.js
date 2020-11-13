const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   contentBase: './'
  // }
  module: {//BABEL TO TRANSPILE MODREN JS CODE INTO OLDER
    rules: [
      {
        test: /\.m?js$/,//ANY FILE WITH .js or .mjs SHOULD BE HANDLED BY BELOW RULE
        exclude: /(node_modules)/,//ingnore files in node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()]
};
