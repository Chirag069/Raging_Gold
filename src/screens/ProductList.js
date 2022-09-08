import {
  View,
  Text,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import CustomButton from '../components/Custom/CustomButton';
import {useSelector} from 'react-redux';
import {ProductListAction} from '../../redux/actions/authActons';
import {useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

const Screen_Width = Dimensions.get('window').width;
const Screen_height = Dimensions.get('window').height;

const productdata = [
  {
    id: 1,
    title: 'Product 1',
    price: ' ₹ 16000/-',
    image: 'https://staticimg.titan.co.in/Tanishq/Catalog/503920FCHAA29_1.jpg',
    selected: 'false',
  },
  {
    id: 2,
    title: 'Product 2',
    price: ' ₹ 19000/-',
    image: 'https://staticimg.titan.co.in/Tanishq/Catalog/503119FLRAA02_1.jpg',
    selected: 'false',
  },
  {
    id: 3,
    title: 'Product 3',
    price: ' ₹ 5000/-',
    image: 'https://staticimg.titan.co.in/Tanishq/Catalog/502119FAZAA02_1.jpg',
    selected: 'false',
  },
  {
    id: 4,
    title: 'Product 4',
    price: ' ₹ 8000/-',
    image: 'https://staticimg.titan.co.in/Tanishq/Catalog/501206FANABP5_1.jpg',
    selected: 'false',
  },
  {
    id: 5,
    title: 'Product 5',
    price: ' ₹ 30000/-',
    image: 'https://staticimg.titan.co.in/Tanishq/Catalog/512318FGLAA18_1.jpg',
    selected: 'false',
  },
  {
    id: 6,
    title: 'Product 6',
    price: ' ₹ 15000/-',
    image: 'https://staticimg.titan.co.in/Tanishq/Catalog/502219FCLAAP4_1.jpg',
    selected: 'false',
  },
  {
    id: 7,
    title: 'Product 7',
    price: ' ₹ 17000/-',
    image: 'https://staticimg.titan.co.in/Tanishq/Catalog/511170FCEAAP5_1.jpg',
    selected: 'false',
  },
  {
    id: 8,
    title: 'Product 8',
    price: ' ₹ 17000/-',
    image: 'https://staticimg.titan.co.in/Tanishq/Catalog/500462FOAAA12_1.jpg',
    selected: 'false',
  },
  {
    id: 9,
    title: 'Product 9',
    price: ' ₹ 10000/-',
    image: 'https://staticimg.titan.co.in/Tanishq/Catalog/513220FIIAAP1_1.jpg',
    selected: 'false',
  },
  {
    id: 10,
    title: 'Product 10',
    price: ' ₹ 13000/-',
    image: 'https://staticimg.titan.co.in/Tanishq/Catalog/500005FWAAA02_1.jpg',
    selected: 'false',
  },
  {
    id: 11,
    title: 'Product 11',
    price: ' ₹ 18000/-',
    image: 'https://staticimg.titan.co.in/Tanishq/Catalog/500272FCAAA11_1.jpg',
    selected: 'false',
  },
  {
    id: 12,
    title: 'Product 12',
    price: ' ₹ 18000/-',
    image: 'https://staticimg.titan.co.in/Tanishq/Catalog/501206FAWABP5_1.jpg',
    selected: 'false',
  },
];

const ProductList = () => {
  const {authLoading, ProductList} = useSelector(state => state.authState);
  console.log(ProductList);
  const data = ProductList.data;
  const navigation = useNavigation();
  const [select, setSelect] = useState(data);

  const dispatch = useDispatch();
  // console.log(ProductList.data);

  const handleOnpress = item => {
    const newItem = select.map(val => {
      // console.log(val);
      if (val.id === item.id) {
        return {...val, selected: !val.selected};
      } else {
        return val;
      }
    });
    setSelect(newItem);
  };

  // useEffect(() => {
  //   handleOnpress();
  // }, []);

  return (
    <>
      <Spinner
        visible={authLoading}
        textContent={'Loading...'}
        textStyle={{color: '#fff'}}
        overlayColor="rgba(0,0,0, 0.5)"
        size={scale(30)}
      />
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: scale(10),
          paddingVertical: verticalScale(10),
          marginBottom: verticalScale(17),
        }}>
        <Text style={{color: '#c79248', fontSize: scale(20)}}>
          Exclusive Gold Ring
        </Text>
      </View>

      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={data}
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
            // console.log(item);
            return (
              <Pressable onPress={() => navigation.navigate('ProductDetail')}>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: scale(160),
                    marginHorizontal: scale(5),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Pressable onPress={() => handleOnpress(item)}>
                      <Ionicons
                        name={item.selected ? 'cart-outline' : 'cart'}
                        color={'#c79248'}
                        size={scale(30)}
                        style={{alignSelf: 'flex-end', padding: scale(2)}}
                      />
                    </Pressable>
                    <Pressable onPress={() => handleOnpress(item)}>
                      <Ionicons
                        name={item.selected ? 'heart-outline' : 'heart'}
                        color={'#c79248'}
                        size={scale(30)}
                        style={{alignSelf: 'flex-end', padding: scale(2)}}
                      />
                    </Pressable>
                  </View>

                  <Image
                    style={{
                      height: scale(140),
                      width: scale(160),
                      alignSelf: 'center',
                    }}
                    source={{
                      uri: item.image,
                    }}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: scale(5),
                    }}>
                    <Text
                      style={{
                        fontSize: scale(12),
                        marginTop: verticalScale(5),
                        marginBottom: verticalScale(5),
                      }}>
                      {item.design_name}
                    </Text>
                    <Text
                      style={{
                        fontSize: scale(12),
                        marginTop: verticalScale(5),
                        marginBottom: verticalScale(5),
                      }}>
                      GW:{item.item}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: scale(5),
                    }}>
                    <Text
                      style={{
                        fontSize: scale(12),
                        marginTop: verticalScale(5),
                        marginBottom: verticalScale(5),
                      }}>
                      {item.amount}
                    </Text>
                    <Text
                      style={{
                        fontSize: scale(12),
                        marginTop: verticalScale(5),
                        marginBottom: verticalScale(5),
                      }}>
                      GW:{item.gr}
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
