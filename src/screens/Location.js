import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { View, Button, ScrollView } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';
import { LocationCardItem } from '../components/card/Card';
import ModalLocation from '../components/modal/ModalLocation';
import { getLocations } from '../services/Api';
import LoaderSpinner from '../components/indicator/LoaderSpinner';

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
  const pageSize = 10;
  const [showModal, setShowModal] = React.useState(false);
  const [locations, setLocations] = React.useState(null);
  const [locationSelected, selectLocation] = React.useState(null);
  const [items, setItems] = React.useState(locations);
  const [page, setPage] = React.useState(1);
  React.useEffect(()=>{
    if(locations) {
      setItems(locations.slice(0, page * pageSize));
    }
  }, [page]);
  React.useEffect(() => {
    getLocations().then((response) => {
      setLocations(response.data);
      setItems(response.data.slice(0, page * pageSize));
    });
  }, []);

  if (!locations) return (<View><LoaderSpinner /></View>);
  if (!locations) return null;
  if (!items) return null;

  return(
    <>
      <ScrollView
        onScroll={({nativeEvent}) => {
          const position = nativeEvent.contentOffset.y;
          const size = nativeEvent.layoutMeasurement.height;
          const height = nativeEvent.contentSize.height;
          if ((height - size) < (position + size))
          {
            if((page * pageSize) < locations.length) {
              setPage(page + 1);
            }
          }
        }}
      >
        { items.map((data) => {
          const key = `location-${data.code}`;
          const subtitle = `Etapa plan paso a paso : ${data.stepByStepPlan.phase}`;
          const lastUpdate = `Actualizado el ${data.activeCases.lastUpdate}`;
          return(
            <LocationCardItem
              key={key}
              options={{
                title: data.name,
                subtitle: subtitle,
                content: {
                  headers: ['casos activos', 'casos nuevos'],
                  data: [[data.activeCases.cases, data.newCases.cases]],
                },
                footer: lastUpdate
              }}
              onPress={()=> {setShowModal(true); selectLocation(data)}}
            />
          );
        })}
      </ScrollView>
      <ModalLocation visible={showModal} setVisible={setShowModal} locationSelected={locationSelected} />
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
