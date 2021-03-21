import React from 'react';

import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenStack from '../screens/Home';
import NavigateScreenStack from '../screens/Navigate';
import LocationScreenStack from '../screens/Location';
import FavoriteScreenStack from '../screens/Favorites';

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={ HomeScreenStack }
        />
      <Tab.Screen name="Navegar" component={ NavigateScreenStack } />
      <Tab.Screen name="Comuna" component={ LocationScreenStack } />
      <Tab.Screen name="Favoritos" component={ FavoriteScreenStack } />
    </Tab.Navigator>
  );
};
