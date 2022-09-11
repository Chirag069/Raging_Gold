import {
  View,
  Text,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import {GetWishlistAction} from '../../redux/actions/WishListAction';

import {
  AddWishlistAction,
  RemoveWishlistAction,
} from '../../redux/actions/WishListAction';
import {useDispatch} from 'react-redux';
import {ProductListAction} from '../../redux/actions/ProductListAction';
import {ActivityIndicator} from 'react-native-paper';

const ProductList = () => {
  const dispatch = useDispatch();
  const {userToken} = useSelector(state => state.authState);
  const {ProductList, productlistloading} = useSelector(
    state => state.productlistState,
  );
  const {wishlist} = useSelector(state => state.wishlistState);
  const data = ProductList.data;
  const navigation = useNavigation();
  const wishlistdata = wishlist.data;
  const [select, setSelect] = useState();

  const handleOnpress = item => {
    if (item) {
      dispatch(AddWishlistAction(userToken, item.id));
      const newItem = wishlistdata.map(val => {
        if (val.id === item.id) {
          dispatch(RemoveWishlistAction(userToken, item.id));
        }
        setSelect(newItem);
      });
    }
    dispatch(GetWishlistAction(userToken));
  };

  const limit = data?.length + 10;

  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: scale(10),
          paddingVertical: verticalScale(10),
          marginBottom: verticalScale(17),
        }}>
        <Text style={{color: '#c79248', fontSize: scale(20)}}>
          Exclusive Gold Ring
        </Text>
      </View>

      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={data}
          horizontal={false}
          numColumns={2}
          onEndReached={() => dispatch(ProductListAction(userToken, limit))}
          ListFooterComponent={() => (
            <View
              style={{
                marginTop: 'auto',
                marginBottom: 'auto',
                alignItems: 'center',
                paddingVertical: verticalScale(20),
              }}>
              <ActivityIndicator
                animating={productlistloading}
                color={'#c79248'}
                size={scale(30)}
              />
            </View>
          )}
          keyExtractor={item => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          renderItem={post => {
            const item = post.item;
            return (
              <Pressable onPress={() => navigation.navigate('ProductDetail')}>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: scale(160),
                    marginHorizontal: scale(5),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Pressable onPress={() => {}}>
                      <Ionicons
                        name={item.id ? 'cart-outline' : 'cart'}
                        color={'#c79248'}
                        size={scale(30)}
                        style={{alignSelf: 'flex-end', padding: scale(2)}}
                      />
                    </Pressable>
                    <Pressable onPress={() => handleOnpress(item)}>
                      <Ionicons
                        name={'heart'}
                        color={'#c79248'}
                        size={scale(30)}
                        style={{alignSelf: 'flex-end', padding: scale(2)}}
                      />
                    </Pressable>
                  </View>

                  <Image
                    style={{
                      height: scale(140),
                      width: scale(160),
                      alignSelf: 'center',
                    }}
                    source={{
                      uri: item.image,
                    }}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: scale(5),
                    }}>
                    <Text
                      style={{
                        fontSize: scale(12),
                        marginTop: verticalScale(5),
                        marginBottom: verticalScale(5),
                      }}>
                      {item.design_name}
                    </Text>
                    <Text
                      style={{
                        fontSize: scale(12),
                        marginTop: verticalScale(5),
                        marginBottom: verticalScale(5),
                      }}>
                      GW:{item.item}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: scale(5),
                    }}>
                    <Text
                      style={{
                        fontSize: scale(12),
                        marginTop: verticalScale(5),
                        marginBottom: verticalScale(5),
                      }}>
                      {item.amount}
                    </Text>
                    <Text
                      style={{
                        fontSize: scale(12),
                        marginTop: verticalScale(5),
                        marginBottom: verticalScale(5),
                      }}>
                      GW:{item.gr}
                    </Text>
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: scale(5),
    backgroundColor: '#F5F5F5',
  },
  listContainer: {
    alignItems: 'center',
  },
  separator: {
    marginTop: scale(10),
  },
});

export default ProductList;
