import * as React from 'react';
import {Button, View, Image, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductList from '../../screens/ProductList';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import CustomHeader from '../Custom/CustomHeader';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//screen
import Home from '../../screens/Home';
import ProductDetail from '../../screens/ProductDetail';
import OrderHistory from '../../screens/OrderHistory';
import MyInvoice from '../../screens/MyInvoice';
import Checkout from '../../screens/Checkout';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// const AllProductScreens=()=>{
//   return(
//     <Stack.Navigator>
//     <Stack.Screen
//       options={{
//         headerShown: true,
//         header: () => (
//           <CustomHeader/>
//         ),
//       }}
//       name="Home"
//       component={Home}
//     />

//     <Stack.Screen name="Drewer" component={DrawerNavigation} />

//     <Stack.Screen
//       options={{
//         headerShown: true,
//         header: () => (
//           <CustomHeader/>
//         ),
//       }}
//       name="ProductList"
//       component={ProductList}
//     />

//     <Stack.Screen
//       options={{
//         headerShown: true,
//         header: () => (
//           <CustomHeader/>
//         ),
//       }}
//       name="ProductDetail"
//       component={ProductDetail}
//     />

//     <Stack.Screen
//       options={{
//         headerShown: true,
//         header: () => (
//           <CustomHeader/>
//         ),
//       }}
//       name="OrderHistory"
//       component={OrderHistory}
//     />

//     <Stack.Screen
//       options={{
//         headerShown: true,
//         header: () => (
//           <CustomHeader/>
//         ),
//       }}
//       name="MyInvoice"
//       component={MyInvoice}
//     />

//     <Stack.Screen
//       options={{
//         headerShown: true,
//         header: () => (
//           <CustomHeader/>
//         ),
//       }}
//       name="Checkout"
//       component={Checkout}
//     />
//   </Stack.Navigator>
//   );
// }

export default function DrawerNavigation() {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={BottomNavigation} />
      {/* <Drawer.Screen name="AllProductScreens" component={AllProductScreens} /> */}
    </Drawer.Navigator>
  );
}
