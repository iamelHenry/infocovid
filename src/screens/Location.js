import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

const LocationStack = createStackNavigator();

export default function LocationScreenStack() {
  return (
    <LocationStack.Navigator>
      <LocationStack.Screen
        name='Location'
        component={ LocationScreen }
        options={{ title: 'Comunas' }}
      />
      <LocationStack.Screen
        name='Search'
        component={ SearchScreen }
        options={{ title: 'Buscar' }}
      />
    </LocationStack.Navigator>
  );
}

function LocationScreen() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Location!</Text>
      <Button 
        title="Buscar"
        onPress={() => navigation.navigate('Search')}>Buscar</Button>
    </View>
  );
}

function SearchScreen() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  )
}
