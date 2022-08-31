import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  MaskedViewBase,
  TextInput,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../../redux/actions/CounterActions';
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';


const Cart = () => {
  const navigation=useNavigation()
  const dispatch = useDispatch();
  const {counter} = useSelector(state => state.counterState);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: scale(10),
            paddingVertical: verticalScale(10),
            marginBottom: verticalScale(5),
          }}>
          <Text style={{color: '#c79248', fontSize: scale(20)}}>
            My Cart
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: scale(10),
            marginVertical: verticalScale(5),
            backgroundColor: 'white',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: scale(120), width: scale(120)}}
                source={{
                  uri: 'https://staticimg.titan.co.in/Tanishq/Catalog/513220FIIAAP1_1.jpg',
                }}
              />
              <View
                style={{
                  borderColor: 'grey',
                  borderWidth: scale(0.5),
                  height: verticalScale(120),
                  alignSelf: 'center',
                }}
              />
            </View>
            <View style={{marginHorizontal: scale(10)}}>
              <Text style={{color: 'black', fontSize: scale(20)}}>Gold Ring</Text>
              <Text style={{color: '#c79248', fontSize: scale(20)}}>Rs. 14500.00</Text>
              <View style={{flexDirection: 'row', marginTop: verticalScale(15)}}>
                <TouchableOpacity
                  onPress={() => dispatch(decrement())}
                  style={{
                    backgroundColor: '#c79248',
                    borderWidth: scale(0.5),
                    borderColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: scale(12),
                    borderBottomLeftRadius: scale(10),
                  }}>
                  <Text style={{fontSize: scale(20), color: 'white'}}>-</Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: scale(0.5),
                    borderColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: scale(12),
                  }}>
                  <Text style={{fontSize: scale(20)}}>{counter}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => dispatch(increment())}
                  style={{
                    backgroundColor: '#c79248',
                    borderWidth: scale(0.5),
                    borderColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: scale(10),
                    borderTopRightRadius: scale(10),
                    // borderBottomRightRadius: 10,
                  }}>
                  <Text style={{fontSize: scale(20), color: 'white'}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: scale(10),
            marginVertical: verticalScale(5),
            backgroundColor: 'white',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: scale(120), width: scale(120)}}
                source={{
                  uri: 'https://staticimg.titan.co.in/Tanishq/Catalog/513220FIIAAP1_1.jpg',
                }}
              />
              <View
                style={{
                  borderColor: 'grey',
                  borderWidth: scale(0.5),
                  height: verticalScale(120),
                  alignSelf: 'center',
                }}
              />
            </View>
            <View style={{marginHorizontal: scale(10)}}>
              <Text style={{color: 'black', fontSize: scale(20)}}>Gold Ring</Text>
              <Text style={{color: '#c79248', fontSize: scale(20)}}>Rs. 14500.00</Text>
              <View style={{flexDirection: 'row', marginTop: verticalScale(15)}}>
                <TouchableOpacity
                  onPress={() => dispatch(decrement())}
                  style={{
                    backgroundColor: '#c79248',
                    borderWidth: scale(0.5),
                    borderColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: scale(12),
                    borderBottomLeftRadius: scale(10),
                  }}>
                  <Text style={{fontSize: scale(20), color: 'white'}}>-</Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: scale(0.5),
                    borderColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: scale(12),
                  }}>
                  <Text style={{fontSize: scale(20)}}>{counter}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => dispatch(increment())}
                  style={{
                    backgroundColor: '#c79248',
                    borderWidth: scale(0.5),
                    borderColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: scale(10),
                    borderTopRightRadius: scale(10),
                    // borderBottomRightRadius: 10,
                  }}>
                  <Text style={{fontSize: scale(20), color: 'white'}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginHorizontal: scale(10),
          }}>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{fontSize: scale(17), color: 'black'}}>Item Total</Text>
            <Text style={{fontSize: scale(17), color: 'black', marginTop: scale(5)}}>
              CGST(1.5%)
            </Text>
            <Text style={{fontSize: scale(17), color: 'black', marginTop: scale(5)}}>
              SGST(1.5%)
            </Text>
            <Text style={{fontSize: scale(17), color: 'black', marginTop: scale(5)}}>
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
            <Text style={{fontSize: scale(17), color: 'black', marginTop: scale(5)}}>
              29000.00
            </Text>
            <Text style={{fontSize: scale(17), color: 'black', marginTop: scale(5)}}>
              CGST(1.5%)
            </Text>
            <Text style={{fontSize: scale(17), color: 'black', marginTop: scale(5)}}>
              SGST(1.5%)
            </Text>
            <Text style={{fontSize: scale(17), color: 'black', marginTop: scale(5)}}>
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
              borderColor:"darkgrey",
              borderWidth: scale(0.5),
              borderRadius: scale(30),
              flexDirection:"row"
            }}>
            <TextInput
            
            style={{marginLeft:scale(10),}}
              placeholder="Apply discount coupon"
              placeholderTextColor="black"
            />
            <Button
              onPress={() => {
                navigation.navigate('Cart');
              }}
              contentStyle={{height: verticalScale(40)}}
              labelStyle={{fontSize: 20}}
              style={{
                borderRadius: scale(50),
                marginLeft: 'auto',
                width: scale(150),
                justifyContent: 'center',
                margin:scale(3),
              }}
              buttonColor="#c79248"
              textColor="white">
              Apply
            </Button>
          </View>
          <View
            style={{
              borderWidth: scale(0.5),
              borderColor: 'darkgrey',
              marginBottom: verticalScale(10),
              marginTop: verticalScale(10),
            }}
          />
          <View style={{flexDirection:"row"}}>
            <Button
              onPress={() => {
                navigation.navigate('Home');
              }}
              contentStyle={{height: verticalScale(50)}}
              labelStyle={{fontSize: 15}}
              style={{
                borderRadius: scale(50),
                marginLeft: 'auto',
                width: scale(160),
                justifyContent: 'center',
                margin:3,
              }}
              buttonColor="#c79248"
              textColor="white">
              CONTINUE SHOPPING
            </Button>
            <Button
              onPress={() => {
                navigation.navigate('Checkout');
              }}
              contentStyle={{height: verticalScale(50)}}
              labelStyle={{fontSize: 15}}
              style={{
                borderRadius: scale(50),
                marginLeft: 'auto',
                width: scale(160),
                justifyContent: 'center',
                margin:3,
              }}
              buttonColor="#c79248"
              textColor="white">
              PROCCED TO PAY
            </Button>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
