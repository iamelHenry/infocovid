import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { FaseCard, LocationCardItem, ImageCard } from '../card/Card';
import LocationCasesChart from '../chart/Chart';

const ModalLocation = (props) => {
  const { visible, setVisible } = props;
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={()=> setVisible(false)} contentContainerStyle={containerStyle}>
          <FaseCard />
          <LocationCardItem
            options={{ title: 'Cifras',
              subtitle: 'casos' ,
              content: {
                headers: ['total', 'hoy', 'incidencia'],
                data: [[11,12,'90']],
              }
            }}
          />
          <LocationCasesChart/>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default ModalLocation;
