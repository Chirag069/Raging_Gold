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


const Screen_Width = Dimensions.get('window').width;
const Screen_height = Dimensions.get('window').height;

const ProductList = () => {
  const navigation=useNavigation()
  const [liked, setLiked] = useState(false);
  const data = [
    {
      id: 1,
      title: 'Product 1',
      price: ' ₹ 16000/-',
      image:
        'https://staticimg.titan.co.in/Tanishq/Catalog/503920FCHAA29_1.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      price: ' ₹ 19000/-',
      image:
        'https://staticimg.titan.co.in/Tanishq/Catalog/503119FLRAA02_1.jpg',
    },
    {
      id: 3,
      title: 'Product 3',
      price: ' ₹ 5000/-',
      image:
        'https://staticimg.titan.co.in/Tanishq/Catalog/502119FAZAA02_1.jpg',
    },
    {
      id: 4,
      title: 'Product 4',
      price: ' ₹ 8000/-',
      image:
        'https://staticimg.titan.co.in/Tanishq/Catalog/501206FANABP5_1.jpg',
    },
    {
      id: 5,
      title: 'Product 5',
      price: ' ₹ 30000/-',
      image:
        'https://staticimg.titan.co.in/Tanishq/Catalog/512318FGLAA18_1.jpg',
    },
    {
      id: 6,
      title: 'Product 6',
      price: ' ₹ 15000/-',
      image:
        'https://staticimg.titan.co.in/Tanishq/Catalog/502219FCLAAP4_1.jpg',
    },
    {
      id: 7,
      title: 'Product 7',
      price: ' ₹ 17000/-',
      image:
        'https://staticimg.titan.co.in/Tanishq/Catalog/511170FCEAAP5_1.jpg',
    },
    {
      id: 8,
      title: 'Product 8',
      price: ' ₹ 17000/-',
      image:
        'https://staticimg.titan.co.in/Tanishq/Catalog/500462FOAAA12_1.jpg',
    },
    {
      id: 9,
      title: 'Product 9',
      price: ' ₹ 10000/-',
      image:
        'https://staticimg.titan.co.in/Tanishq/Catalog/513220FIIAAP1_1.jpg',
    },
    {
      id: 10,
      title: 'Product 10',
      price: ' ₹ 13000/-',
      image:
        'https://staticimg.titan.co.in/Tanishq/Catalog/500005FWAAA02_1.jpg',
    },
    {
      id: 11,
      title: 'Product 11',
      price: ' ₹ 18000/-',
      image:
        'https://staticimg.titan.co.in/Tanishq/Catalog/500272FCAAA11_1.jpg',
    },
    {
      id: 12,
      title: 'Product 12',
      price: ' ₹ 18000/-',
      image:
        'https://staticimg.titan.co.in/Tanishq/Catalog/501206FAWABP5_1.jpg',
    },
  ];

  return (<>
    <View style={{backgroundColor:"white",paddingHorizontal:10,paddingVertical:10}}>
        <Text style={{color:"#c79248",fontSize:20}}>Exclusive Gold Ring</Text>
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
          return (
            <Pressable onPress={() =>navigation.navigate('ProductDetail')}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: Screen_Width - 210,
                  marginHorizontal: 5,

                }}>
                <ImageBackground
                  style={{height:180, width:'100%', alignSelf: 'center'}}
                  source={{
                    uri: item.image,
                  }}>
                  <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
                    <Ionicons
                      name={liked ? "heart" : "heart-outline"}
                      color={'#c79248'}
                      size={30}
                      style={{alignSelf: 'flex-end', padding: 2}}
                    />
                  </Pressable>
                </ImageBackground>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: 17, marginTop: 5, marginBottom: 5}}>
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
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: 'white',
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  buyNow: {
    color: 'purple',
  },
  icon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductList;
