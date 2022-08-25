import {View, Text, SafeAreaView, ScrollView,Image,Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Input, NativeBaseProvider,} from 'native-base';
import {Button} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

const Screen_Width = Dimensions.get('window').width;

const Checkout = () => {
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
            Checkout
          </Text>
        </View>

        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <View style={{backgroundColor: 'white', padding: 10}}>
            <Text style={{fontSize: 20, color: '#c79248'}}>Order Summary</Text>
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
                <Text style={{fontSize: 17, color: 'black'}}>Total Items</Text>
                <Text style={{fontSize: 17, color: 'black'}}>Discount</Text>
                <Text style={{fontSize: 17, color: 'black'}}>
                  Amount Payable
                </Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: 17, color: 'black'}}>2</Text>
                <Text style={{fontSize: 17, color: 'black'}}>1000.00</Text>
                <Text style={{fontSize: 17, color: 'black'}}>28870.00</Text>
              </View>
            </View>
          </View>

          <View
            style={{backgroundColor: 'white', padding: 10, marginVertical: 10}}>
            <Text style={{fontSize: 20, color: '#c79248'}}>Billing Address</Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: 'darkgrey',
                marginVertical: 10,
              }}
            />
            <Input variant="underlined" placeholder="Name" size='lg' height={9}/>
            <Input variant="underlined" placeholder="Email Id" size='lg'  height={9}/>
            <Input variant="underlined" placeholder="Contact No." size='lg' height={9}/>
            <Input variant="underlined" placeholder="Address" size='lg' height={9}/>
            <Input variant="underlined" placeholder="Pin code" size='lg' height={9} />
            <Input variant="underlined" placeholder="City" size='lg' height={9} />
            <Input variant="underlined" placeholder="State" size='lg'  height={9}/>
          </View>

          <View
            style={{
              borderWidth: 0.5,
              borderColor: 'darkgrey',
              marginVertical: 5,
            }}
          />

          <Text style={{fontSize: 20, color: 'black', alignSelf: 'center',marginBottom:20,marginTop:10}}>
            Select Payment Options
          </Text>

          <Image style={{width:Screen_Width-20,height:90,alignSelf:"center"}} source={require('../../assets/Images/paymentoptions.png')}/>
        </View>
        <Button
              onPress={() => {
                navigation.navigate('OrderHistory');
              }}
              contentStyle={{height: 50}}
              labelStyle={{fontSize: 15}}
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
