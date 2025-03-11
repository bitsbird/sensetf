const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Serve static files from 'dist'
    port: 3000, // Change the port if needed
    open: true, // Open the browser on server start
    hot: true, // Enable Hot Module Replacement
    compress: true, // Enable gzip compression
    historyApiFallback: true, // Support single-page apps
  },
  mode: 'development',
};
