import * as React from 'react';
import {Button, View, Image, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Spinner from 'react-native-loading-spinner-overlay';
import {useSelector} from 'react-redux';
import { DrawerActions, useNavigation } from '@react-navigation/native';

//screens
import CustomerOption from '../CustomerOption';
import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';
import Home from '../../screens/Home';
import ProductList from '../../screens/ProductList';
import ProductDetail from '../../screens/ProductDetail';
import Pagination from '../../screens/Pagination';
import BottomNavigation from './BottomNavigation';
import Checkout from '../../screens/Checkout';
import OrderHistory from '../../screens/OrderHistory';
import MyInvoice from '../../screens/MyInvoice';
import DrawerNavigation from './DrawerNavigation'
//icons
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();

function stackNavigation() {
  const {authLoading, userToken} = useSelector(state => state.authState);
  const navigation=useNavigation()
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Spinner
        visible={authLoading}
        textContent={'Loading...'}
        textStyle={{color: '#fff'}}
        overlayColor="rgba(0,0,0, 0.5)"
      />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {userToken ? (
          <>
            <Stack.Screen name="Bottom" component={BottomNavigation} />
            <Stack.Screen name="drawer" component={DrawerNavigation} />
            <Stack.Screen
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
                      <TouchableOpacity>
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
              name="Home"
              component={Home}
            />

            <Stack.Screen
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
                      <TouchableOpacity onPress={() => navigation.openDrawer()}>
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

            <Stack.Screen
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
                      <TouchableOpacity>
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
              name="ProductDetail"
              component={ProductDetail}
            />

            <Stack.Screen
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
                      <TouchableOpacity>
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
              name="Checkout"
              component={Checkout}
            />

            <Stack.Screen
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
                      <TouchableOpacity>
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
              name="OrderHistory"
              component={OrderHistory}
            />

            <Stack.Screen
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
                      <TouchableOpacity>
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
                name="MyInvoice"
              component={MyInvoice}
            />
            

          </>
        ) : (
          <>
            <Stack.Screen name="CustomerOption" component={CustomerOption} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </View>
  );
}

export default stackNavigation;
