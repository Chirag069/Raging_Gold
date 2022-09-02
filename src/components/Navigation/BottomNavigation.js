import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Input, NativeBaseProvider} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

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
import OrderHistory from '../../screens/OrderHistory';
import MyInvoice from '../../screens/MyInvoice';
import Profile from '../../screens/Profile';
import ProfileHeader from '../Custom/ProfileHeader';
//icon
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <CustomHeader />,
        }}
        name="Home"
        component={Home}
      />

      <Stack.Screen name="Drewer" component={DrawerNavigation} />

      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <CustomHeader />,
        }}
        name="ProductList"
        component={ProductList}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <CustomHeader />,
        }}
        name="ProductDetail"
        component={ProductDetail}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <CustomHeader />,
        }}
        name="OrderHistory"
        component={OrderHistory}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <CustomHeader />,
        }}
        name="MyInvoice"
        component={MyInvoice}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <CustomHeader />,
        }}
        name="Checkout"
        component={Checkout}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          header: () => <ProfileHeader/>
        }}
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
};

function BottomNavigation() {
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
          header: () => <CustomHeader />,
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
          header: () => <CustomHeader />,
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
          header: () => <CustomHeader />,
        }}
        name="Cart"
        component={Cart}
      />
    </Tab.Navigator>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <BottomNavigation />
    </NativeBaseProvider>
  );
};
