module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@/components': './src/components',
          '@/navigators': './src/navigators',
          '@/theme': './src/theme',
          '@/utils': './src/utils',
          '@/screens': './src/screens',
          '@/config': './src/config',
          '@/i18n': './src/i18n',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
