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
          '@/constants': './src/constants',
          '@/icons': './src/resources/icons',
          '@/store': './src/store',
          '@/features': './src/features',
          '@/hooks': './src/hooks',
          '@/types': './src/types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
