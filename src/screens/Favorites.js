import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

export default function FavoriteScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={ FavoriteScreen }>
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function FavoriteScreen() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorites!</Text>
    </View>
  );
}
