import path from 'path';

import { GLOBALS_SRC, OUTPUT_DIR_CODE, OUTPUT_GLOBALS_SRC } from './config';

import { CssLoaderConfig, SassLoaderConfig } from './webpack.project.config';

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
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          CssLoaderConfig,
          'resolve-url-loader',
          SassLoaderConfig,
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
