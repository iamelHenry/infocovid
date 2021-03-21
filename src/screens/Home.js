import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, View, Text } from 'react-native';
import TotalCaseCardComponent, { TableCardComponent } from '../components/card/Card';

const HomeStack = createStackNavigator();

export default function HomeScreenStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={ HomeScreen }>
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

function HomeScreen() {
  const extraData='test';
  return(
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Text>
        Do est magna velit tempor id deserunt tempor in sit fugiat ad velit irure labore reprehenderit sit laborum ut duis ad deserunt enim anim ullamco aliquip ut quis ad cupidatat duis eiusmod quis voluptate amet veniam cillum dolor laboris in in aute est incididunt sint ad nostrud qui sit sint elit exercitation in esse excepteur eiusmod exercitation in officia nostrud laboris dolore voluptate nisi nisi veniam ex officia quis elit excepteur nulla esse sit duis nostrud culpa laborum irure adipisicing elit anim ut excepteur enim consequat consequat irure nulla qui in sed labore dolore eu sit ut fugiat et sed ea proident adipisicing cupidatat ut magna cupidatat qui in cillum occaecat ad in esse in dolore dolore dolor commodo minim veniam dolore fugiat ex ea nisi fugiat pariatur elit et in laboris adipisicing nisi sit fugiat sit in proident proident pariatur mollit sunt enim elit id quis laboris qui sit tempor sed in commodo pariatur quis mollit voluptate magna incididunt consectetur laboris est occaecat ullamco veniam nostrud proident ex laboris cillum dolore ut dolore in et minim non minim proident minim mollit quis adipisicing aute amet in sint culpa proident laboris cillum aliqua excepteur qui in cupidatat ex sit voluptate ullamco eu excepteur est ex est do ex nulla aute ut laboris est est ex fugiat esse eu ut irure qui laborum aute ut officia aute ad ut laborum in in enim irure dolor proident eiusmod cupidatat sed velit sint consectetur eu do aliquip veniam ex qui aliquip incididunt ex sunt voluptate dolore reprehenderit quis aute aliquip elit excepteur fugiat elit proident commodo sed.
        </Text>
        <Text>
        Do est magna velit tempor id deserunt tempor in sit fugiat ad velit irure labore reprehenderit sit laborum ut duis ad deserunt enim anim ullamco aliquip ut quis ad cupidatat duis eiusmod quis voluptate amet veniam cillum dolor laboris in in aute est incididunt sint ad nostrud qui sit sint elit exercitation in esse excepteur eiusmod exercitation in officia nostrud laboris dolore voluptate nisi nisi veniam ex officia quis elit excepteur nulla esse sit duis nostrud culpa laborum irure adipisicing elit anim ut excepteur enim consequat consequat irure nulla qui in sed labore dolore eu sit ut fugiat et sed ea proident adipisicing cupidatat ut magna cupidatat qui in cillum occaecat ad in esse in dolore dolore dolor commodo minim veniam dolore fugiat ex ea nisi fugiat pariatur elit et in laboris adipisicing nisi sit fugiat sit in proident proident pariatur mollit sunt enim elit id quis laboris qui sit tempor sed in commodo pariatur quis mollit voluptate magna incididunt consectetur laboris est occaecat ullamco veniam nostrud proident ex laboris cillum dolore ut dolore in et minim non minim proident minim mollit quis adipisicing aute amet in sint culpa proident laboris cillum aliqua excepteur qui in cupidatat ex sit voluptate ullamco eu excepteur est ex est do ex nulla aute ut laboris est est ex fugiat esse eu ut irure qui laborum aute ut officia aute ad ut laborum in in enim irure dolor proident eiusmod cupidatat sed velit sint consectetur eu do aliquip veniam ex qui aliquip incididunt ex sunt voluptate dolore reprehenderit quis aute aliquip elit excepteur fugiat elit proident commodo sed.
        </Text>
        <Text>
        Do est magna velit tempor id deserunt tempor in sit fugiat ad velit irure labore reprehenderit sit laborum ut duis ad deserunt enim anim ullamco aliquip ut quis ad cupidatat duis eiusmod quis voluptate amet veniam cillum dolor laboris in in aute est incididunt sint ad nostrud qui sit sint elit exercitation in esse excepteur eiusmod exercitation in officia nostrud laboris dolore voluptate nisi nisi veniam ex officia quis elit excepteur nulla esse sit duis nostrud culpa laborum irure adipisicing elit anim ut excepteur enim consequat consequat irure nulla qui in sed labore dolore eu sit ut fugiat et sed ea proident adipisicing cupidatat ut magna cupidatat qui in cillum occaecat ad in esse in dolore dolore dolor commodo minim veniam dolore fugiat ex ea nisi fugiat pariatur elit et in laboris adipisicing nisi sit fugiat sit in proident proident pariatur mollit sunt enim elit id quis laboris qui sit tempor sed in commodo pariatur quis mollit voluptate magna incididunt consectetur laboris est occaecat ullamco veniam nostrud proident ex laboris cillum dolore ut dolore in et minim non minim proident minim mollit quis adipisicing aute amet in sint culpa proident laboris cillum aliqua excepteur qui in cupidatat ex sit voluptate ullamco eu excepteur est ex est do ex nulla aute ut laboris est est ex fugiat esse eu ut irure qui laborum aute ut officia aute ad ut laborum in in enim irure dolor proident eiusmod cupidatat sed velit sint consectetur eu do aliquip veniam ex qui aliquip incididunt ex sunt voluptate dolore reprehenderit quis aute aliquip elit excepteur fugiat elit proident commodo sed.
        </Text>
        <Text>
        Do est magna velit tempor id deserunt tempor in sit fugiat ad velit irure labore reprehenderit sit laborum ut duis ad deserunt enim anim ullamco aliquip ut quis ad cupidatat duis eiusmod quis voluptate amet veniam cillum dolor laboris in in aute est incididunt sint ad nostrud qui sit sint elit exercitation in esse excepteur eiusmod exercitation in officia nostrud laboris dolore voluptate nisi nisi veniam ex officia quis elit excepteur nulla esse sit duis nostrud culpa laborum irure adipisicing elit anim ut excepteur enim consequat consequat irure nulla qui in sed labore dolore eu sit ut fugiat et sed ea proident adipisicing cupidatat ut magna cupidatat qui in cillum occaecat ad in esse in dolore dolore dolor commodo minim veniam dolore fugiat ex ea nisi fugiat pariatur elit et in laboris adipisicing nisi sit fugiat sit in proident proident pariatur mollit sunt enim elit id quis laboris qui sit tempor sed in commodo pariatur quis mollit voluptate magna incididunt consectetur laboris est occaecat ullamco veniam nostrud proident ex laboris cillum dolore ut dolore in et minim non minim proident minim mollit quis adipisicing aute amet in sint culpa proident laboris cillum aliqua excepteur qui in cupidatat ex sit voluptate ullamco eu excepteur est ex est do ex nulla aute ut laboris est est ex fugiat esse eu ut irure qui laborum aute ut officia aute ad ut laborum in in enim irure dolor proident eiusmod cupidatat sed velit sint consectetur eu do aliquip veniam ex qui aliquip incididunt ex sunt voluptate dolore reprehenderit quis aute aliquip elit excepteur fugiat elit proident commodo sed.
        </Text>
        <Text>
        Do est magna velit tempor id deserunt tempor in sit fugiat ad velit irure labore reprehenderit sit laborum ut duis ad deserunt enim anim ullamco aliquip ut quis ad cupidatat duis eiusmod quis voluptate amet veniam cillum dolor laboris in in aute est incididunt sint ad nostrud qui sit sint elit exercitation in esse excepteur eiusmod exercitation in officia nostrud laboris dolore voluptate nisi nisi veniam ex officia quis elit excepteur nulla esse sit duis nostrud culpa laborum irure adipisicing elit anim ut excepteur enim consequat consequat irure nulla qui in sed labore dolore eu sit ut fugiat et sed ea proident adipisicing cupidatat ut magna cupidatat qui in cillum occaecat ad in esse in dolore dolore dolor commodo minim veniam dolore fugiat ex ea nisi fugiat pariatur elit et in laboris adipisicing nisi sit fugiat sit in proident proident pariatur mollit sunt enim elit id quis laboris qui sit tempor sed in commodo pariatur quis mollit voluptate magna incididunt consectetur laboris est occaecat ullamco veniam nostrud proident ex laboris cillum dolore ut dolore in et minim non minim proident minim mollit quis adipisicing aute amet in sint culpa proident laboris cillum aliqua excepteur qui in cupidatat ex sit voluptate ullamco eu excepteur est ex est do ex nulla aute ut laboris est est ex fugiat esse eu ut irure qui laborum aute ut officia aute ad ut laborum in in enim irure dolor proident eiusmod cupidatat sed velit sint consectetur eu do aliquip veniam ex qui aliquip incididunt ex sunt voluptate dolore reprehenderit quis aute aliquip elit excepteur fugiat elit proident commodo sed.
        </Text>
        <Text>
        Do est magna velit tempor id deserunt tempor in sit fugiat ad velit irure labore reprehenderit sit laborum ut duis ad deserunt enim anim ullamco aliquip ut quis ad cupidatat duis eiusmod quis voluptate amet veniam cillum dolor laboris in in aute est incididunt sint ad nostrud qui sit sint elit exercitation in esse excepteur eiusmod exercitation in officia nostrud laboris dolore voluptate nisi nisi veniam ex officia quis elit excepteur nulla esse sit duis nostrud culpa laborum irure adipisicing elit anim ut excepteur enim consequat consequat irure nulla qui in sed labore dolore eu sit ut fugiat et sed ea proident adipisicing cupidatat ut magna cupidatat qui in cillum occaecat ad in esse in dolore dolore dolor commodo minim veniam dolore fugiat ex ea nisi fugiat pariatur elit et in laboris adipisicing nisi sit fugiat sit in proident proident pariatur mollit sunt enim elit id quis laboris qui sit tempor sed in commodo pariatur quis mollit voluptate magna incididunt consectetur laboris est occaecat ullamco veniam nostrud proident ex laboris cillum dolore ut dolore in et minim non minim proident minim mollit quis adipisicing aute amet in sint culpa proident laboris cillum aliqua excepteur qui in cupidatat ex sit voluptate ullamco eu excepteur est ex est do ex nulla aute ut laboris est est ex fugiat esse eu ut irure qui laborum aute ut officia aute ad ut laborum in in enim irure dolor proident eiusmod cupidatat sed velit sint consectetur eu do aliquip veniam ex qui aliquip incididunt ex sunt voluptate dolore reprehenderit quis aute aliquip elit excepteur fugiat elit proident commodo sed.
        </Text>
      </View>
      <TableCardComponent
        options={{
          title: 'Casos',
          content: {
            headers: ['Casos Activos', 'Recuperados', 'Total de Casos'],
            data: [[10,11,12]] }
          }}
      />
      <TotalCaseCardComponent
        options={{ title: 'test2', content: 'mi contenido 2' }}
      />
    </ScrollView>
  );
}
