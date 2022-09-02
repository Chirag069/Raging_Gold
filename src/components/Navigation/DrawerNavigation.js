import * as React from 'react';
import {} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

//screen
import Home from '../../screens/Home';
import ProductDetail from '../../screens/ProductDetail';
import OrderHistory from '../../screens/OrderHistory';
import MyInvoice from '../../screens/MyInvoice';
import Checkout from '../../screens/Checkout';
import CustomHeader from '../Custom/CustomHeader';
import BottomNavigation from './BottomNavigation';
import ProductList from '../../screens/ProductList';
import CustomDrawer from '../Custom/CustomDrawer';
//icon
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import WishList from '../../screens/WishList';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AllProductScreens = () => {
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
    </Stack.Navigator>
  );
};

export default function DrawerNavigation() {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerItemStyle: {
          marginVertical:  scale(0),
          marginHorizontal:  scale(0),
          padding:  scale(0),
          borderRadius: scale(0),
          borderBottomColor: 'lightgrey',
          borderBottomWidth: scale(1),
          
        },
        drawerActiveBackgroundColor: 'white',
        drawerInactiveBackgroundColor: 'white',
        drawerActiveTintColor: '#333',
        drawerInactiveTintColor: '#333',
        drawerStyle: {},
        drawerLabelStyle: {},
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={BottomNavigation} />
      <Drawer.Screen name="Our Collections" component={ProductList} />
      <Drawer.Screen name="Wish List" component={WishList} />
    </Drawer.Navigator>
  );
}
