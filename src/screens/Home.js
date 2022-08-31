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
} from 'react-native';
import React, {useState,useRef} from 'react';
import Carousel from 'react-native-snap-carousel-v4';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Dots from 'react-native-dots-pagination';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';


const Screen_Width = Dimensions.get('window').width;
const Screen_height = Dimensions.get('window').height;

const Home = () => {
  const navigation=useNavigation()
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  

  const carouselItems = [
    {
      image:
        'https://images.squarespace-cdn.com/content/v1/5535c7f4e4b07fe01de70f4b/1436936835948-LEHCW0662BQPPWWLTQRQ/Home-Carousel-4.jpg?format=2500w',
    },
    {
      image:
        'https://images.squarespace-cdn.com/content/v1/5535c7f4e4b07fe01de70f4b/1436936834266-5T8BZ4MJ2N9ETBYDA1LS/Home-Carousel-3.jpg?format=2500w',
    },
    {
      image:
        'https://images.squarespace-cdn.com/content/v1/5535c7f4e4b07fe01de70f4b/1436936831481-4VUJZREY6C79S8YS6APL/Home-Carousel-2.jpg?format=2500w',
    },
    {
      image:
        'https://images.squarespace-cdn.com/content/v1/5535c7f4e4b07fe01de70f4b/1464320671031-P0SNKCPIX63PFEICW0V0/Home-Carousel-5_2.jpg?format=2500w',
    },
    {
      image:
        'https://images.squarespace-cdn.com/content/v1/5535c7f4e4b07fe01de70f4b/1436936869886-SOFIVPBTQ83SJX55FXE6/Home-Carousel-1.jpg?format=2500w',
    },
  ];

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          width: Screen_Width,
        }}>
        <Image
          style={{height:scale(170), width: Screen_Width}}
          resizeMode="cover"
          source={{uri: item.image}}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
      <View style={{ justifyContent: 'center'}}>
        <Carousel
          layout={'default'}
          ref={ref}
          data={carouselItems}
          sliderWidth={Screen_Width}
          itemWidth={Screen_Width}
          renderItem={_renderItem}
          autoplay={true}
          loop={true}
          inactiveSlideScale={1}
        inactiveSlideOpacity={1}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        <Dots length={4} active={activeIndex} />
      </View>
      <View style={{marginHorizontal: scale(10),marginBottom: scale(10)}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Pressable onPress={()=> navigation.navigate('ProductList')}>
          <View style={{backgroundColor: 'white', width: scale(160)}}>
            <ImageBackground
              style={{height: scale(130), width: scale(150), alignSelf: 'center'}}
              source={{
                uri: 'https://staticimg.titan.co.in/Tanishq/Catalog/503920FCHAA29_1.jpg',
              }}>
              <Pressable >
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
              <Text style={{fontSize: scale(15), marginTop: 5, marginBottom: 5}}>
                ₹ 15000/-
              </Text>
            </View>
          </View>
          </Pressable>

           <Pressable onPress={()=> navigation.navigate('ProductList')}>
          <View style={{backgroundColor: 'white', width: scale(160)}}>
            <ImageBackground
              style={{height: scale(130), width: scale(150), alignSelf: 'center'}}
              source={{
                uri: 'https://staticimg.titan.co.in/Tanishq/Catalog/501169SDHAAA29_2.jpg',
              }}>
              <Pressable >
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
              <Text style={{fontSize: scale(15), marginTop: 5, marginBottom: 5}}>
                ₹ 15000/-
              </Text>
            </View>
          </View>
          </Pressable>

        </View>
      </View>
      <View style={{marginHorizontal:20,alignItems:"center",marginBottom:scale(10)}}>
      <Pressable>
        <Image
          style={{width: scale(330), height: scale(140)}}
          resizeMode="cover"
          source={{
            uri: 'https://www.shilpalifestyle.com/assets/home-slider/home_slider_HOME_PAGE_-3.jpg',
          }}
        />
      </Pressable>
      <Pressable>
        <Image
          style={{width: scale(330), height: scale(140), marginTop: scale(10)}}
          resizeMode="cover"
          source={{
            uri: 'https://www.shilpalifestyle.com/assets/category/Bridal-Diamond-Banner.jpg',
          }}
        />
      </Pressable>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
