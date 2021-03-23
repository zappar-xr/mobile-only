/* eslint-disable no-unused-expressions */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');

baseConfig.entry = {
  isMobile: './tests/isMobile.ts',
  defaultUI: './tests/defaultUI.ts',
  customUI: './tests/customUI.ts',
};

baseConfig.output = {
  filename: '[name].js',
  path: `${__dirname}test-dist`,
};

baseConfig.plugins = [
  new HtmlWebpackPlugin({
    template: './tests/index.html',
    filename: 'isMobile.html',
    chunks: ['isMobile'],
  }),
  new HtmlWebpackPlugin({
    template: './tests/index.html',
    filename: 'defaultUI.html',
    chunks: ['defaultUI'],
  }),
  new HtmlWebpackPlugin({
    template: './tests/index.html',
    filename: 'customUI.html',
    chunks: ['customUI'],
  }),
];

baseConfig.devServer = {
  contentBase: '../test-dist',
  https: true,
  host: 'localhost',
  port: 8085,
};

baseConfig.output.path = path.resolve(__dirname, 'test-dist');

module.exports = baseConfig;
