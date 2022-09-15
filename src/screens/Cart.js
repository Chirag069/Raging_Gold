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
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, reset} from '../../redux/actions/CounterActions';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import CustomButton from '../components/Custom/CustomButton';
import {useFocusEffect} from '@react-navigation/native';
import {
  GetCartAction,
  RemoveCartAction,
  UpdateCartAction,
} from '../../redux/actions/CartAction';
import Spinner from 'react-native-loading-spinner-overlay';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ActivityIndicator} from 'react-native-paper';

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {counter} = useSelector(state => state.counterState);
  const {cart, cartLoading, removecart, updatecart} = useSelector(
    state => state.cartState,
  );
  const {userToken} = useSelector(state => state.authState);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(GetCartAction(userToken));
      // dispatch(UpdateCartAction(userToken));
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, []),
  );

  // console.log(counter);

  const data = cart.data;

  // console.log(data);

  return (
    <>
      {cartLoading ? (
        <View
          style={{
            marginTop: 'auto',
            marginBottom: 'auto',
            alignItems: 'center',
            paddingVertical: verticalScale(20),
          }}>
          <ActivityIndicator
            animating={cartLoading}
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
            }}>
            <Text style={{color: '#c79248', fontSize: scale(20)}}>Cart</Text>
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
                  console.log(item);
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
                              <Text
                                style={{color: 'grey', fontSize: scale(12)}}>
                                {item.remark}
                              </Text>
                            ) : (
                              <Text
                                style={{fontSize: scale(12), color: 'grey'}}>
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
                                    dispatch(decrement());
                                    dispatch(
                                      UpdateCartAction(userToken, -1, item.id),
                                    );
                                  }
                                  return dispatch(GetCartAction(userToken));
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
                                    dispatch(GetCartAction(userToken)),
                                    dispatch(increment()),
                                    dispatch(
                                      UpdateCartAction(userToken, +1, item.id),
                                    )
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
                              onPress={() => {
                                return (
                                  dispatch(
                                    RemoveCartAction(userToken, item.id),
                                  ),
                                  dispatch(GetCartAction(userToken)),
                                  dispatch(reset())
                                );
                              }}
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
      )}
    </>

    // <SafeAreaView style={{flex: 1}}>
    //   <ScrollView>
    //     <View
    //       style={{
    //         backgroundColor: 'white',
    //         paddingHorizontal: scale(10),
    //         paddingVertical: verticalScale(10),
    //         marginBottom: verticalScale(5),
    //       }}>
    //       <Text style={{color: '#c79248', fontSize: scale(20)}}>My Cart</Text>
    //     </View>
    //     <View
    //       style={{
    //         marginHorizontal: scale(10),
    //         marginVertical: verticalScale(5),
    //         backgroundColor: 'white',
    //       }}>
    //       <View style={{flexDirection: 'row'}}>
    //         <View style={{flexDirection: 'row'}}>
    //           <Image
    //             style={{height: scale(120), width: scale(120)}}
    //             source={{
    //               uri: 'https://staticimg.titan.co.in/Tanishq/Catalog/513220FIIAAP1_1.jpg',
    //             }}
    //           />
    //           <View
    //             style={{
    //               borderColor: 'grey',
    //               borderWidth: scale(0.5),
    //               height: verticalScale(120),
    //               alignSelf: 'center',
    //             }}
    //           />
    //         </View>
    //         <View style={{marginHorizontal: scale(10)}}>
    //           <Text style={{color: 'black', fontSize: scale(20)}}>
    //             Gold Ring
    //           </Text>
    //           <Text style={{color: '#c79248', fontSize: scale(20)}}>
    //             Rs. 14500.00
    //           </Text>
    //           <View
    //             style={{flexDirection: 'row', marginTop: verticalScale(15)}}>
    //             <TouchableOpacity
    //               onPress={() => dispatch(decrement())}
    //               style={{
    //                 backgroundColor: '#c79248',
    //                 borderWidth: scale(0.5),
    //                 borderColor: 'grey',
    //                 alignItems: 'center',
    //                 paddingHorizontal: scale(12),
    //                 borderBottomLeftRadius: scale(10),
    //               }}>
    //               <Text style={{fontSize: scale(20), color: 'white'}}>-</Text>
    //             </TouchableOpacity>
    //             <View
    //               style={{
    //                 borderWidth: scale(0.5),
    //                 borderColor: 'grey',
    //                 alignItems: 'center',
    //                 paddingHorizontal: scale(12),
    //               }}>
    //               <Text style={{fontSize: scale(20)}}>{counter}</Text>
    //             </View>
    //             <TouchableOpacity
    //               onPress={() => dispatch(increment())}
    //               style={{
    //                 backgroundColor: '#c79248',
    //                 borderWidth: scale(0.5),
    //                 borderColor: 'grey',
    //                 alignItems: 'center',
    //                 paddingHorizontal: scale(10),
    //                 borderTopRightRadius: scale(10),
    //                 // borderBottomRightRadius: 10,
    //               }}>
    //               <Text style={{fontSize: scale(20), color: 'white'}}>+</Text>
    //             </TouchableOpacity>
    //           </View>
    //         </View>
    //       </View>
    //     </View>

    //     <View
    //       style={{
    //         marginHorizontal: scale(10),
    //         marginVertical: verticalScale(5),
    //         backgroundColor: 'white',
    //       }}>
    //       <View style={{flexDirection: 'row'}}>
    //         <View style={{flexDirection: 'row'}}>
    //           <Image
    //             style={{height: scale(120), width: scale(120)}}
    //             source={{
    //               uri: 'https://staticimg.titan.co.in/Tanishq/Catalog/513220FIIAAP1_1.jpg',
    //             }}
    //           />
    //           <View
    //             style={{
    //               borderColor: 'grey',
    //               borderWidth: scale(0.5),
    //               height: verticalScale(120),
    //               alignSelf: 'center',
    //             }}
    //           />
    //         </View>
    //         <View style={{marginHorizontal: scale(10)}}>
    //           <Text style={{color: 'black', fontSize: scale(20)}}>
    //             Gold Ring
    //           </Text>
    //           <Text style={{color: '#c79248', fontSize: scale(20)}}>
    //             Rs. 14500.00
    //           </Text>
    //           <View
    //             style={{flexDirection: 'row', marginTop: verticalScale(15)}}>
    //             <TouchableOpacity
    //               onPress={() => dispatch(decrement())}
    //               style={{
    //                 backgroundColor: '#c79248',
    //                 borderWidth: scale(0.5),
    //                 borderColor: 'grey',
    //                 alignItems: 'center',
    //                 paddingHorizontal: scale(12),
    //                 borderBottomLeftRadius: scale(10),
    //               }}>
    //               <Text style={{fontSize: scale(20), color: 'white'}}>-</Text>
    //             </TouchableOpacity>
    //             <View
    //               style={{
    //                 borderWidth: scale(0.5),
    //                 borderColor: 'grey',
    //                 alignItems: 'center',
    //                 paddingHorizontal: scale(12),
    //               }}>
    //               <Text style={{fontSize: scale(20)}}>{counter}</Text>
    //             </View>
    //             <TouchableOpacity
    //               onPress={() => dispatch(increment())}
    //               style={{
    //                 backgroundColor: '#c79248',
    //                 borderWidth: scale(0.5),
    //                 borderColor: 'grey',
    //                 alignItems: 'center',
    //                 paddingHorizontal: scale(10),
    //                 borderTopRightRadius: scale(10),
    //                 // borderBottomRightRadius: 10,
    //               }}>
    //               <Text style={{fontSize: scale(20), color: 'white'}}>+</Text>
    //             </TouchableOpacity>
    //           </View>
    //         </View>
    //       </View>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

