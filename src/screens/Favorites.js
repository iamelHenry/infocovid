import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

const FavoriteStack = createStackNavigator();

export default function FavoriteScreenStack() {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen name="Favorites" component={ FavoriteScreen }>
      </FavoriteStack.Screen>
    </FavoriteStack.Navigator>
  );
}

function FavoriteScreen() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorites!</Text>
    </View>
  );
}
