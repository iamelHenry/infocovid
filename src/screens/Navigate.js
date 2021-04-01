import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { List , Text} from 'react-native-paper';
import { ScrollView } from 'react-native';
import { getNavigationRegions, getNavigationLocations, getLocationById } from '../services/Api';
import ModalLocation from '../components/modal/ModalLocation';

const NavigateStack = createStackNavigator();

export default function NavigateScreenStack() {
  return (
    <NavigateStack.Navigator>
      <NavigateStack.Screen name="Regiones" component={ NavigateScreen }>
      </NavigateStack.Screen>
    </NavigateStack.Navigator>
  );
}

function NavigateScreen() {
  const [expanded, setExpanded] = React.useState(true);
  const [region, setRegion] = React.useState(null);
  const [locations, setLocation] = React.useState(null);
  const [showModal, setShowModal] = React.useState(true);
  const [modalLocation, setModalLocation] = React.useState(null);
  const locationModal = (locationId) => {
    getLocationById(locationId)
      .then((response) => {
        if(response.data.length > 0)
        setModalLocation(response.data.pop())
      })
  };

  React.useEffect(() => {
    setShowModal(true);
  }, [modalLocation]);

  React.useEffect(() => {
    getNavigationRegions().then((response) => {
      setRegion(response.data);
    });
  }, []);

  if (!region) return null;

  return(
    <>
    <ScrollView>
      <List.Section title="Regiones de chile">
        <List.Subheader>Casos activos</List.Subheader>
        { region['Casos nuevos totales'].map((data, {regionCases=` Nuevos ${data.cases} `}) => {
            let totalCases = region['Casos acumulados'].filter(e => e.name === data.name).pop();
            let cases = { region: regionCases, total: " Total " + totalCases.cases};
            return(
              <List.Accordion
                title={data.name}
                description={<Text style={{ alignItems:"center", display:"flex", justifyContent:"space-between", flexDirection:"column" }}><Text>{cases.region}</Text><Text>{cases.total}</Text></Text>}
                key={data.name}
                onPress={()=>loadRegion(data.name, setLocation)}
                left={props => <List.Icon {...props} icon="map-search" />}
                descriptionStyle={{ direction:"rtl" }}
              >
              {!locations ? null : locations
                .map((item, {locationCases=`${item.cases} Casos Confirmados`}) => (
                  <List.Item
                    title={item.name}
                    key={item.code}
                    description={locationCases}
                    left={props => <List.Icon {...props}
                      icon="eye"
                      style={{ marginLeft: '10%' }} />}
                    onPress={()=>{locationModal(item.code)}}
                  />)
                )}
              </List.Accordion>)
          })
        }
      </List.Section>
    </ScrollView>
    <ModalLocation visible={showModal} setVisible={setShowModal} locationSelected={modalLocation} />
    </>
  );
}

const loadRegion = async(name, setLocation) => {
  getNavigationLocations(name).then((response) => {
    setLocation(response.data);
  });
}
