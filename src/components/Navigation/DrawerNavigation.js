import * as React from 'react';
import {Button, View, Image, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductList from '../../screens/ProductList';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={BottomNavigation} />
      <Drawer.Screen
        options={{
          headerShown: true,
          header: () => (
            <View
              style={{
                backgroundColor: '#c79248',
                paddingHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }>
                  <Entypo name="list" size={35} color={'white'} />
                </TouchableOpacity>
                <Image
                  style={{height: 40, width: 130, marginTop: 5}}
                  source={require('../../../assets/Images/Raging-Gold.png')}
                />
              </View>
              <TouchableOpacity>
                <AntDesign name="search1" size={30} color="white" />
              </TouchableOpacity>
            </View>
          ),
        }}
        name="ProductList"
        component={ProductList}
      />
    </Drawer.Navigator>
  );
}
