import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {ErrorBoundary} from './src/screens/error-boundary';
import Config from '@/config';
import {ViewStyle} from 'react-native';
import {AppNavigator} from '@/navigators';

function MainApp(): React.JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ErrorBoundary catchErrors={Config.catchErrors}>
        <GestureHandlerRootView style={$container}>
          <AppNavigator />
        </GestureHandlerRootView>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}

const $container: ViewStyle = {
  flex: 1,
};

export default MainApp;
