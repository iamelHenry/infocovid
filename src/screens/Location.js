import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { LocationCardItem } from '../components/card/Card';
import ModalLocation, { showModalLocation } from '../components/modal/ModalLocation';

const LocationStack = createStackNavigator();

export default function LocationScreenStack() {
  return (
    <LocationStack.Navigator>
      <LocationStack.Screen
        name='Comunas'
      >{props=> <LocationScreen {...props}
                    options={{ title: 'Lo Prado' }} />}
      </LocationStack.Screen>
      <LocationStack.Screen
        name='Search'
        component={ SearchScreen }
        options={{ title: 'Buscar' }}
      />
    </LocationStack.Navigator>
  );
}

function LocationScreen({ options }) {
  const [showModal, setShowModal] = React.useState(false);
  return(
    <>
      <ScrollView>
        <LocationCardItem
          options={{
            title: options.title,
            subtitle: 'plan paso a paso : fase 1',
            content: {
              headers: ['casos total', 'casos hoy'],
              data: [[11,12]],
            },
            footer: 'actualizado el 12-12-12'
          }}
          onPress={()=> setShowModal(true)}
        />
        <LocationCardItem
          options={{
            title: 'quilicura',
            subtitle: 'plan paso a paso : fase 1',
            content: {
              headers: ['casos total', 'casos hoy'],
              data: [[11,12]],
            },
            footer: 'actualizado el 12-12-12'
          }}
        />
      </ScrollView>
      <ModalLocation visible={showModal} setVisible={setShowModal} />
    </>
  );
}

function SearchScreen() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}
