import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  MaskedViewBase,
  TextInput,
  LogBox,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, reset} from '../../redux/actions/CounterActions';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {useFocusEffect} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import {
  GetCartAction,
  RemoveCartAction,
  UpdateCartAction,
} from '../../redux/actions/CartAction';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'chiragproductdb',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);

const CartDB = () => {
  useFocusEffect(
    React.useCallback(() => {
      getcartData();
    }, []),
  );

  const [cartdata, setCartdata] = useState([]);
  const navigation = useNavigation();

  const getcartData = () => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT id,main_id,item_id,item_group_id,gr,ls,amount,nt,design_code_id,image,item,design_name,gender FROM cart',
          [],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              let result = [];
              for (let i = 0; i < len; i++) {
                let item = results.rows.item(i);

                // console.log(item.item_id);

                result.push({
                  id: item.id,
                  main_id: item.main_id,
                  item_id: item.item_id,
                  item_group_id: item.item_group_id,
                  gr: item.gr,
                  ls: item.ls,
                  amount: item.amount,
                  nt: item.nt,
                  design_code_id: item.design_code_id,
                  image: item.image,
                  item: item.item,
                  design_name: item.design_name,
                  gender: item.gender,
                });
              }
              setCartdata(result);
            }
          },
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeuserdata = removeid => {
    try {
      console.log(removeid);
      db.transaction(tx => {
        tx.executeSql(
          `DELETE FROM cart where id = ${removeid} `,
          [],
          () => {
            getcartData();
            Toast.show({
              text1: 'Data remove successfully',
              visibilityTime: 3000,
              autoHide: true,
              position: 'top',
              type: 'error',
            });
          },
          error => {
            console.log(error);
          },
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('productdatabase')}
          style={{
            backgroundColor: 'white',
            paddingHorizontal: scale(10),
            paddingVertical: verticalScale(10),
          }}>
          <Text style={{color: '#c79248', fontSize: scale(20)}}>
            Add More in cart
          </Text>
        </TouchableOpacity>

        {cartdata?.length != 0 ? (
          <ScrollView>
            <FlatList
              style={{
                paddingHorizontal: scale(5),
                backgroundColor: '#F5F5F5',
              }}
              contentContainerStyle={{flex: 1}}
              data={cartdata}
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
                // console.log(item);
                return (
                  <View
                    style={{
                      marginHorizontal: scale(10),
                      marginVertical: verticalScale(5),
                      backgroundColor: 'white',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          style={{height: scale(130), width: scale(140)}}
                          source={{
                            uri: item.image,
                          }}
                        />
                        <View
                          style={{
                            borderColor: 'lightgrey',
                            borderWidth: scale(0.5),
                            height: verticalScale(100),
                            alignSelf: 'center',
                            marginLeft: scale(10),
                          }}
                        />
                      </View>
                      <View style={{marginHorizontal: scale(10)}}>
                        <Text
                          style={{
                            color: '#c79248',
                            fontSize: scale(17),
                            marginBottom: verticalScale(10),
                          }}>
                          {item.design_name}
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              color: '#333',
                              fontSize: scale(12),
                              marginRight: scale(5),
                            }}>
                            Size:
                          </Text>
                          <Text style={{color: 'grey', fontSize: scale(12)}}>
                            {item.remark}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              color: '#333',
                              fontSize: scale(12),
                              marginRight: scale(5),
                            }}>
                            Group:
                          </Text>
                          <Text style={{color: 'grey', fontSize: scale(12)}}>
                            {item.remark}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              color: '#333',
                              fontSize: scale(12),
                              marginRight: scale(5),
                            }}>
                            Remark:
                          </Text>
                          {item.remark ? (
                            <Text style={{color: 'grey', fontSize: scale(12)}}>
                              {item.remark}
                            </Text>
                          ) : (
                            <Text style={{fontSize: scale(12), color: 'grey'}}>
                              Write Your remark
                            </Text>
                          )}
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: verticalScale(10),
                            }}>
                            <TouchableOpacity
                              onPress={() => {
                                if (counter > 1) {
                                  // dispatch(decrement());
                                  dispatch(
                                    UpdateCartAction(Token, -1, item.id),
                                  );
                                }
                                return dispatch(GetCartAction(Token));
                              }}
                              style={{
                                backgroundColor: '#c79248',
                                // borderWidth: scale(0.5),
                                // borderColor: '#c79248',
                                alignItems: 'center',
                                paddingHorizontal: scale(12),
                                borderBottomLeftRadius: scale(15),
                                borderTopLeftRadius: scale(15),
                              }}>
                              <Text
                                style={{fontSize: scale(20), color: 'white'}}>
                                -
                              </Text>
                            </TouchableOpacity>
                            <View
                              style={{
                                borderWidth: scale(0.5),
                                borderColor: '#c79248',
                                alignItems: 'center',
                                paddingHorizontal: scale(12),
                              }}>
                              <Text style={{fontSize: scale(20)}}>
                                {item.cart_qty}
                              </Text>
                            </View>
                            <TouchableOpacity
                              onPress={() => {
                                return (
                                  dispatch(
                                    UpdateCartAction(Token, +1, item.id),
                                  ),
                                  dispatch(GetCartAction(Token))
                                  // dispatch(increment()),
                                );
                              }}
                              style={{
                                backgroundColor: '#c79248',
                                // borderWidth: scale(0.5),
                                // borderColor: '#c79248',
                                alignItems: 'center',
                                paddingHorizontal: scale(10),
                                borderTopRightRadius: scale(15),
                                borderBottomRightRadius: scale(15),
                                // borderBottomRightRadius: 10,
                              }}>
                              <Text
                                style={{fontSize: scale(20), color: 'white'}}>
                                +
                              </Text>
                            </TouchableOpacity>
                          </View>

                          <Pressable
                            onPress={() => removeuserdata(item.id)}
                            style={{
                              alignSelf: 'flex-end',
                              marginLeft: scale(30),
                            }}>
                            <Ionicons
                              name={'trash-outline'}
                              color={'#c79248'}
                              size={scale(25)}
                              style={{padding: scale(2)}}
                            />
                          </Pressable>
                        </View>
                      </View>
                    </View>
                  </View>
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
              backgroundColor: 'white',
              flex: 1,
              justifyContent: 'center',
            }}>
            <Image
              style={{height: scale(300), width: scale(300)}}
              source={require('../../assets/Images/emptycart.gif')}
            />
            <Text style={{fontSize: scale(20), color: '#333'}}>
              Your cart is empty{' '}
            </Text>
          </View>
        )}
      </View>
    </>
  );
};

export default CartDB;
