import {View, Text, Image, Pressable, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {GetWishlistAction} from '../../redux/actions/WishListAction';

const WishList = () => {
  const dispatch = useDispatch();
  const {userToken} = useSelector(state => state.authState);
  const {wishlist} = useSelector(state => state.wishlistState);

  const data = wishlist.data;

  useEffect(() => {
    dispatch(GetWishlistAction(userToken));
  }, [GetWishlistAction, userToken]);

  return (
    <FlatList
      style={{paddingHorizontal: scale(5), backgroundColor: '#F5F5F5'}}
      contentContainerStyle={{flex: 1}}
      data={data}
      horizontal={false}
      numColumns={1}
      keyExtractor={item => {
        return item.id;
      }}
      ItemSeparatorComponent={() => {
        return <View style={{marginTop: scale(10)}} />;
      }}
      renderItem={post => {
        const item = post.item;
        console.log(item[0]);
        return (
          <Pressable onPress={() => {}}>
            <View
              style={{
                marginTop: verticalScale(10),
                backgroundColor: 'white',
                width: scale(330),
                marginHorizontal: scale(5),
                flexDirection: 'row',
                // borderRadius: 20,
              }}>
              <Image
                style={{
                  height: scale(140),
                  width: scale(140),
                  // borderRadius: 20,
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
                  name={item.selected ? 'heart-outline' : 'heart'}
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
  );
};

export default WishList;
