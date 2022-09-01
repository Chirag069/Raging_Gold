import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Input, NativeBaseProvider} from 'native-base';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import CustomButton from '../components/Custom/CustomButton';

const Screen_Width = Dimensions.get('window').width;

const OrderHistory = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: scale(10),
            paddingVertical: verticalScale(10),
            marginBottom: verticalScale(10),
          }}>
          <Text style={{color: '#c79248', fontSize: scale(20)}}>
            Order History
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: scale(10),
            marginVertical: verticalScale(10),
          }}>
          <View style={{backgroundColor: 'white', padding: scale(10)}}>
            <Text style={{fontSize: scale(20), color: '#c79248'}}>
              Order Id #121
            </Text>
            <View
              style={{
                borderWidth: scale(0.5),
                borderColor: 'darkgrey',
                marginVertical: verticalScale(10),
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{alignItems: 'flex-start'}}>
                <Text style={{fontSize: scale(17), color: 'black'}}>
                  Incoice No.
                </Text>
                <Text style={{fontSize: scale(17), color: 'black'}}>
                  OrderDate
                </Text>
                <Text style={{fontSize: scale(17), color: 'black'}}>
                  Order Amount
                </Text>
                <Text style={{fontSize: scale(17), color: 'black'}}>
                  Payment Methord
                </Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: scale(17), color: 'black'}}>
                  VP - 1256/2020-21
                </Text>
                <Text style={{fontSize: scale(17), color: 'black'}}>
                  25-may-2020
                </Text>
                <Text style={{fontSize: scale(17), color: 'black'}}>
                  2870.00
                </Text>
                <Text style={{fontSize: scale(17), color: 'black'}}>Paytm</Text>
              </View>
            </View>
          </View>

          <View
            style={{backgroundColor: 'white', padding: 10, marginVertical: 10}}>
            <Text style={{fontSize: scale(20), color: '#c79248'}}>
              Billing and shipping Address
            </Text>
            <View
              style={{
                borderWidth: scale(0.5),
                borderColor: 'darkgrey',
                marginVertical: verticalScale(10),
              }}
            />
            <Input
              variant="underlined"
              placeholder="Name"
              size="lg"
              height={9}
            />
            <Input
              variant="underlined"
              placeholder="Email Id"
              size="lg"
              height={9}
            />
            <Input
              variant="underlined"
              placeholder="Contact No."
              size="lg"
              height={9}
            />
            <Input
              variant="underlined"
              placeholder="Address"
              size="lg"
              height={9}
            />
            <Input
              variant="underlined"
              placeholder="Pin code"
              size="lg"
              height={9}
            />
            <Input
              variant="underlined"
              placeholder="City"
              size="lg"
              height={9}
            />
            <Input
              variant="underlined"
              placeholder="State"
              size="lg"
              height={9}
            />
          </View>

          <View style={{backgroundColor: 'white', padding: scale(10)}}>
            <Text style={{fontSize: scale(20), color: '#c79248'}}>
              Product Summary
            </Text>
            <View
              style={{
                borderWidth: scale(0.5),
                borderColor: 'darkgrey',
                marginVertical: verticalScale(10),
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{alignItems: 'flex-start'}}>
                <Text style={{fontSize: scale(17), color: 'black'}}>Items</Text>
                <Text style={{fontSize: scale(17), color: 'grey'}}>
                  Gold Ring
                </Text>
                <Text style={{fontSize: scale(17), color: 'grey'}}>
                  Gold Ring
                </Text>
              </View>

              <View style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: scale(17), color: 'black'}}>Qty</Text>
                <Text style={{fontSize: scale(17), color: 'grey'}}>1</Text>
                <Text style={{fontSize: scale(17), color: 'grey'}}>1</Text>
              </View>

              <View style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: scale(17), color: 'black'}}>
                  Amount
                </Text>
                <Text style={{fontSize: scale(17), color: 'grey'}}>
                  14000.00
                </Text>
                <Text style={{fontSize: scale(17), color: 'grey'}}>
                  14000.00
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: verticalScale(10),
          }}>
          <CustomButton
            buttoncolor={'#c79248'}
            buttonwidth={scale(180)}
            buttonheight={verticalScale(50)}
            borderradius={scale(30)}
            text={'View Invoice'}
            fontcolor={'white'}
            fontSize={scale(15)}
            onPress={() => {
              navigation.navigate('MyInvoice');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default () => {
  return (
    <NativeBaseProvider>
      <OrderHistory />
    </NativeBaseProvider>
  );
};
