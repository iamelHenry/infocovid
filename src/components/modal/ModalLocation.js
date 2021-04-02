import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { FaseCard, LocationCardItem, ImageCard } from '../card/Card';
import LocationCasesChart from '../chart/Chart';
import { updateFav } from '../../services/Storage';

const ModalLocation = (props) => {
  const { visible, setVisible, locationSelected } = props;
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const setFav = (key) => {
    updateFav(key);
  }

  if (!locationSelected) return null;
  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={()=> setVisible(false)} contentContainerStyle={containerStyle}>
          <FaseCard phase={locationSelected.stepByStepPlan.phase}/>
          <LocationCardItem
            options={{ title: 'Cifras',
              subtitle: locationSelected.name,
              content: {
                headers: ['activos', 'nuevos', 'incidencia actual'],
                data: [[locationSelected.activeCases.cases,
                  locationSelected.newCases.cases,
                  locationSelected.incidence.rate]],
              }
            }}
            onPressFav={() => setFav(locationSelected.code)}
          />
        </Modal>
      </Portal>
    </Provider>
  );
};

export default ModalLocation;
