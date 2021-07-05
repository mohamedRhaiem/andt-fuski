const path = require('path');

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    config.module.rules.push( {
      test: /\.jsx?$/,
      loader: 'babel-loader'
  },
  {
      test: /\.less$/,
      use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
                modules: true,
            },
        },
          { loader: 'less-loader' }
      ],
  });
    return config;
  },
};
