import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Navigation>
      </Navigation>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);
