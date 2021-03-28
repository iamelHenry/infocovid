import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, View, Text } from 'react-native';
import { TableCardComponent } from '../components/card/Card';
import getHomeReport from '../services/Api';

const HomeStack = createStackNavigator();

export default function HomeScreenStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Cifras Oficiales" component={ HomeScreen }>
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

function HomeScreen() {
  const [report, setReport] = React.useState(null);
  React.useEffect(() => {
    getHomeReport().then((response) => {
      setReport(response.data);
    });
  }, []);

  if (!report) return null;

  return(
    <ScrollView>
      <TableCardComponent
        options={{
          title: 'Casos de contagio',
          content: {
            headers: ['Casos Activos', 'Recuperados', 'Total de Casos'],
            data: [[report.totalCases.active,report.totalCases.recovered,report.totalCases.total]],
            footer: `Actualizado el ${report.totalCases.lastUpdate}`
          },
        }}
      />

      <TableCardComponent
        options={{
          title: `Casos diarios : ${report.dailyCases.total}`,
          content: {
            headers: ['con sintomas', 'asintomaticos', 'no informados'],
            data: [[report.dailyCases.symptomatic, report.dailyCases.asymptomatic, report.dailyCases.ni]],
            footer: `Actualizado el ${report.dailyCases.lastUpdate}`
          }
        }}
      />

      <TableCardComponent
        options={{
          title: 'Personas fallecidas',
          content: {
            headers: ['Nuevos fallecidos', 'Total personas fallecidas'],
            data: [[report.deceased.latests, report.deceased.total]],
            footer: `Actualizado el ${report.deceased.lastUpdate}`
          }
        }}
      />

    </ScrollView>
  );
}
