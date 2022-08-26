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
          style={{height:200, width: Screen_Width}}
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
      <View style={{marginHorizontal: 10,marginBottom:10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Pressable onPress={()=> navigation.navigate('drawer')}>
          <View style={{backgroundColor: 'white', width: 180}}>
            <ImageBackground
              style={{height: 150, width: '100%', alignSelf: 'center'}}
              source={{
                uri: 'https://staticimg.titan.co.in/Tanishq/Catalog/503920FCHAA29_1.jpg',
              }}>
              <Pressable onPress={() => {}}>
                <Ionicons
                  name="heart-outline"
                  color={'#c79248'}
                  size={30}
                  style={{alignSelf: 'flex-end', padding: 2}}
                />
              </Pressable>
            </ImageBackground>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 17}}>Gold Ring</Text>
              <Text style={{fontSize: 17, marginTop: 5, marginBottom: 5}}>
                ₹ 15000/-
              </Text>
            </View>
          </View>
          </Pressable>

              <Pressable>
          <View style={{backgroundColor: 'white', width: 180}}>
            <ImageBackground
              style={{height: 150, width: '100%', alignSelf: 'center'}}
              source={{
                uri: 'https://staticimg.titan.co.in/Tanishq/Catalog/501169SDHAAA29_2.jpg',
              }}>
              <Pressable onPress={() => {}}>
                <Ionicons
                  name="heart-outline"
                  color={'#c79248'}
                  size={30}
                  style={{alignSelf: 'flex-end', padding: 2}}
                />
              </Pressable>
            </ImageBackground>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 17}}>Errings</Text>
              <Text style={{fontSize: 17, marginTop: 5, marginBottom: 5}}>
                ₹ 15000/-
              </Text>
            </View>
          </View>
          </Pressable>
        </View>
      </View>
      <Pressable>
        <Image
          style={{width: Screen_Width, height: 160}}
          resizeMode="cover"
          source={{
            uri: 'https://www.shilpalifestyle.com/assets/home-slider/home_slider_HOME_PAGE_-3.jpg',
          }}
        />
      </Pressable>
      <Pressable>
        <Image
          style={{width: Screen_Width, height: 160, marginTop: 10}}
          resizeMode="cover"
          source={{
            uri: 'https://www.shilpalifestyle.com/assets/category/Bridal-Diamond-Banner.jpg',
          }}
        />
      </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
