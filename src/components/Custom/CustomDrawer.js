import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
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
import {
  authLogOutAction,
  LoggedAction,
} from '../../../redux/actions/authActons';
import {HomeAction} from '../../../redux/actions/HomeAction';
import Profile from '../../screens/Profile';
import {ProductListAction} from '../../../redux/actions/ProductListAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {Token} = useSelector(state => state.authState);
  const {home} = useSelector(state => state.homeState);

  useEffect(() => {
    dispatch(HomeAction(Token));
  }, []);

  const data = home.data?.sub_category;

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

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
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

          <View style={{borderColor: 'lightgrey', borderBottomWidth: scale(1)}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={{
                paddingHorizontal: scale(10),
                paddingVertical: verticalScale(8),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
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
                alignItems: 'center',
              }}>
              <Text style={{color: '#333', fontSize: verticalScale(12)}}>
                Our Collection
              </Text>
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
                alignItems: 'center',
              }}>
              <Text style={{color: '#333', fontSize: verticalScale(12)}}>
                Wish List
              </Text>
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
                alignItems: 'center',
              }}>
              <Text style={{color: '#333', fontSize: verticalScale(12)}}>
                Cart
              </Text>
              <Entypo name="chevron-right" size={scale(20)} color="#c79248" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginHorizontal: scale(10), marginVertical: scale(10)}}>
          <Text style={{color: '#c79248', fontSize: verticalScale(15)}}>
            BROWSER BY CATEGORY
          </Text>
        </View>

        <FlatList
          style={{
            paddingHorizontal: scale(5),
            backgroundColor: 'white',
          }}
          contentContainerStyle={{flex: 1}}
          data={data}
          horizontal={false}
          numColumns={1}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={item => {
            return (
              <View
                style={{borderColor: 'lightgrey', borderBottomWidth: scale(1)}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ProductList'),
                      dispatch(ProductListAction(Token, 10, item.item.id));
                  }}
                  style={{
                    paddingHorizontal: scale(10),
                    paddingVertical: verticalScale(8),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#333', fontSize: verticalScale(12)}}>
                    {item.item.name}
                  </Text>
                  <Entypo
                    name="chevron-right"
                    size={scale(20)}
                    color="#c79248"
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />

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
            dispatch(LoggedAction());
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
