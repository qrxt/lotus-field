import path from 'path';
import webpack from 'webpack';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import autoprefixer from 'autoprefixer';

module.exports = {
  devtool: false,
  entry: {
    main: [
      '@babel/polyfill',
      './src/index.js',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel'],
          },
        }],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: (resourcePath) => (
                  !resourcePath.endsWith('bootstrap.min.css')
                ),
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  autoprefixer,
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|gif|jpe?g|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
          'img-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        devServer: true,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/img', to: 'img' },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
    }),
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@public': path.resolve(__dirname, 'public'),

      '@components': path.resolve(__dirname, 'src', 'components'),
      '@pages': path.resolve(__dirname, 'src', 'components', 'pages'),
      '@hoc': path.resolve(__dirname, 'src', 'components', 'hoc'),

      '@containers': path.resolve(__dirname, 'src', 'containers'),

      '@reducers': path.resolve(__dirname, 'src', 'reducers'),
      '@actions': path.resolve(__dirname, 'src', 'actions'),

      '@services': path.resolve(__dirname, 'src', 'services'),

      '@images': path.resolve(__dirname, 'public', 'img'),
      '@locales': path.resolve(__dirname, 'public', 'locales'),

      '@utils': path.resolve(__dirname, 'src', 'utils'),
    },
  },
};
