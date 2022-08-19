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
import {useNavigation} from '@react-navigation/native'


const Screen_Width = Dimensions.get('window').width;

const SignUp = () => {
    const navigation=useNavigation()

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{height: 250, width: Screen_Width - 100}}
            source={require('../../assets/Images/logo.png')}
          />
        </View>
        <View style={{marginHorizontal: 20}}>

          <View style={{alignItems: 'center',marginVertical:10}}>
            <Text style={{fontSize: 20, color: 'black'}}>Customer Sign In</Text>
          </View>
          <TextInput
          
            label="Name"
            style={{backgroundColor: 'white'}}
            onChangeText={text => setText(text)}
          />
          <TextInput
            label="Mobile No."
            style={{backgroundColor: 'white'}}
            onChangeText={text => setText(text)}
          />
           <TextInput
            label="Email Id"
            style={{backgroundColor: 'white'}}
            onChangeText={text => setText(text)}
          />
           <TextInput
            label="Password"
            style={{backgroundColor: 'white'}}
            onChangeText={text => setText(text)}
          />
           <TextInput
            label="Confirm Password"
            style={{backgroundColor: 'white'}}
            onChangeText={text => setText(text)}
          />
        <View style={{marginBottom:30,marginTop:50}}>
        <Button
            contentStyle={{height: 70}}
            labelStyle={{fontSize: 20}}
            style={{borderRadius: 50}}
            buttonColor="#c79248"
            textColor="white"
            onPress={() => navigation.navigate('SignIn')}>
            SIGN Up
          </Button>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom:10
          }}>
          <View style={{flex: 1, height: 1, backgroundColor: 'darkgrey'}} />
        </View>
        <Pressable onPress={()=>navigation.navigate('SignIn')}>
        <Text style={{color: 'black',alignSelf:"center"}}>
            You are not a registered use click here
          </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
