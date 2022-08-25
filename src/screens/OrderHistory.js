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
import { useNavigation } from '@react-navigation/native';

const Screen_Width = Dimensions.get('window').width;

const OrderHistory = () => {
    const navigation=useNavigation()
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
            Order History
          </Text>
        </View>

        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <View style={{backgroundColor: 'white', padding: 10}}>
            <Text style={{fontSize: 20, color: '#c79248'}}>Order Id #121</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: 'darkgrey',
                marginVertical: 10,
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{alignItems: 'flex-start'}}>
                <Text style={{fontSize: 17, color: 'black'}}>Incoice No.</Text>
                <Text style={{fontSize: 17, color: 'black'}}>OrderDate</Text>
                <Text style={{fontSize: 17, color: 'black'}}>Order Amount</Text>
                <Text style={{fontSize: 17, color: 'black'}}>
                  Payment Methord
                </Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: 17, color: 'black'}}>
                  VP - 1256/2020-21
                </Text>
                <Text style={{fontSize: 17, color: 'black'}}>25-may-2020</Text>
                <Text style={{fontSize: 17, color: 'black'}}>2870.00</Text>
                <Text style={{fontSize: 17, color: 'black'}}>Paytm</Text>
              </View>
            </View>
          </View>

          <View
            style={{backgroundColor: 'white', padding: 10, marginVertical: 10}}>
            <Text style={{fontSize: 20, color: '#c79248'}}>
              Billing and shipping Address
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: 'darkgrey',
                marginVertical: 10,
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

          <View style={{backgroundColor: 'white', padding: 10}}>
            <Text style={{fontSize: 20, color: '#c79248'}}>
              Product Summary
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: 'darkgrey',
                marginVertical: 10,
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{alignItems: 'flex-start'}}>
                <Text style={{fontSize: 17, color: 'black'}}>Items</Text>
                <Text style={{fontSize: 17, color: 'grey'}}>Gold Ring</Text>
                <Text style={{fontSize: 17, color: 'grey'}}>Gold Ring</Text>
              </View>

              <View style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: 17, color: 'black'}}>Qty</Text>
                <Text style={{fontSize: 17, color: 'grey'}}>1</Text>
                <Text style={{fontSize: 17, color: 'grey'}}>1</Text>
              </View>

              <View style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: 17, color: 'black'}}>Amount</Text>
                <Text style={{fontSize: 17, color: 'grey'}}>14000.00</Text>
                <Text style={{fontSize: 17, color: 'grey'}}>14000.00</Text>
              </View>
            </View>
          </View>
        </View>
        <Button
              onPress={() => {
                navigation.navigate('MyInvoice');
              }}
              contentStyle={{height: 50}}
              labelStyle={{fontSize: 20}}
              style={{
                borderRadius: 50,
                marginLeft: 'auto',
                width: '48%',
                justifyContent: 'center',
                margin:3,
                marginRight:"auto",
                marginLeft:'auto'
              }}
              buttonColor="#c79248"
              textColor="white">
              View Invoice
            </Button>
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
