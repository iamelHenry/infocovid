import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, View, Text } from 'react-native';
import { TableCardComponent } from '../components/card/Card';

const HomeStack = createStackNavigator();

export default function HomeScreenStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={ HomeScreen }>
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

function HomeScreen() {
  return(
    <ScrollView>
      <TableCardComponent
        options={{
          title: 'Casos de contagio',
          content: {
            headers: ['Casos Activos', 'Recuperados', 'Total de Casos'],
            data: [[10,11,12]],
            footer: 'actualizado el 22-mar-2021'
          },
        }}
      />

      <TableCardComponent
        options={{
          title: 'Casos diarios : 6155',
          content: {
            headers: ['con sintomas', 'asintomaticos', 'no informados'],
            data: [[ 4142, 1547, 466]],
            footer: 'actualizado el 22-03-2021'
          }
        }}
      />

      <TableCardComponent
        options={{
          title: 'Personas fallecidas',
          content: {
            headers: ['Nuevos fallecidos', 'Total personas fallecidas'],
            data: [[11, 12]],
            footer: 'actualizado el 22-03-2021'
          }
        }}
      />

    </ScrollView>
  );
}
