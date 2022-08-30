import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  StyleSheet,
} from 'react-native';
import {Input, NativeBaseProvider} from 'native-base';
import {Button} from 'react-native-paper';
import {DrawerActions, useNavigation} from '@react-navigation/native';

//icon
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';



const CustomHeader = () => {
  const navigation=useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
    style={{
      backgroundColor: '#c79248',
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
    <View style={{flexDirection: 'row'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              paddingHorizontal: 40,
              paddingVertical: 20,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Serch Any Product
            </Text>
            <Input
              autoFocus={true}
              width={'80%'}
              variant="underlined"
              _focus={{borderColor: '#c79248'}}
              _input={{fontSize: 17, placeholderTextColor: 'black'}}
              placeholder="Serch Product"
            />
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Button
                mode="text"
                onPress={() => setModalVisible(!modalVisible)}
                contentStyle={{}}
                labelStyle={{fontSize: 15}}
                style={{
                  borderColor: '#c79248',
                  borderWidth: 1,
                  borderRadius: 0,
                  height: 40,
                  justifyContent: 'center',
                  marginRight: 20,
                  width: '38%',
                }}
                buttonColor="white"
                textColor="#c79248">
                CANCEL
              </Button>
              <Button
                onPress={() => navigation.navigate('ProductList')}
                contentStyle={{height: 50}}
                labelStyle={{fontSize: 15}}
                style={{
                  borderRadius: 0,
                  height: 40,
                  justifyContent: 'center',
                  width: '38%',
                }}
                buttonColor="#c79248"
                textColor="white">
                SERCH
              </Button>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
        <Entypo name="list" size={35} color={'white'} />
      </TouchableOpacity>
      <Image
        style={{height: 40, width: 130, marginTop: 5}}
        source={require('../../../assets/Images/Raging-Gold.png')}
      />
    </View>
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <AntDesign name="search1" size={30} color="white" />
    </TouchableOpacity>
  </View>
  )
}

export default CustomHeader