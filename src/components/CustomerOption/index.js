import {View, Image, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const Screen_Width = Dimensions.get('window').width;

const CustomerOption = () => {
  const navigation=useNavigation()
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View style={{alignItems: 'center', marginVertical: verticalScale(50)}}>
          <Image
            style={{height: verticalScale(200), width:  scale(180)}}
            source={require('../../../assets/Images/Logo1.png')}
          />
        </View>
        <View style={{marginVertical:verticalScale(30)}}>
        <View style={{marginHorizontal: scale(40)}}>
          <Button
            contentStyle={{height:  verticalScale(50)}}
            labelStyle={{fontSize: 20}}
            style={{borderRadius: 50}}
            buttonColor="#405070"
            textColor="white"
            onPress={() => console.log('Pressed')}>
            ARE YOU BUYER
          </Button>
        </View>
        <View style={{marginHorizontal: scale(40),marginVertical:verticalScale(30)}}>
          <Button
            contentStyle={{height:  verticalScale(50)}}
            labelStyle={{fontSize: 20}}
            style={{borderRadius: 50}}
            buttonColor="#c79248"
            textColor="white"
            onPress={() => navigation.navigate('SignIn')}>
            ARE YOU CUSTOMER
          </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomerOption;
