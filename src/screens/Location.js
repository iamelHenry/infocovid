import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { View, Button, ScrollView, Platform, AsyncStorage } from 'react-native';
import { Searchbar } from 'react-native-paper';
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
      >{props=> <LocationScreen {...props} />}
      </LocationStack.Screen>
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
  const [search, setSearch] = React.useState('');
  const [favList, setFavList] = React.useState([]);
  const setFav = (key) => {
    updateFav(key);
  }
  React.useEffect(()=>{
    getFav().then((result) => {
      if(result) {
        console.log('result', result)
        setFavList(result.split(','));
      }
    })
  },[]);

  React.useEffect(() => {
    if (search.length > 2) {
      setItems(
      locations.filter((v) => {
        return v.name.toLowerCase().includes(search.toLowerCase())
      })
    );
    }
  }, [search]);


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
            if(((page * pageSize) < locations.length) && search === '') {
              setPage(page + 1);
            }
          }
        }}
      >
      <Searchbar
        placeholder="Busca tu comuna"
        icon="arrow-left"
        onChangeText={(e) => setSearch(e)}
        onIconPress={() => {setSearch(''); setItems(locations.splice(0,pageSize))}}
        value={search}
      />
        { items.map((data) => {
          const key = `location-${data.code}`;
          const subtitle = `Etapa plan paso a paso : ${data.stepByStepPlan.phase}`;
          const lastUpdate = `Actualizado el ${data.activeCases.lastUpdate}`;
          const isFav = favList.includes(data.code);
          return(
            <LocationCardItem
              options={{
                key: key,
                isFav: isFav,
                title: data.name,
                subtitle: subtitle,
                content: {
                  headers: ['casos activos', 'casos nuevos'],
                  data: [[data.activeCases.cases, data.newCases.cases]],
                },
                footer: lastUpdate
              }}
              onPress={()=> {setShowModal(true); selectLocation(data)}}
              onPressFav={() => setFav(data.code)}
            />
          );
        })}
      </ScrollView>
      <ModalLocation visible={showModal} setVisible={setShowModal} locationSelected={locationSelected} />
    </>
  );
}

const updateFav = async(id) => {
  try {
    const item = '@infocovid:fav';
    let favorites = await getFav();
    let favList = favorites?.split(',') || [];
    if (favList.includes(id)) {
      favList = favList.filter(el => el != id)
    } else {
      favList.push(id);
    }
    await AsyncStorage.setItem(
      item,
      favList.join());
  } catch (error) {
    console.error(error);
  }
}

const getFav = async() => {
  try {
    const item = '@infocovid:fav';
    const result = await AsyncStorage.getItem(item);
    return result;
  } catch (error) {
    console.error(error);
  }
}
