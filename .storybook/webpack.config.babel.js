export default ({config, mode}) => {

  const extraRules = [
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
  ];

  config.module.rules = [...config.module.rules, ...extraRules];

  return config;
};
