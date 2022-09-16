import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
  LogBox,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {
  GetWishlistAction,
  AddWishlistAction,
  RemoveWishlistAction,
} from '../../redux/actions/WishListAction';
import {ActivityIndicator} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';

const WishList = () => {
  const dispatch = useDispatch();
  const {userToken} = useSelector(state => state.authState);
  const {wishlist, wishlistLoading} = useSelector(state => state.wishlistState);
  const [wishlistid, setWishlistid] = useState();
  const data = wishlist.data;

  useFocusEffect(
    React.useCallback(() => {
      dispatch(GetWishlistAction(userToken));
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

      // return () => {
      //   Alert.alert('Screen was unfocused');
      //   // Useful for cleanup functions
      // };
    }, []),
  );

  const handleOnpress = item => {
    dispatch(RemoveWishlistAction(userToken, item.id));
    dispatch(GetWishlistAction(userToken));
  };

  return (
    <>
      {wishlistLoading ? (
        <View
          style={{
            marginTop: 'auto',
            marginBottom: 'auto',
            alignItems: 'center',
            paddingVertical: verticalScale(20),
          }}>
          <ActivityIndicator
            animating={wishlistLoading}
            color={'#c79248'}
            size={scale(30)}
          />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: scale(10),
              paddingVertical: verticalScale(10),
              marginBottom: verticalScale(5),
            }}>
            <Text style={{color: '#c79248', fontSize: scale(20)}}>
              Wishlist
            </Text>
          </View>

          {data?.length != 0 ? (
            <ScrollView>
              <FlatList
                style={{
                  paddingHorizontal: scale(5),
                  backgroundColor: '#F5F5F5',
                }}
                contentContainerStyle={{flex: 1}}
                data={data}
                horizontal={false}
                numColumns={1}
                keyExtractor={item => {
                  return item.id;
                }}
                ItemSeparatorComponent={() => {
                  return <View style={{marginTop: scale(5)}} />;
                }}
                renderItem={post => {
                  const item = post.item;

                  return (
                    <Pressable onPress={() => {}}>
                      <View
                        style={{
                          marginTop: verticalScale(10),
                          backgroundColor: 'white',
                          width: scale(330),
                          marginHorizontal: scale(5),
                          flexDirection: 'row',
                        }}>
                        <Image
                          style={{
                            height: scale(140),
                            width: scale(140),
                          }}
                          source={{
                            uri: item.image,
                          }}
                        />
                        <View
                          style={{
                            marginHorizontal: scale(10),
                            marginVertical: verticalScale(5),
                          }}>
                          <Text
                            style={{
                              fontSize: scale(17),
                              color: '#c79248',
                            }}>
                            {item.design_name}
                          </Text>
                          <Text
                            style={{
                              marginTop: verticalScale(5),
                              fontSize: scale(14),
                              color: '#333',
                            }}>
                            {item.item}
                          </Text>
                          <Text
                            style={{
                              fontSize: scale(13),
                              color: 'grey',
                            }}>
                            GR: {item.gr}
                          </Text>
                          <Text
                            style={{
                              fontSize: scale(13),
                              color: 'grey',
                            }}>
                            LS: {item.ls}
                          </Text>
                          <Text
                            style={{
                              fontSize: scale(13),
                              color: 'grey',
                            }}>
                            NT: {item.nt}
                          </Text>
                          <Text
                            style={{
                              marginTop: scale(10),
                              fontSize: scale(13),
                              color: 'grey',
                            }}>
                            GENDER: {item.gender}
                          </Text>
                        </View>

                        <Pressable
                          onPress={() => handleOnpress(item)}
                          style={{alignItems: 'flex-end', flex: 1}}>
                          <Ionicons
                            name={item.id ? 'heart' : 'heart-outline'}
                            color={'#c79248'}
                            size={scale(27)}
                            style={{padding: scale(2)}}
                          />
                        </Pressable>
                      </View>
                    </Pressable>
                  );
                }}
              />
            </ScrollView>
          ) : (
            <View
              style={{
                alignItems: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}>
              <Image
                style={{height: scale(400), width: scale(400)}}
                source={require('../../assets/Images/giphy.gif')}
              />
            </View>
          )}
        </View>
      )}
    </>
  );
};

export default WishList;
