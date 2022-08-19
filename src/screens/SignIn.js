import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import {TextInput, Button} from 'react-native-paper';

const Screen_Width = Dimensions.get('window').width;

const SignIn = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View style={{alignItems: 'center', marginVertical: 50}}>
          <Image
            style={{height: 350, width: Screen_Width - 50}}
            source={require('../../assets/Images/logo.png')}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: 'black'}}>Customer Sign In</Text>
        </View>
        <View style={{marginHorizontal: 20, marginVertical: 30}}>
          <TextInput
            label="Email/Mobile No."
            style={{backgroundColor: 'white'}}
            onChangeText={text => setText(text)}
          />
          <TextInput
            label="Password"
            style={{backgroundColor: 'white'}}
            onChangeText={text => setText(text)}
          />
        </View>
        <View style={{paddingHorizontal: 40}}>
          <Button
            contentStyle={{height: 70}}
            labelStyle={{fontSize: 20}}
            style={{borderRadius: 50}}
            buttonColor="#c79248"
            textColor="white"
            onPress={() => navigation.navigate('SignIn')}>
            SIGN IN
          </Button>
        </View>
        <Pressable style={{alignItems: 'center', marginVertical: 10}}>
          <Text>Forget Password?</Text>
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <View style={{flex: 1, height: 1, backgroundColor: 'darkgrey'}} />
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{color: 'black'}}>
            You are not a registered use click{' '}
          </Text>
          <Pressable>
            <Text style={{textDecorationLine: 'underline', color: 'black'}}>
              here
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
