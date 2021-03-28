import React from 'react';

import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
        />
      <Tab.Screen
        name="Navegar"
        component={ NavigateScreenStack }
        options={{
          tabBarLabel: 'Regiones',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          )
        }}
        />
      <Tab.Screen
        name="Comuna"
        component={ LocationScreenStack }
        options={{
          tabBarLabel: 'Comuna',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker-radius" color={color} size={size} />
          )
        }}
        />
      <Tab.Screen
        name="Favoritos"
        component={ FavoriteScreenStack }
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star" color={color} size={size} />
          )
        }}
        />
    </Tab.Navigator>
  );
};
