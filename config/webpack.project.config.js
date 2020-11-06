export default {};

export const CssLoaderConfig = {
  loader: 'css-loader',
  query: {
    sourceMap: false,
    modules: true,
    importLoaders: 1,
    localIdentName: 'ds-[local]',
  },
};

export const SassLoaderConfig = {
  loader: 'sass-loader',
  options: {
    sassOptions: {
      sourceMap: false,
      minimize: false,
      outputStyle: 'expanded',
    },
  },
};