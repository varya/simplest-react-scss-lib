module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-notes/register',
    '@storybook/addon-docs',
    'storybook-addon-themes',
    '@storybook/addon-actions/register',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-backgrounds/register',
  ],
};
