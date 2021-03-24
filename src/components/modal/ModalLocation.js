import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

const ModalLocation = (props) => {
  const { visible, setVisible } = props;
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={()=> setVisible(false)} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default ModalLocation;
