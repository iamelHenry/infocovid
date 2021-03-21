import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

const NavigateStack = createStackNavigator();

export default function NavigateScreenStack() {
  return (
    <NavigateStack.Navigator>
      <NavigateStack.Screen name="Navigate" component={ NavigateScreen }>
      </NavigateStack.Screen>
    </NavigateStack.Navigator>
  );
}

function NavigateScreen() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Navigate!</Text>
    </View>
  );
}