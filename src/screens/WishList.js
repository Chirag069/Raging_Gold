import {
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList
} from 'react-native';
import React,{useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const wishlistdata=[
  {
    id: 1,
    title: 'Product 1',
    price: ' ₹ 16000/-',
    image:
      'https://staticimg.titan.co.in/Tanishq/Catalog/503920FCHAA29_1.jpg',
    selected:'false'
  },
]

const WishList = () => {
  return(
    <FlatList
        style={{ paddingHorizontal: scale(5),
          backgroundColor: '#F5F5F5',}}
        contentContainerStyle={{flex:1}}
        data={wishlistdata}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id;
        }}
        ItemSeparatorComponent={() => {
          return <View style={{marginTop: scale(10),}} />;
        }}
        renderItem={post => {
          const item = post.item;
          return (
            <Pressable onPress={() =>navigation.navigate('ProductDetail')}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: scale(160),
                  marginHorizontal: scale(5),
                }}>
                <ImageBackground
                  style={{height:scale(140), width:scale(150), alignSelf: 'center'}}
                  source={{
                    uri: item.image,
                  }}>
                  <Pressable onPress={() => handleOnpress(item)}>
                    <Ionicons
                      name={item.selected ?  "heart-outline":"heart"}
                      color={'#c79248'}
                      size={scale(30)}
                      style={{alignSelf: 'flex-end', padding: scale(2)}}
                    />
                  </Pressable>
                </ImageBackground>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: scale(17), marginTop: verticalScale(5), marginBottom: verticalScale(5)}}>
                    {item.price}
                  </Text>
                </View>
              </View>
            </Pressable>
          );
        }}
      />

  )
  

}

export default WishList