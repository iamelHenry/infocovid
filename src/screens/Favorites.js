import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { LocationCardItem } from '../components/card/Card';

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
      </ScrollView>
      <ModalLocation visible={showModal} setVisible={setShowModal} />
    </>
  );
}
