import * as React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <AppNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
}
