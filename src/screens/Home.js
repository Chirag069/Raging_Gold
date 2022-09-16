import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  ScrollView,
  FlatList,
  LogBox,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel-v4';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Dots from 'react-native-dots-pagination';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {ProductListAction} from '../../redux/actions/ProductListAction';
import {GetWishlistAction} from '../../redux/actions/WishListAction';
import {HomeAction} from '../../redux/actions/HomeAction';
import {useFocusEffect} from '@react-navigation/native';
import {Button} from 'react-native-paper';

const Screen_Width = Dimensions.get('window').width;
const Screen_height = Dimensions.get('window').height;

const Home = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const {userToken} = useSelector(state => state.authState);
  const {home} = useSelector(state => state.homeState);

  useEffect(() => {
    dispatch(HomeAction(userToken));
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     dispatch(HomeAction(userToken));

  //     // return () => {
  //     //   Alert.alert('Screen was unfocused');
  //     //   // Useful for cleanup functions
  //     // };
  //   }, []),
  // );

  const carouselItems = home.data?.slider;
  const data = home.data?.sub_category;

  // console.log(limit)

  // console.log(carouselItems);

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          width: Screen_Width,
        }}>
        <Image
          style={{height: scale(220), width: Screen_Width}}
          resizeMode="cover"
          source={{uri: item.image}}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{justifyContent: 'center'}}>
          <Carousel
            layout={'default'}
            ref={ref}
            data={carouselItems}
            sliderWidth={Screen_Width}
            itemWidth={Screen_Width}
            renderItem={_renderItem}
            autoplay={true}
            loop={false}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            onSnapToItem={index => setActiveIndex(index)}
          />
          <Dots length={carouselItems?.length} active={activeIndex} />
        </View>
        {/* <View style={{marginHorizontal: scale(10), marginBottom: scale(10)}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Pressable
              onPress={() => {
                navigation.navigate('ProductList'),
                  dispatch(ProductListAction(userToken));
                dispatch(GetWishlistAction(userToken));
              }}>
              <View style={{backgroundColor: 'white', width: scale(160)}}>
                <ImageBackground
                  style={{
                    height: scale(130),
                    width: scale(150),
                    alignSelf: 'center',
                  }}
                  source={{
                    uri: 'https://staticimg.titan.co.in/Tanishq/Catalog/503920FCHAA29_1.jpg',
                  }}>
                  <Pressable>
                    <Ionicons
                      name="heart-outline"
                      color={'#c79248'}
                      size={scale(30)}
                      style={{alignSelf: 'flex-end', padding: scale(2)}}
                    />
                  </Pressable>
                </ImageBackground>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: scale(15)}}>Gold Ring</Text>
                  <Text
                    style={{
                      fontSize: scale(15),
                      marginTop: 5,
                      marginBottom: 5,
                    }}>
                    ₹ 15000/-
                  </Text>
                </View>
              </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('ProductList')}>
              <View style={{backgroundColor: 'white', width: scale(160)}}>
                <ImageBackground
                  style={{
                    height: scale(130),
                    width: scale(150),
                    alignSelf: 'center',
                  }}
                  source={{
                    uri: 'https://staticimg.titan.co.in/Tanishq/Catalog/501169SDHAAA29_2.jpg',
                  }}>
                  <Pressable>
                    <Ionicons
                      name="heart-outline"
                      color={'#c79248'}
                      size={scale(30)}
                      style={{alignSelf: 'flex-end', padding: scale(2)}}
                    />
                  </Pressable>
                </ImageBackground>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: scale(15)}}>Gold Ring</Text>
                  <Text
                    style={{
                      fontSize: scale(15),
                      marginTop: 5,
                      marginBottom: 5,
                    }}>
                    ₹ 15000/-
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>
        </View> */}

        <FlatList
          style={{
            paddingHorizontal: scale(5),
            backgroundColor: '#F5F5F5',
          }}
          contentContainerStyle={{flex: 1}}
          data={data}
          horizontal={false}
          numColumns={1}
          keyExtractor={item => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return <View style={{marginTop: scale(5)}} />;
          }}
          renderItem={post => {
            const item = post.item;
            return (
              <View
                style={{
                  marginHorizontal: 20,
                  alignItems: 'center',
                  marginBottom: scale(10),
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ProductList'),
                      dispatch(GetWishlistAction(userToken));
                    dispatch(ProductListAction(userToken, 10, item.id));
                  }}>
                  <ImageBackground
                    style={{
                      width: scale(330),
                      height: scale(180),
                      alignItems: 'flex-end',
                    }}
                    resizeMode="cover"
                    source={{
                      uri: item.image,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: scale(20),
                        marginRight: scale(20),
                        marginTop: verticalScale(10),
                      }}>
                      {item.name}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
