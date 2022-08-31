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

const Screen_Width = Dimensions.get('window').width;

const Checkout = () => {
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
          <Text style={{color: '#c79248', fontSize: scale(20)}}>Checkout</Text>
        </View>

        <View
          style={{
            marginHorizontal: scale(10),
            marginVertical: verticalScale(10),
          }}>
          <View style={{backgroundColor: 'white', padding: scale(10)}}>
            <Text style={{fontSize: scale(20), color: '#c79248'}}>
              Order Summary
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
                  Total Items
                </Text>
                <Text style={{fontSize: scale(17), color: 'black'}}>
                  Discount
                </Text>
                <Text style={{fontSize: scale(17), color: 'black'}}>
                  Amount Payable
                </Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: scale(17), color: 'black'}}>2</Text>
                <Text style={{fontSize: scale(17), color: 'black'}}>
                  1000.00
                </Text>
                <Text style={{fontSize: scale(17), color: 'black'}}>
                  28870.00
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{backgroundColor: 'white', padding: 10, marginVertical: 10}}>
            <Text style={{fontSize: scale(20), color: '#c79248'}}>
              Billing Address
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

          <View
            style={{
              borderWidth: scale(0.5),
              borderColor: 'darkgrey',
              marginVertical: verticalScale(5),
            }}
          />

          <Text
            style={{
              fontSize: scale(20),
              color: 'black',
              alignSelf: 'center',
              marginBottom: verticalScale(20),
              marginTop: verticalScale(10),
            }}>
            Select Payment Options
          </Text>

          <Image
            style={{width: scale(250), height: scale(60), alignSelf: 'center'}}
            source={require('../../assets/Images/paymentoptions.png')}
          />
        </View>
        <Button
          onPress={() => {
            navigation.navigate('OrderHistory');
          }}
          contentStyle={{height: verticalScale(50)}}
          labelStyle={{fontSize: 15}}
          style={{
            borderRadius: scale(50),
            marginLeft: 'auto',
            width: scale(170),
            justifyContent: 'center',
            margin: 3,
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
          buttonColor="#c79248"
          textColor="white">
          PROCEED TO PAY
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Checkout />
    </NativeBaseProvider>
  );
};
