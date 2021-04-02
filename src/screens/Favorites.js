import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView } from 'react-native';
import { LocationCardItem } from '../components/card/Card';
import ModalLocation from '../components/modal/ModalLocation';
import { getFav, updateFav } from '../services/Storage';
import { getLocationById } from '../services/Api';

const FavoriteStack = createStackNavigator();

export default function FavoriteScreenStack() {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen name="Favorites">
      {props=> <FavoriteScreen {...props} key="screen"/>}
      </FavoriteStack.Screen>
    </FavoriteStack.Navigator>
  );
}

function FavoriteScreen({ navigation }) {
  const [showModal, setShowModal] = React.useState(false);
  const [favLocations, setFavLocations] = React.useState(null);

  const setFav = (key) => {
    updateFav(key);
    setFavLocations(favLocations.filter(data => data.code !== key));
  }
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getFav().then((favList) => {
        getLocationById(favList)
          .then((locationList) => setFavLocations(locationList.data))
      });
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  if (!favLocations) return null;
  return(
    <>
      <ScrollView>
        {
          favLocations.map(({name, code, stepByStepPlan, activeCases, newCases }) => {
            const subtitle = `Etapa plan paso a paso : ${stepByStepPlan.phase}`;
            const lastUpdate = `Actualizado el ${activeCases.lastUpdate}`;
            const key = `fav-${code}`;
            return (
            <LocationCardItem
              options={{
                key: {key},
                isFav: true,
                title: name,
                subtitle: subtitle,
                content: {
                  headers: ['casos activos', 'casos nuevos'],
                  data: [[activeCases.cases, newCases.cases]],
                },
                footer: lastUpdate
              }}
              onPress={()=> setShowModal(true)}
              onPressFav={() => setFav(code)}
            />
            )
          })
        }
      </ScrollView>
      <ModalLocation visible={showModal} setVisible={setShowModal} />
    </>
  );
}
