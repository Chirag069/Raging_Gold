import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Pressable,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState, useRef, useCallback} from 'react';
import Dots from 'react-native-dots-pagination';
import Carousel from 'react-native-snap-carousel-v4';
import StarRating from 'react-native-star-rating-widget';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {AccordionList} from 'accordion-collapse-react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const Screen_Width = Dimensions.get('window').width;

const exampleItems = [
  {
    image: 'https://staticimg.titan.co.in/Tanishq/Catalog/513220FIIAAP1.jpg',
  },
  {
    image: 'https://staticimg.titan.co.in/Tanishq/Catalog/513220FIIAAP1_1.jpg',
  },
  {
    image: 'https://staticimg.titan.co.in/Tanishq/Catalog/513220FIIAAP1_2.jpg',
  },
  {
    image: 'https://staticimg.titan.co.in/Tanishq/Catalog/513220FIIAAP1_3.jpg',
  },
];

const list = [
  {
    id: 1,
    title: 'Product Details',
    body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content',
  },
];

const ProductDetail = () => {
  const navigation = useNavigation();
  const ref = useRef(null);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [state, setState] = useState({
    activeSections: [],
    all: [],
  });

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(false);
  };

  const _renderItem = useCallback(
    ({item, index}) => (
      <View
        style={{
          backgroundColor: 'floralwhite',
          alignSelf: 'center',
        }}>
        <Image
          style={{height: scale(330), width: scale(330)}}
          resizeMode="cover"
          source={{uri: item.image}}
        />
      </View>
    ),
    [],
  );

  const head = item => {
    return (
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: scale(10),
            padding: scale(10),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: scale(20)}}>{item.title}</Text>
          <AntDesign name="down" size={scale(25)} />
        </View>
      </ScrollView>
    );
  };

  const body = item => {
    return (
      <ScrollView>
        <View
          style={{
            padding: scale(10),
            backgroundColor: 'white',
            marginHorizontal: scale(10),
          }}>
          <Text style={{textAlign: 'center' ,fontSize:scale(15)}}>{item.body}</Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView nestedScrollEnabled={true}>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal:scale(10),
            paddingVertical: verticalScale(10),
            marginBottom: verticalScale(10),
          }}>
          <Text style={{color: '#c79248', fontSize: scale(20)}}>
            Exclusive Gold Ring
          </Text>
        </View>

        <Carousel
          layout={'default'}
          ref={ref}
          data={carouselItems}
          sliderWidth={Screen_Width}
          itemWidth={Screen_Width}
          renderItem={_renderItem}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          loop={true}
          onSnapToItem={index => setActiveIndex(index)}
        />

        <Dots length={4} active={activeIndex} />
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: scale(10),
            paddingVertical: verticalScale(10),
            marginHorizontal: scale(10),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: 'grey', fontSize: scale(20)}}>Rating -</Text>
          <StarRating
            starSize={scale(25)}
            rating={rating}
            onChange={setRating}
            color={'#c79248'}
          />
          <Text style={{fontSize: scale(17)}}>{rating}</Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: scale(10),
            paddingVertical: verticalScale(10),
            marginHorizontal: scale(10),
            flexDirection: 'row',
            marginVertical: verticalScale(10),
          }}>
          <Text style={{color: 'grey', fontSize: scale(20), alignSelf: 'flex-start'}}>
            Size -
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <TouchableOpacity onPress={handleClick}>
              <Text
                style={{
                  fontSize: scale(17),
                  color: 'grey',
                  marginRight: scale(10),
                  backgroundColor: isActive ? '#c79248' : 'white',
                  color: isActive ? 'white' : 'grey',
                  paddingHorizontal: scale(10),
                  borderRadius: scale(15),
                }}>
                2.5
              </Text>
            </TouchableOpacity>
            <Pressable onPress={handleClick}>
              <Text
                style={{
                  fontSize: scale(17),
                  color: 'grey',
                  marginRight: scale(10),
                  backgroundColor: isActive ? '#c79248' : 'white',
                  color: isActive ? 'white' : 'grey',
                  paddingHorizontal: scale(10),
                  borderRadius: scale(15),
                }}>
                3.0
              </Text>
            </Pressable>
            <Pressable>
              <Text style={{fontSize: scale(17), color: 'grey', marginRight: scale(20)}}>
                3.5
              </Text>
            </Pressable>
            <Pressable>
              <Text style={{fontSize: scale(17), color: 'grey', marginRight: scale(20)}}>
                4.0
              </Text>
            </Pressable>
            <Pressable>
              <Text style={{fontSize: scale(17), color: 'grey', marginRight: scale(20)}}>
                4.5
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: scale(10),
            marginBottom: verticalScale(20),
            marginTop: verticalScale(10),
          }}>
          <View style={{}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: scale(17)}}>MRP -</Text>
              <Text style={{fontSize: scale(17), marginLeft: scale(5)}}>14599/-</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: verticalScale(5)}}>
              <Text
                style={{fontSize: scale(17), color: '#c79248', fontWeight: 'bold'}}>
                Offer Price -
              </Text>
              <Text
                style={{
                  fontSize: scale(17),
                  marginLeft: scale(5),
                  color: '#c79248',
                  fontWeight: 'bold',
                }}>
                14599/-
              </Text>
            </View>
          </View>
          <Button
            onPress={() => {
              navigation.navigate('Cart');
            }}
            contentStyle={{height: verticalScale(50), }}
            labelStyle={{fontSize:scale(9)}}
            style={{
              borderRadius: scale(50),
              marginLeft: 'auto',
              justifyContent: 'center',
              width: scale(150),
            }}
            buttonColor="#c79248"
            textColor="white"
            >
            ADD TO CART
          </Button>
        </View>
        <AccordionList
          list={list}
          header={head}
          body={body}
          keyExtractor={item => `${item.id}`}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: scale(15),
    marginVertical: verticalScale(8),
  },
  subitem: {
    backgroundColor: 'lightblue',
    padding: scale(20),
    marginVertical: verticalScale(8),
  },
  header: {
    fontSize: scale(32),
    backgroundColor: '#fff',
  },
  title: {
    fontSize: scale(24),
  },
});

export default ProductDetail;