{
  /* <View
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginHorizontal: scale(10),
          }}>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{fontSize: scale(17), color: 'black'}}>
              Item Total
            </Text>
            <Text
              style={{
                fontSize: scale(17),
                color: 'black',
                marginTop: scale(5),
              }}>
              CGST(1.5%)
            </Text>
            <Text
              style={{
                fontSize: scale(17),
                color: 'black',
                marginTop: scale(5),
              }}>
              SGST(1.5%)
            </Text>
            <Text
              style={{
                fontSize: scale(17),
                color: 'black',
                marginTop: scale(5),
              }}>
              Discount
            </Text>
            <Text
              style={{
                fontSize: scale(17),
                color: 'black',
                fontWeight: 'bold',
                marginTop: scale(5),
              }}>
              Grand Total
            </Text>
          </View>

          <View style={{alignItems: 'flex-end', marginLeft: 30}}>
            <Text
              style={{
                fontSize: scale(17),
                color: 'black',
                marginTop: scale(5),
              }}>
              29000.00
            </Text>
            <Text
              style={{
                fontSize: scale(17),
                color: 'black',
                marginTop: scale(5),
              }}>
              CGST(1.5%)
            </Text>
            <Text
              style={{
                fontSize: scale(17),
                color: 'black',
                marginTop: scale(5),
              }}>
              SGST(1.5%)
            </Text>
            <Text
              style={{
                fontSize: scale(17),
                color: 'black',
                marginTop: scale(5),
              }}>
              Discount
            </Text>
            <Text
              style={{
                fontSize: scale(17),
                color: 'black',
                fontWeight: 'bold',
                marginTop: scale(5),
              }}>
              Grand Total
            </Text>
          </View>
        </View>

        <View style={{marginHorizontal: scale(10)}}>
          <View
            style={{
              borderWidth: scale(0.5),
              borderColor: 'darkgrey',
              marginBottom: 10,
              marginTop: verticalScale(20),
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              borderColor: 'darkgrey',
              borderWidth: scale(0.5),
              borderRadius: scale(30),
              flexDirection: 'row',
            }}>
            <TextInput
              style={{marginLeft: scale(10)}}
              placeholder="Apply discount coupon"
              placeholderTextColor="black"
            />
            <View style={{marginLeft: 'auto', padding: scale(2)}}>
              <CustomButton
                buttoncolor={'#c79248'}
                buttonwidth={scale(150)}
                buttonheight={verticalScale(40)}
                borderradius={scale(30)}
                text={'APPLY'}
                fontcolor={'white'}
                fontSize={scale(20)}
                onPress={() => {
                  navigation.navigate('Cart');
                }}
              />
            </View>
          </View>
          <View
            style={{
              borderWidth: scale(0.5),
              borderColor: 'darkgrey',
              marginBottom: verticalScale(10),
              marginTop: verticalScale(10),
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomButton
              onPress={() => {
                navigation.navigate('ProductList');
              }}
              buttoncolor={'#c79248'}
              buttonwidth={scale(160)}
              buttonheight={verticalScale(50)}
              borderradius={scale(30)}
              text={'CONTINUE SHOPPING'}
              fontcolor={'white'}
              fontSize={scale(12)}
            />
            <CustomButton
              onPress={() => {
                navigation.navigate('Checkout');
              }}
              buttoncolor={'#c79248'}
              buttonwidth={scale(160)}
              buttonheight={verticalScale(50)}
              borderradius={scale(30)}
              text={'PROCCED TO PAY'}
              fontcolor={'white'}
              fontSize={scale(12)}
            />
          </View>
        </View> */
}

export default Cart;
