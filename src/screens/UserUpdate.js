import {View, Text, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {TextInput} from 'react-native-paper';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import CustomButton from '../components/Custom/CustomButton';
import {useNavigation} from '@react-navigation/native';
import SQLite from 'react-native-sqlite-storage';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';

const db = SQLite.openDatabase(
  {
    name: 'chiragdb',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);

const UserUpdate = () => {
  const [name, setName] = React.useState('');
  const [mobileno, setMobileno] = React.useState('');
  const navigation = useNavigation();
  const {userupdateid} = useSelector(state => state.usercrudState);

  const updateData = async () => {
    const reg = /^[0]?[789]\d{9}$/;
    if (name.length == 0 || reg.test(mobileno) === false) {
      Toast.show({
        text1: 'Please enter valid data.',
        visibilityTime: 3000,
        autoHide: true,
        position: 'top',
        type: 'success',
      });
    } else {
      try {
        // var user = {
        //     Name: name
        // }
        // await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
        db.transaction(tx => {
          tx.executeSql(
            `UPDATE Users SET Name=?,Mobile=? WHERE ID=${userupdateid}`,
            [name, mobileno],
            () => {
              navigation.navigate('userreport');
              Toast.show({
                text1: 'Your data has been updated.',
                visibilityTime: 3000,
                autoHide: true,
                position: 'top',
                type: 'success',
              });
            },
            error => {
              console.log(error);
            },
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View
      style={{
        marginHorizontal: scale(10),
        marginVertical: verticalScale(10),
        flex: 1,
      }}>
      <TextInput
        style={{marginBottom: verticalScale(10)}}
        mode="outlined"
        label="Name"
        placeholder="Enter Name"
        value={name}
        onChangeText={name => setName(name)}
      />
      <TextInput
        keyboardType="number-pad"
        style={{marginBottom: verticalScale(20)}}
        maxLength={10}
        mode="outlined"
        label="Mobile No."
        placeholder="Enter Mobile No."
        value={mobileno}
        onChangeText={mobileno => setMobileno(mobileno)}
      />
      <CustomButton
        buttoncolor={'#c79248'}
        buttonwidth={scale(330)}
        buttonheight={verticalScale(40)}
        text={'UPDATE USER'}
        fontcolor={'white'}
        fontSize={scale(20)}
        onPress={updateData}
      />
    </View>
  );
};

export default UserUpdate;
