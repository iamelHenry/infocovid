import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { FaseCard, LocationCardItem, ImageCard } from '../card/Card';
import LocationCasesChart from '../chart/Chart';

const ModalLocation = (props) => {
  const { visible, setVisible, locationSelected } = props;
  const containerStyle = {backgroundColor: 'white', padding: 20};

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
                headers: ['activos', 'nuevos', 'incidencia'],
                data: [[locationSelected.activeCases.cases,
                  locationSelected.newCases.cases,'90']],
              }
            }}
          />
        </Modal>
      </Portal>
    </Provider>
  );
};

export default ModalLocation;
