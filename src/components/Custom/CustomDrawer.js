import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../Context/AuthContext';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {authLogOutAction} from '../../../redux/actions/authActons';
import Profile from '../../screens/Profile';

const CustomDrawer = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '', marginTop: scale(-4)}}>
        {/* <ImageBackground
          source={require('../../../assets/Images/background1.jpg')}
          style={{padding: verticalScale(10)}}>
          <Image
            source={{
              uri: 'https://www.disneyplusinformer.com/wp-content/uploads/2022/03/Moon-Knight-Profile-Avatar.png',
            }}
            style={{
              height: scale(80),
              width: scale(80),
              borderRadius: scale(40),
              marginBottom: verticalScale(10),
            }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: verticalScale(13),
              fontFamily: 'Roboto-Medium',
              marginBottom: verticalScale(5),
            }}>
            Chirag Ramani
          </Text>
        </ImageBackground> */}
        <View>
          <View
            style={{marginHorizontal: scale(10), marginVertical: scale(10)}}>
            <Text style={{color: '#c79248', fontSize: verticalScale(15)}}>
              WELCOME
            </Text>
          </View>

          <TouchableOpacity 
          onPress={()=>navigation.navigate('Profile')}
          >
            <View
              style={{
                marginHorizontal: scale(10),
                marginBottom: verticalScale(5),
              }}>
              <Text style={{color: '#333', fontSize: verticalScale(12)}}>
                Ramani Chirag
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{borderColor: 'lightgrey', borderBottomWidth: scale(1),}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={{
                paddingHorizontal: scale(10),
                paddingVertical: verticalScale(8),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:"center"
              }}>
              <Text style={{color: '#333', fontSize: verticalScale(12)}}>
                Home
              </Text>
              <Entypo name="chevron-right" size={scale(20)} color="#c79248" />
            </TouchableOpacity>
          </View>

          <View style={{borderColor: 'lightgrey', borderBottomWidth: scale(1)}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductList')}
              style={{
                paddingHorizontal: scale(10),
                paddingVertical: verticalScale(8),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:"center"
              }}>
              <Text style={{color: '#333',fontSize: verticalScale(12)}}>Our Collection</Text>
              <Entypo name="chevron-right" size={scale(20)} color="#c79248" />
            </TouchableOpacity>
          </View>

          <View style={{borderColor: 'lightgrey', borderBottomWidth: 1}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('WishList')}
              style={{
                paddingHorizontal: scale(10),
                paddingVertical: verticalScale(8),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:"center"
              }}>
              <Text style={{color: '#333',fontSize: verticalScale(12)}}>Wish List</Text>
              <Entypo name="chevron-right" size={scale(20)} color="#c79248" />
            </TouchableOpacity>
          </View>

          <View style={{borderColor: 'lightgrey', borderBottomWidth: scale(1)}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={{
                paddingHorizontal: scale(10),
                paddingVertical: verticalScale(8),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:"center"
              }}>
              <Text style={{color: '#333',fontSize: verticalScale(12)}}>Cart</Text>
              <Entypo name="chevron-right" size={scale(20)} color="#c79248" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginHorizontal: scale(10), marginVertical: scale(10)}}>
          <Text style={{color: '#c79248', fontSize: verticalScale(15)}}>
            BROWSER BY CATEGORY
          </Text>
        </View>

        <View>
          <View style={{borderColor: 'lightgrey', borderBottomWidth: scale(1)}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductList')}
              style={{
                paddingHorizontal: scale(10),
                paddingVertical: verticalScale(8),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:"center"
              }}>
              <Text style={{color: '#333',fontSize: verticalScale(12)}}>Ladies Ring</Text>
              <Entypo name="chevron-right" size={scale(20)} color="#c79248" />
            </TouchableOpacity>
          </View>

          <View style={{borderColor: 'lightgrey', borderBottomWidth: scale(1)}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('ProductList')}
              style={{
                paddingHorizontal: scale(10),
                paddingVertical: verticalScale(8),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:"center"
              }}>
              <Text style={{color: '#333',fontSize: verticalScale(12)}}>Jeans Ring</Text>
              <Entypo name="chevron-right" size={scale(20)} color="#c79248" />
            </TouchableOpacity>
          </View>

          <View style={{borderColor: 'lightgrey', borderBottomWidth: scale(1)}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('ProductList')}
              style={{
                paddingHorizontal: scale(10),
                paddingVertical: verticalScale(8),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:"center"
              }}>
              <Text style={{color: '#333',fontSize: verticalScale(12)}}>Pendal Set</Text>
              <Entypo name="chevron-right" size={scale(20)} color="#c79248" />
            </TouchableOpacity>
          </View>

          <View style={{borderColor: 'lightgrey', borderBottomWidth: scale(1)}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('ProductList')}
              style={{
                paddingHorizontal: scale(10),
                paddingVertical: verticalScale(8),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:"center"
              }}>
              <Text style={{color: '#333',fontSize: verticalScale(12)}}>M.Set</Text>
              <Entypo name="chevron-right" size={scale(20)} color="#c79248" />
            </TouchableOpacity>
          </View>

          <View style={{borderColor: 'lightgrey', borderBottomWidth: scale(1)}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('ProductList')}
              style={{
                paddingHorizontal: scale(10),
                paddingVertical: verticalScale(8),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:"center"
              }}>
              <Text style={{color: '#333',fontSize: verticalScale(12)}}>Tops</Text>
              <Entypo name="chevron-right" size={scale(20)} color="#c79248" />
            </TouchableOpacity>
          </View>

          <View style={{borderColor: 'lightgrey', borderBottomWidth: scale(1)}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('ProductList')}
              style={{
                paddingHorizontal: scale(10),
                paddingVertical: verticalScale(8),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:"center"
              }}>
              <Text style={{color: '#333',fontSize: verticalScale(12)}}>Pendal </Text>
              <Entypo name="chevron-right" size={scale(20)} color="#c79248" />
            </TouchableOpacity>
          </View>

          <View style={{borderColor: 'lightgrey', borderBottomWidth: scale(1)}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('ProductList')}
              style={{
                paddingHorizontal: scale(10),
                paddingVertical: verticalScale(8),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:"center"
              }}>
              <Text style={{color: '#333',fontSize: verticalScale(12)}}>Jeans Lose Kada </Text>
              <Entypo name="chevron-right" size={scale(20)} color="#c79248" />
            </TouchableOpacity>
          </View>

          <View style={{borderColor: 'lightgrey', borderBottomWidth: scale(1)}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('ProductList')}
              style={{
                paddingHorizontal: scale(10),
                paddingVertical: verticalScale(8),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:"center"
              }}>
              <Text style={{color: '#333',fontSize: verticalScale(12)}}>Jeans Bracelet </Text>
              <Entypo name="chevron-right" size={scale(20)} color="#c79248" />
            </TouchableOpacity>
          </View>

          <View style={{borderColor: 'lightgrey', borderBottomWidth: scale(1)}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('ProductList')}
              style={{
                paddingHorizontal: scale(10),
                paddingVertical: verticalScale(8),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:"center"
              }}>
              <Text style={{color: '#333',fontSize: verticalScale(12)}}>Ladies Bracelet </Text>
              <Entypo name="chevron-right" size={scale(20)} color="#c79248" />
            </TouchableOpacity>
          </View>

        </View>

        {/* <View style={{  backgroundColor: '#fff', }}>
                    <DrawerItemList {...props} />
                </View> */}
      </DrawerContentScrollView>

      <View
        style={{
          padding: verticalScale(10),
          borderTopWidth: scale(1),
          borderTopColor: '#ccc',
        }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(authLogOutAction());
          }}
          style={{}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={scale(22)} color="#333" />
            <Text
              style={{
                fontSize: scale(15),
                marginLeft: scale(5),
                color: '#333',
                fontWeight: 'bold',
              }}>
              log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
