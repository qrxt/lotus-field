import path from 'path';
import webpack from 'webpack';

import CopyPlugin from 'copy-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import CompressPlugin from 'compression-webpack-plugin';
import { CleanWebpackPlugin as CleanPlugin } from 'clean-webpack-plugin';

import customMedia from 'postcss-custom-media';
import cssnano from 'cssnano';
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
              postcssOptions: {
                plugins: [
                  customMedia(),
                  autoprefixer,
                  cssnano({ preset: 'default' }),
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
    new CleanPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        devServer: true,
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/img', to: 'img' },
      ],
    }),
    new HtmlPlugin({
      favicon: './public/img/lotus.svg',
      filename: './index.html',
      template: './src/index.html',
    }),
    new CompressPlugin(),
  ],
  resolve: {
    alias: {
      '@root': path.resolve(__dirname),

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
