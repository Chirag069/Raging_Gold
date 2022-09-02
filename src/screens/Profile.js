import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{position: 'relative'}}>
      <ScrollView>
        <View
          style={{
            height: scale(700),
            width: scale(550),
            borderRadius: scale(400),
            marginTop: scale(-500),
            marginLeft: scale(-100),
            backgroundColor: '#c79248',
            // alignItems:"center"
          }}>
          <View
            style={{
              backgroundColor: '#c79248',
              flexDirection: 'row',
              marginTop: scale(500),
              marginLeft: scale(100),
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo name="chevron-left" size={scale(40)} color="white" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: scale(25),
                color: 'white',
                paddingLeft: scale(90),
              }}>
              PROFILE
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: scale(-90)}}>
          <Image
            style={{height: scale(150), width: scale(150), borderRadius: 20}}
            source={require('../../assets/Images/profile.jpg')}
          />
        </View>

        <View style={{alignItems: 'center', marginTop: scale(10)}}>
          <Text style={{fontSize: scale(20), color: '#c79248'}}>
            Ramani Chirag
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: scale(10),
            marginVertical: verticalScale(10),
            paddingHorizontal: scale(10),
            paddingVertical: verticalScale(10),
            backgroundColor: 'white',
          }}>

          <View
            style={{
              borderBottomWidth: scale(1),
              borderBottomColor: 'lightgrey',

            }}>
            <Text
              style={{
                fontSize: scale(20),
                color: '#c79248',
                paddingBottom:scale(3)
              }}>
              User Detail
            </Text>
          </View>

          <View
            style={{
              borderBottomWidth: scale(1),
              borderBottomColor: 'lightgrey',
              flexDirection:"row",
              justifyContent:"space-between"
            }}>
            <Text
              style={{
                fontSize: scale(17),
                color: 'grey',
                paddingBottom:scale(3)
              }}>
              Name
            </Text>
            <Text
              style={{
                fontSize: scale(17),
                color: '#333',
                paddingBottom:scale(3)
              }}>
              Chirag
            </Text>
          </View>

          <View
            style={{
              borderBottomWidth: scale(1),
              borderBottomColor: 'lightgrey',
              flexDirection:"row",
              justifyContent:"space-between"
            }}>
            <Text
              style={{
                fontSize: scale(17),
                color: 'grey',
                paddingBottom:scale(3)
              }}>
              Email
            </Text>
            <Text
              style={{
                fontSize: scale(17),
                color: '#333',
                paddingBottom:scale(3)
              }}>
              ramanichirag069@gmail.com
            </Text>
          </View>

          <View
            style={{
              borderBottomWidth: scale(1),
              borderBottomColor: 'lightgrey',
              flexDirection:"row",
              justifyContent:"space-between"
            }}>
            <Text
              style={{
                fontSize: scale(17),
                color: 'grey',
                paddingBottom:scale(3)
              }}>
              Contect No.
            </Text>
            <Text
              style={{
                fontSize: scale(17),
                color: '#333',
                paddingBottom:scale(3)
              }}>
              9067222920
            </Text>
          </View>

          <View
            style={{
              borderBottomWidth: scale(1),
              borderBottomColor: 'lightgrey',
              flexDirection:"row",
              justifyContent:"space-between"
            }}>
            <Text
              style={{
                fontSize: scale(17),
                color: 'grey',
                paddingBottom:scale(3)
              }}>
              City
            </Text>
            <Text
              style={{
                fontSize: scale(17),
                color: '#333',
                paddingBottom:scale(3)
              }}>
              Ahmedabad
            </Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
