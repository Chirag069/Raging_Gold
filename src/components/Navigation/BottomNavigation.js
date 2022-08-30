import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DrawerActions} from '@react-navigation/native';
import {Input, NativeBaseProvider} from 'native-base';
import {Button} from 'react-native-paper';
import {useKeyboard} from '@react-native-community/hooks';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//screen
import Home from '../../screens/Home';
import Filter from '../../screens/Filter';
import Cart from '../../screens/Cart';
import WishList from '../../screens/WishList';
import DrawerNavigation from './DrawerNavigation';
import ProductList from '../../screens/ProductList';
import ProductDetail from '../../screens/ProductDetail';
import Checkout from '../../screens/Checkout';
import CustomHeader from '../Custom/CustomHeader';
//icon
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderHistory from '../../screens/OrderHistory';
import MyInvoice from '../../screens/MyInvoice';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <CustomHeader/>
          ),
        }}
        name="Home"
        component={Home}
      />

      <Stack.Screen name="Drewer" component={DrawerNavigation} />

      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <CustomHeader/>
          ),
        }}
        name="ProductList"
        component={ProductList}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <CustomHeader/>
          ),
        }}
        name="ProductDetail"
        component={ProductDetail}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <CustomHeader/>
          ),
        }}
        name="OrderHistory"
        component={OrderHistory}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <CustomHeader/>
          ),
        }}
        name="MyInvoice"
        component={MyInvoice}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <CustomHeader/>
          ),
        }}
        name="Checkout"
        component={Checkout}
      />
    </Stack.Navigator>
  );
};

function BottomNavigation() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#c79248',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={25}
              color={color}
            />
          ),
        }}
        name="HomeStack"
        component={HomeStack}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name={focused ? 'filter' : 'filter-outline'}
              size={25}
              color={color}
            />
          ),
          headerShown: true,
          header: () => (
            <CustomHeader/>
          ),
        }}
        name="Filter"
        component={Filter}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <AntDesign
              name={focused ? 'heart' : 'hearto'}
              size={25}
              color={color}
            />
          ),
          headerShown: true,
          header: () => (
            <CustomHeader/>
          ),
        }}
        name="WishList"
        component={WishList}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={25}
              color={color}
            />
          ),
          headerShown: true,
          header: () => (
            <CustomHeader/>
          ),
        }}
        name="Cart"
        component={Cart}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default () => {
  return (
    <NativeBaseProvider>
      <BottomNavigation />
    </NativeBaseProvider>
  );
};
