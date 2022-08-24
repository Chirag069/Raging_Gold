import {View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { useDispatch ,useSelector } from 'react-redux';
import {increment, decrement } from '../../redux/actions/CounterActions'

const Cart = () => {
  const dispatch = useDispatch()
  const {counter} = useSelector(state => state.counterState)
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
            Exclusive Gold Ring
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
              <View style={{flexDirection: 'row',marginTop:15}}>
                <TouchableOpacity
                onPress={() => dispatch(decrement())}
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: 12,
                    borderBottomLeftRadius: 10,
                  }}>
                  <Text style={{fontSize: 20}}>-</Text>
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
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    borderTopRightRadius: 10,
                    // borderBottomRightRadius: 10,
                  }}>
                  <Text style={{fontSize: 20}}>+</Text>
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
              <View style={{flexDirection: 'row',marginTop:15}}>
                <TouchableOpacity
                onPress={() => dispatch(decrement())}
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: 12,
                    borderBottomLeftRadius: 10,
                  }}>
                  <Text style={{fontSize: 20}}>-</Text>
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
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    borderTopRightRadius: 10,
                    // borderBottomRightRadius: 10,
                  }}>
                  <Text style={{fontSize: 20}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
