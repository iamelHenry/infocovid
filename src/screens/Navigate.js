import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

export default function NavigateScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Navigate" component={ NavigateScreen }>
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function NavigateScreen() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Navigate!</Text>
    </View>
  );
}