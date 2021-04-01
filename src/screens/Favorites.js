import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView } from 'react-native';
import { LocationCardItem } from '../components/card/Card';
import ModalLocation from '../components/modal/ModalLocation';

const FavoriteStack = createStackNavigator();

export default function FavoriteScreenStack() {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen name="Favorites">
      {props=> <FavoriteScreen />}
      </FavoriteStack.Screen>
    </FavoriteStack.Navigator>
  );
}

function FavoriteScreen() {
  const [showModal, setShowModal] = React.useState(false);
  return(
    <>
      <ScrollView>
        <LocationCardItem
          options={{
            title: 'test',
            subtitle: 'plan paso a paso : fase 1',
            content: {
              headers: ['casos total', 'casos hoy'],
              data: [[11,12]],
            },
            footer: 'actualizado el 12-12-12'
          }}
          onPress={()=> setShowModal(true)}
        />
      </ScrollView>
      <ModalLocation visible={showModal} setVisible={setShowModal} />
    </>
  );
}
