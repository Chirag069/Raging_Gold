import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Pressable,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef, useCallback} from 'react';
import Dots from 'react-native-dots-pagination';
import Carousel from 'react-native-snap-carousel-v4';
import StarRating from 'react-native-star-rating-widget';

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

const ProducDetail = () => {
  const ref = useRef(null);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [isActive, setIsActive] = useState(false);

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
          width: Screen_Width - 20,
          alignSelf: 'center',
        }}>
        <Image
          style={{height: 350, width: Screen_Width - 20}}
          resizeMode="cover"
          source={{uri: item.image}}
        />
      </View>
    ),
    [],
  );

  return (
    <SafeAreaView style={{}}>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
        <Text style={{color: '#c79248', fontSize: 20}}>
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
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: 'grey', fontSize: 20}}>Rating -</Text>
        <StarRating
          starSize={25}
          rating={rating}
          onChange={setRating}
          color={'#c79248'}
        />
        <Text style={{fontSize: 17}}>{rating}</Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginHorizontal: 10,
          flexDirection: 'row',
          marginVertical: 10,
        }}>
        <Text style={{color: 'grey', fontSize: 20, alignSelf: 'flex-start'}}>
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
                fontSize: 20,
                color: 'grey',
                marginRight: 20,
                backgroundColor: isActive ? '#c79248' : 'white',
                color: isActive ? 'white' : 'grey',
                paddingHorizontal: 10,
                borderRadius: 15,
              }}>
              2.5
            </Text>
          </TouchableOpacity>
          <Pressable onPress={handleClick}>
            <Text
              style={{
                fontSize: 20,
                color: 'grey',
                marginRight: 20,
                backgroundColor: isActive ? '#c79248' : 'white',
                color: isActive ? 'white' : 'grey',
                paddingHorizontal: 10,
                borderRadius: 15,
              }}>
              3.0
            </Text>
          </Pressable>
          <Pressable>
            <Text style={{fontSize: 20, color: 'grey', marginRight: 20}}>
              3.5
            </Text>
          </Pressable>
          <Pressable>
            <Text style={{fontSize: 20, color: 'grey', marginRight: 20}}>
              4.0
            </Text>
          </Pressable>
          <Pressable>
            <Text style={{fontSize: 20, color: 'grey', marginRight: 20}}>
              4.5
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProducDetail;
