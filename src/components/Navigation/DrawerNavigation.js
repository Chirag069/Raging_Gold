import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductList from '../../screens/ProductList';



const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (

      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="ProductList" component={ProductList} />
      </Drawer.Navigator>

  );
}
