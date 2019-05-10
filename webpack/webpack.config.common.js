const path = require('path');
const webpack = require('webpack');
// const HtmlWebPackPlugin = require('html-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const mode = process.env.ENV_MODE || 'development';
const isProduction = mode === 'production';
const isUnpaid = !!process.env.UNPAID;

module.exports = {
  context: path.resolve(__dirname, '../src'),

  output: {
    // publicPath: '/',
    path: path.resolve('./public'),
    // path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js',
  },

  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      'CommonComponents': path.resolve(__dirname, '../src/components/common'),
      'CommonStyles': path.resolve(__dirname, '../src/common-styles/main.scss'),
      '@common': path.resolve(__dirname, '../src/common'),
      '@src': path.resolve(__dirname, '../src'),
      '@store': path.resolve(__dirname, '../src/store'),
      '@actions': path.resolve(__dirname, '../src/store/actions'),
      '@reducers': path.resolve(__dirname, '../src/store/reducers'),
      '@mocks': path.resolve(__dirname, '../src/__mocks__'),
    },
  },

  plugins: [
    isProduction ? new webpack.HashedModuleIdsPlugin() : new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      DEBUG: !isProduction,
      UNPAID: isUnpaid,
    }),
    isProduction && new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: isProduction ? 'static' : 'server',
    //   reportFilename: 'BundleAnalyzerReport.html',
    //   openAnalyzer: false,
    //   analyzerHost: 'localhost',
    //   analyzerPort: 8888,
    // }),
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      //     'css-loader',
      //     'sass-loader',
      //   ],
      // },
      // {
      //   test: /\.jpg$/,
      //   use: 'file-loader',
      // },
    ],
  },

  mode,

  // doesn't work so simply with SSR:

  // optimization: {
  //   mergeDuplicateChunks: isProduction,
  //   minimize: isProduction,
  //   minimizer: [
  //     new TerserPlugin({
  //       cache: true,
  //       sourceMap: true,
  //       terserOptions: {
  //         output: {
  //           comments: !isProduction,
  //         },
  //       },
  //     }),
  //   ],
  //   removeEmptyChunks: true,
  //   splitChunks: {
  //     chunks: 'all',
  //     minChunks: 10,
  //     minSize: 1024,
  //     maxSize: 1024 * 1000,
  //   },
  // },

  // devServer: {
  //   hot: true,
  //   https: false,
  //   port: 8080,
  //   historyApiFallback: true,
  //   proxy: {
  //     '/api/movies': 'http://localhost:3000',
  //     '/assets': 'http://localhost:3000',
  //   },
  // },

  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',

  watch: !isProduction,
};
