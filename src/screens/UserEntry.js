import {View, Text, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {TextInput} from 'react-native-paper';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import CustomButton from '../components/Custom/CustomButton';
import {useNavigation} from '@react-navigation/native';
import SQLite from 'react-native-sqlite-storage';
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

const UserEntry = () => {
  const [name, setName] = React.useState('');
  const [mobileno, setMobileno] = React.useState('');
  const navigation = useNavigation();

  useEffect(() => {
    createTable();
    // getData();
  }, []);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Users ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Mobile  NUMERIC );',
      );
    });
  };

  const setData = async () => {
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
        //     Name: name,
        //     Age: age
        // }
        // await AsyncStorage.setItem('UserData', JSON.stringify(user));
        await db.transaction(async tx => {
          // await tx.executeSql(
          //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
          // );
          await tx.executeSql('INSERT INTO Users (Name, Mobile) VALUES (?,?)', [
            name,
            mobileno,
          ]);
        });
        navigation.navigate('userreport');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getData = () => {
    try {
      // AsyncStorage.getItem('UserData')
      //     .then(value => {
      //         if (value != null) {
      //             navigation.navigate('Home');
      //         }
      //     })
      db.transaction(tx => {
        tx.executeSql('SELECT Name, Mobile FROM Users', [], (tx, results) => {
          // console.log(results);
          var len = results.rows.length;
          if (len > 0) {
            navigation.navigate('userreport');
          }
        });
      });
    } catch (error) {
      console.log(error);
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
        text={'ADD USER'}
        fontcolor={'white'}
        fontSize={scale(20)}
        onPress={setData}
      />
    </View>
  );
};

export default UserEntry;
