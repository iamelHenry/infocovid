import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { List , Text} from 'react-native-paper';

const NavigateStack = createStackNavigator();

export default function NavigateScreenStack() {
  return (
    <NavigateStack.Navigator>
      <NavigateStack.Screen name="Navigate" component={ NavigateScreen }>
      </NavigateStack.Screen>
    </NavigateStack.Navigator>
  );
}

function NavigateScreen() {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  return(
    <List.Section title="Regiones de chile">
      <List.Subheader>Casos activos</List.Subheader>
      <List.Accordion
        title="Region 1"
        description="12 Casos"
        left={props => <List.Icon {...props} icon="map-search" />}
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item
          title="First item"
          description="1234 Casos"
          left={props => <List.Icon {...props} icon="eye" style={{ marginLeft: '10%' }} />}
        />
        <List.Item title="Second item"/>
      </List.Accordion>

      <List.Accordion
        title="Region 2"
        left={props => <List.Icon {...props} icon="map-search" />}
      >
        <List.Item title="First item"/>
        <List.Item title="Second item"/>
      </List.Accordion>
    </List.Section>
  );
}
