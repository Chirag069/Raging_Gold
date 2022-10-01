import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import SQLite from 'react-native-sqlite-storage';
import {scale, verticalScale} from 'react-native-size-matters';
import {FlatList} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import Toast from 'react-native-toast-message';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {UserCRUDAction} from '../../redux/actions/usercrudAction';
import {useDispatch, useSelector} from 'react-redux';

const UserReport = () => {
  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, []),
  );

  const [name, setName] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [userdata, setUserdata] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

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

  const getData = () => {
    try {
      // AsyncStorage.getItem('UserData')
      //     .then(value => {
      //         if (value != null) {
      //             let user = JSON.parse(value);
      //             setName(user.Name);
      //             setAge(user.Age);
      //         }
      //     })
      db.transaction(tx => {
        tx.executeSql(
          'SELECT Name, Mobile,id FROM Users',
          [],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              let result = [];
              for (let i = 0; i < len; i++) {
                let item = results.rows.item(i);

                result.push({
                  id: item.ID,
                  name: item.Name,
                  mobile: item.Mobile,
                });
              }
              setUserdata(result);
            }
          },
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeuserdata = removeid => {
    try {
      // await AsyncStorage.clear();
      db.transaction(tx => {
        tx.executeSql(
          `DELETE FROM Users where ID = ${removeid} `,
          [],
          () => {
            getData();
            Toast.show({
              text1: 'Data remove successfully',
              visibilityTime: 3000,
              autoHide: true,
              position: 'top',
              type: 'error',
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
  };

  const updateuser = updateid => {
    navigation.navigate('userupdate');
    dispatch(UserCRUDAction(updateid));
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <Text
          style={{
            fontSize: scale(20),
            color: '#333',
            alignSelf: 'center',
            marginVertical: verticalScale(10),
          }}>
          User Details
        </Text>
      </View>
      {userdata.length !== 0 ? (
        <FlatList
          data={userdata}
          keyExtractor={item => item.id}
          contentContainerStyle={{}}
          ItemSeparatorComponent={() => {
            <View style={{marginTop: verticalScale(20)}} />;
          }}
          renderItem={post => {
            const item = post.item;
            const index = item.id;
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: scale(10),
                  marginVertical: verticalScale(5),
                  backgroundColor: '#fff',
                  paddingHorizontal: scale(10),
                  paddingVertical: verticalScale(10),
                }}>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: scale(20), color: '#333'}}>
                      Name:{' '}
                    </Text>
                    <Text style={{fontSize: scale(20), color: '#c79248'}}>
                      {item.name}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: scale(20), color: '#333'}}>
                      Mobile:{' '}
                    </Text>
                    <Text style={{fontSize: scale(20), color: '#c79248'}}>
                      {item.mobile}
                    </Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity onPress={() => updateuser(item.id)}>
                    <Feather name="edit" size={scale(25)} color="green" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => removeuserdata(item.id)}>
                    <Ionicons
                      name="trash-outline"
                      size={scale(25)}
                      color="red"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: scale(20), color: '#333'}}>
            Data not found
          </Text>
        </View>
      )}
    </View>
  );
};

export default UserReport;
