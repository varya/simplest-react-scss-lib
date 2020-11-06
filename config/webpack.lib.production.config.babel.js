import path from 'path';

import { OUTPUT_DIR_CODE } from './config';

export default {
  mode: 'production',
  context: OUTPUT_DIR_CODE,

  entry: './src/index.js',

  output: {
    path: path.resolve(OUTPUT_DIR_CODE, 'src'),
    filename: 'index.js',
    library: 'simplest-react-scss-lib',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this', // fixed window is not defined in UMD
    umdNamedDefine: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react","@babel/preset-env"],
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
            },
          },
          'resolve-url-loader',
          'sass-loader',
        ],
      },
    ],
  },
  externals: [
    'prop-types',
    'react',
    'react-dom',
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
};
