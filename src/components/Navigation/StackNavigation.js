import * as React from 'react';
import { Button, View,Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Spinner from 'react-native-loading-spinner-overlay';
import {useSelector} from 'react-redux';
//screens
import CustomerOption from '../CustomerOption'
import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';
import Home from '../../screens/Home';

//icons
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Stack = createNativeStackNavigator();

function MyStack() {
  const {authLoading, userToken} = useSelector(state => state.authState);
  console.log(userToken)
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
        headerShown:false,

    }}>
        {userToken ? (
       <Stack.Screen 
       options={{
        headerShown:true,
        header:()=>(
          <View style={{backgroundColor:"#c79248",paddingHorizontal:10,flexDirection:"row",justifyContent:"space-between" }}>
            <View style={{flexDirection:"row"}}>
              <Pressable>
            <Entypo name='list'size={35} color={"white"}  />
            </Pressable>
            <Image style={{height:40,width:130,marginTop:5}} source={require('../../../assets/Images/Raging-Gold.png')}/>
            </View>
            <Pressable>
              <AntDesign name='search1' size={30} color="white"/>
            </Pressable>
          </View>
        )
      }}
       name="Home" 
       component={Home} />
       ) : (
        <>
      <Stack.Screen name="CustomerOption" component={CustomerOption} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen
       name="SignUp" component={SignUp} />
      </>
      )}
    </Stack.Navigator>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
