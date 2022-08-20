import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Pressable,
  Keyboard
} from 'react-native';
import React,{useEffect,useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
import {useSelector, useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
import {userLoginAction} from '../../redux/actions/authActons'
import { sha1 } from 'react-native-sha1';



const Screen_Width = Dimensions.get('window').width;



const SignIn = () => {
    const navigation=useNavigation()
    const dispatch = useDispatch();
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [pwd,setPwd]=useState(null)

    sha1(passwordInput).then( hash => {
      setPwd(hash);
  })

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        setEmailInput('');
        setPasswordInput('');
      });
    return unsubscribe;
    }, [navigation]);

  

    const userSignIn = () => {
      if (emailInput && pwd) {
        dispatch(userLoginAction(emailInput, pwd));
      }else {
        Toast.show({
          text1: 'you forgot to enter something',
          visibilityTime: 3000,
          autoHide: true,
          position: 'top',
          type: 'error',
        });
      }
    }
    
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
            onChangeText={setEmailInput}
            value={emailInput}
          />
          <TextInput
            label="Password"
            style={{backgroundColor: 'white'}}
            onChangeText={setPasswordInput}
                  value={passwordInput}
          />
        </View>
        <View style={{paddingHorizontal: 40}}>
          <Button
          onPress={() => {
            Keyboard.dismiss();
            userSignIn();
          }}
            contentStyle={{height: 70}}
            labelStyle={{fontSize: 20}}
            style={{borderRadius: 50}}
            buttonColor="#c79248"
            textColor="white"
            >
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
          <Pressable onPress={()=>navigation.navigate('SignUp')}>
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
