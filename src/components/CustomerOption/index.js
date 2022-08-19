import {View, Image, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'

const Screen_Width = Dimensions.get('window').width;

const CustomerOption = () => {
  const navigation=useNavigation()
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View style={{alignItems: 'center', marginVertical: 50}}>
          <Image
            style={{height: 350, width: Screen_Width - 50}}
            source={require('../../../assets/Images/logo.png')}
          />
        </View>
        <View style={{marginVertical:"20%"}}>
        <View style={{marginHorizontal: 40}}>
          <Button
            contentStyle={{height: 70}}
            labelStyle={{fontSize: 20}}
            style={{borderRadius: 50}}
            buttonColor="#405070"
            textColor="white"
            onPress={() => console.log('Pressed')}>
            ARE YOU BUYER
          </Button>
        </View>
        <View style={{marginHorizontal: 40,marginVertical:30}}>
          <Button
            contentStyle={{height: 70}}
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
