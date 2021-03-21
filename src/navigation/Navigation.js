import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabsNavigation from './TabsNavigation';

const RootStack = createStackNavigator();

export default function Navigation() {
  return (
    <TabsNavigation>
    </TabsNavigation>
  );
}
