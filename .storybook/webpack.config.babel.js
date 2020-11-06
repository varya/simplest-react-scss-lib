
import { CssLoaderConfig, SassLoaderConfig } from '../config/webpack.project.config';

export default ({config, mode}) => {


  const extraRules = [
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        CssLoaderConfig,
        'resolve-url-loader',
        SassLoaderConfig,
      ],
    },
  ];

  config.module.rules = [...config.module.rules, ...extraRules];

  return config;
};
