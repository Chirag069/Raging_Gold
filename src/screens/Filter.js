import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
  Dimensions,
  FlatList
} from 'react-native';
import React, { useState } from 'react';


const data = [
  {
    id:1,
    gender: 'All',
    selected:false
  },
  {
    id:2,
    gender: 'Male',
    selected:false
  },
  {
    id:3,
    gender: 'Female',
    selected:false
  },

];

const Screen_Width = Dimensions.get('window').width;
const Screen_height = Dimensions.get('window').height;



const Filter = () => {
  const [select,setSelect] = useState(data)

  const handleOnpress = (id)=>{
    const newItem =select.map((val)=>{
      if(val.id === id){
        return{...val,selected:!val.selected}
      }else{
        return val;
      }
    })
    setSelect(newItem)
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{flexDirection: 'row', height: Screen_height - 115}}>
          <View style={{backgroundColor: 'lightgrey', flexBasis: '40%'}}>
            <View style={{alignItems: 'center', marginVertical: 20}}>
              <Text style={{color: 'grey', fontSize: 15}}>FILTER BY</Text>
            </View>

            <View style={{alignItems: 'flex-start', borderBottomWidth: 0.5}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                }}>
                Gender
              </Text>
            </View>

            <View style={{alignItems: 'flex-start', borderBottomWidth: 0.5}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                }}>
                Item Group
              </Text>
            </View>

            <View style={{alignItems: 'flex-start', borderBottomWidth: 0.5}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                }}>
                Category
              </Text>
            </View>

            <View style={{alignItems: 'flex-start', borderBottomWidth: 0.5}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                }}>
                Sub Category
              </Text>
            </View>
          </View>

          <View style={{flex: 1}}>
            <View
              style={{
                alignItems: 'center',
                borderBottomWidth: 0.5,
                borderBottomColor: 'lightgrey',
              }}>
              <Text style={{color: 'grey', fontSize: 15, paddingVertical: 20}}>
                FILTER BY
              </Text>
            </View>
            <View style={{flexDirection:"row"}}>
            {select.map(({gender,id,selected}) => {
              return<Pressable onPress={()=>handleOnpress(id)}>
              <View  key={id} style={{marginVertical:10,marginHorizontal:5}}>
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: '#c79248',
                  backgroundColor:selected?"#c79248":"white",
                  color:selected?"white":"#c79248",
                  paddingHorizontal:5,
                  paddingVertical:5,
                  borderRadius: 5,
                  fontSize: 20,
                }}>
                {gender}
              </Text>
            </View>
            </Pressable>
            })}
            </View>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Filter;
