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
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginBottom: 10,
          }}>
          <Text style={{color: '#c79248', fontSize: 20}}>
            My Cart
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            backgroundColor: 'white',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 120, width: 120}}
                source={{
                  uri: 'https://staticimg.titan.co.in/Tanishq/Catalog/513220FIIAAP1_1.jpg',
                }}
              />
              <View
                style={{
                  borderColor: 'grey',
                  borderWidth: 0.5,
                  height: '80%',
                  alignSelf: 'center',
                }}
              />
            </View>
            <View style={{marginHorizontal: 10}}>
              <Text style={{color: 'black', fontSize: 20}}>Gold Ring</Text>
              <Text style={{color: '#c79248', fontSize: 20}}>Rs. 14500.00</Text>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <TouchableOpacity
                  onPress={() => dispatch(decrement())}
                  style={{
                    backgroundColor: '#c79248',
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: 12,
                    borderBottomLeftRadius: 10,
                  }}>
                  <Text style={{fontSize: 20, color: 'white'}}>-</Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: 12,
                  }}>
                  <Text style={{fontSize: 20}}>{counter}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => dispatch(increment())}
                  style={{
                    backgroundColor: '#c79248',
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    borderTopRightRadius: 10,
                    // borderBottomRightRadius: 10,
                  }}>
                  <Text style={{fontSize: 20, color: 'white'}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            backgroundColor: 'white',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 120, width: 120}}
                source={{
                  uri: 'https://staticimg.titan.co.in/Tanishq/Catalog/513220FIIAAP1_1.jpg',
                }}
              />
              <View
                style={{
                  borderColor: 'grey',
                  borderWidth: 0.5,
                  height: '80%',
                  alignSelf: 'center',
                }}
              />
            </View>
            <View style={{marginHorizontal: 10}}>
              <Text style={{color: 'black', fontSize: 20}}>Gold Ring</Text>
              <Text style={{color: '#c79248', fontSize: 20}}>Rs. 14500.00</Text>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <TouchableOpacity
                  onPress={() => dispatch(decrement())}
                  style={{
                    backgroundColor: '#c79248',
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: 12,
                    borderBottomLeftRadius: 10,
                  }}>
                  <Text style={{fontSize: 20, color: 'white'}}>-</Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: 12,
                  }}>
                  <Text style={{fontSize: 20}}>{counter}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => dispatch(increment())}
                  style={{
                    backgroundColor: '#c79248',
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    borderTopRightRadius: 10,
                  }}>
                  <Text style={{fontSize: 20, color: 'white'}}>+</Text>
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
            marginHorizontal: 10,
          }}>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{fontSize: 17, color: 'black'}}>Item Total</Text>
            <Text style={{fontSize: 17, color: 'black', marginTop: 5}}>
              CGST(1.5%)
            </Text>
            <Text style={{fontSize: 17, color: 'black', marginTop: 5}}>
              SGST(1.5%)
            </Text>
            <Text style={{fontSize: 17, color: 'black', marginTop: 5}}>
              Discount
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontWeight: 'bold',
                marginTop: 5,
              }}>
              Grand Total
            </Text>
          </View>

          <View style={{alignItems: 'flex-end', marginLeft: 30}}>
            <Text style={{fontSize: 17, color: 'black', marginTop: 5}}>
              29000.00
            </Text>
            <Text style={{fontSize: 17, color: 'black', marginTop: 5}}>
              CGST(1.5%)
            </Text>
            <Text style={{fontSize: 17, color: 'black', marginTop: 5}}>
              SGST(1.5%)
            </Text>
            <Text style={{fontSize: 17, color: 'black', marginTop: 5}}>
              Discount
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontWeight: 'bold',
                marginTop: 5,
              }}>
              Grand Total
            </Text>
          </View>
        </View>

        <View style={{marginHorizontal: 10}}>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: 'darkgrey',
              marginBottom: 10,
              marginTop: 20,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              borderColor:"darkgrey",
              borderWidth: 0.5,
              borderRadius: 30,
              flexDirection:"row"
            }}>
            <TextInput
            
            style={{marginLeft:10,}}
              placeholder="Apply discount coupon"
              placeholderTextColor="black"
            />
            <Button
              onPress={() => {
                navigation.navigate('Cart');
              }}
              contentStyle={{height: 50}}
              labelStyle={{fontSize: 20}}
              style={{
                borderRadius: 50,
                marginLeft: 'auto',
                width: '50%',
                justifyContent: 'center',
                margin:3,
              }}
              buttonColor="#c79248"
              textColor="white">
              Applay
            </Button>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: 'darkgrey',
              marginBottom: 10,
              marginTop: 10,
            }}
          />
          <View style={{flexDirection:"row"}}>
            <Button
              onPress={() => {
                navigation.navigate('Home');
              }}
              contentStyle={{height: 50}}
              labelStyle={{fontSize: 15}}
              style={{
                borderRadius: 50,
                marginLeft: 'auto',
                width: '48%',
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
              contentStyle={{height: 50}}
              labelStyle={{fontSize: 15}}
              style={{
                borderRadius: 50,
                marginLeft: 'auto',
                width: '48%',
                justifyContent: 'center',
                margin:3,
              }}
              buttonColor="#c79248"
              textColor="white">
              PROCEED TO PAY
            </Button>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
