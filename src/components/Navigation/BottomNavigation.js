import * as React from 'react';
import { Text, View,Pressable ,Image} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screen
import Home from '../../screens/Home';
import Filter from '../../screens/Filter';
import Cart from '../../screens/Cart';
//icon
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



const Tab = createBottomTabNavigator();

function BottomNavigation() {
    const navigation=useNavigation()
  return (
    <Tab.Navigator
    
    screenOptions={{
        tabBarShowLabel:false,
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: '#c79248',
          
        },
      }}
    >
      <Tab.Screen 
       options={{
        
        tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={25} color={color} />
          ),
        headerShown:true,
        header:()=>(
          <View style={{backgroundColor:"#c79248",paddingHorizontal:10,flexDirection:"row",justifyContent:"space-between" }}>
            <View style={{flexDirection:"row"}}>
              <Pressable onPress={()=>navigation.openDrawer()}>
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
       name="Home" component={Home} />

      <Tab.Screen 
      options={{
        tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name={focused ? 'filter' : 'filter-outline'} size={25} color={color} />
          ),
      }}
      name="Filter" component={Filter} />

<Tab.Screen 
      options={{
        tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={25} color={color} />
          ),
      }}
      name="Cart" component={Cart} />

    </Tab.Navigator>
  );
}

export default BottomNavigation