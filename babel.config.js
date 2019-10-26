module.exports = function(api) {
  const isProd = api.env('production');

  const prodConfig = isProd ? [['transform-remove-console']] : [];

  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./app'],
          extensions: ['.ios.js', '.android.js', '.js', '.json'],
          alias: {
            '@constants': './app/constants',
            '@components': './app/components',
            '@navigation': './app/navigation',
            '@screens': './app/screens',
            '@services': './app/services',
            '@styles': './app/styles',
          },
          cwd: 'packagejson',
        },
      ],
      ...prodConfig,
    ],
  };
};
