import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  FlatList,
} from 'react-native';
import React,{useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';


const Screen_Width = Dimensions.get('window').width;
const Screen_height = Dimensions.get('window').height;

const data = [
  {
    id: 1,
    title: 'Product 1',
    price: ' ₹ 16000/-',
    image:
      'https://staticimg.titan.co.in/Tanishq/Catalog/503920FCHAA29_1.jpg',
    selected:'false'
  },
  {
    id: 2,
    title: 'Product 2',
    price: ' ₹ 19000/-',
    image:
      'https://staticimg.titan.co.in/Tanishq/Catalog/503119FLRAA02_1.jpg',
      selected:'false'
  },
  {
    id: 3,
    title: 'Product 3',
    price: ' ₹ 5000/-',
    image:
      'https://staticimg.titan.co.in/Tanishq/Catalog/502119FAZAA02_1.jpg',
      selected:'false'
  },
  {
    id: 4,
    title: 'Product 4',
    price: ' ₹ 8000/-',
    image:
      'https://staticimg.titan.co.in/Tanishq/Catalog/501206FANABP5_1.jpg',
      selected:'false'
  },
  {
    id: 5,
    title: 'Product 5',
    price: ' ₹ 30000/-',
    image:
      'https://staticimg.titan.co.in/Tanishq/Catalog/512318FGLAA18_1.jpg',
      selected:'false'

  },
  {
    id: 6,
    title: 'Product 6',
    price: ' ₹ 15000/-',
    image:
      'https://staticimg.titan.co.in/Tanishq/Catalog/502219FCLAAP4_1.jpg',
      selected:'false'
  },
  {
    id: 7,
    title: 'Product 7',
    price: ' ₹ 17000/-',
    image:
      'https://staticimg.titan.co.in/Tanishq/Catalog/511170FCEAAP5_1.jpg',
      selected:'false'
  },
  {
    id: 8,
    title: 'Product 8',
    price: ' ₹ 17000/-',
    image:
      'https://staticimg.titan.co.in/Tanishq/Catalog/500462FOAAA12_1.jpg',
      selected:'false'
  },
  {
    id: 9,
    title: 'Product 9',
    price: ' ₹ 10000/-',
    image:
      'https://staticimg.titan.co.in/Tanishq/Catalog/513220FIIAAP1_1.jpg',
      selected:'false'
  },
  {
    id: 10,
    title: 'Product 10',
    price: ' ₹ 13000/-',
    image:
      'https://staticimg.titan.co.in/Tanishq/Catalog/500005FWAAA02_1.jpg',
      selected:'false'
  },
  {
    id: 11,
    title: 'Product 11',
    price: ' ₹ 18000/-',
    image:
      'https://staticimg.titan.co.in/Tanishq/Catalog/500272FCAAA11_1.jpg',
      selected:'false'
  },
  {
    id: 12,
    title: 'Product 12',
    price: ' ₹ 18000/-',
    image:
      'https://staticimg.titan.co.in/Tanishq/Catalog/501206FAWABP5_1.jpg',
      selected:'false'
  },
];

const ProductList = () => {
  const navigation=useNavigation()
  const [select,setSelect] = useState(data)

  const handleOnpress = (item)=>{
    const newItem =select.map((val)=>{
      if(val.id === item.id){
        return{...val,selected:!val.selected}
      }else{
        return val;
      }
    })
    setSelect(newItem)
  }
  

  return (<>
    <View style={{backgroundColor:"white",paddingHorizontal:scale(10),paddingVertical:verticalScale(10),marginBottom:verticalScale(17)}}>
        <Text style={{color:"#c79248",fontSize:scale(20)}}>Exclusive Gold Ring</Text>
      </View>
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={select}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id;
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={post => {
          const item = post.item;
          return (
            <Pressable onPress={() =>navigation.navigate('ProductDetail')}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: scale(160),
                  marginHorizontal: scale(5),

                }}>
                <ImageBackground
                  style={{height:scale(140), width:scale(150), alignSelf: 'center'}}
                  source={{
                    uri: item.image,
                  }}>
                  <Pressable onPress={() => handleOnpress(item)}>
                    <Ionicons
                      name={item.selected ?  "heart-outline":"heart"}
                      color={'#c79248'}
                      size={scale(30)}
                      style={{alignSelf: 'flex-end', padding: scale(2)}}
                    />
                  </Pressable>
                </ImageBackground>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: scale(17), marginTop: verticalScale(5), marginBottom: verticalScale(5)}}>
                    {item.price}
                  </Text>
                </View>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: scale(5),
    backgroundColor: '#F5F5F5',
  },
  listContainer: {
    alignItems: 'center',
  },
  separator: {
    marginTop: scale(10),
  },





  
});

export default ProductList;
