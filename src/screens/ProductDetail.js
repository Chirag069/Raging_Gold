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
  // {
  //   id:2,
  //   title: 'Components',
  //   body: 'AccordionList,Collapse,CollapseHeader & CollapseBody'
  // }
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

  const head = item => {
    return (
      <ScrollView>
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 10,
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 20}}>{item.title}</Text>
        <AntDesign name="down" size={25} />
      </View>
      </ScrollView>
    );
  };

  const body = item => {
    return (
      <ScrollView>
        <View
          style={{padding: 10, backgroundColor: 'white', marginHorizontal: 10}}>
          <Text style={{textAlign: 'center'}}>{item.body}</Text>
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
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginBottom: 10,
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
                  fontSize: 17,
                  color: 'grey',
                  marginRight: 10,
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
                  fontSize: 17,
                  color: 'grey',
                  marginRight: 10,
                  backgroundColor: isActive ? '#c79248' : 'white',
                  color: isActive ? 'white' : 'grey',
                  paddingHorizontal: 10,
                  borderRadius: 15,
                }}>
                3.0
              </Text>
            </Pressable>
            <Pressable>
              <Text style={{fontSize: 17, color: 'grey', marginRight: 20}}>
                3.5
              </Text>
            </Pressable>
            <Pressable>
              <Text style={{fontSize: 17, color: 'grey', marginRight: 20}}>
                4.0
              </Text>
            </Pressable>
            <Pressable>
              <Text style={{fontSize: 17, color: 'grey', marginRight: 20}}>
                4.5
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            marginBottom: 20,
            marginTop: 10,
          }}>
          <View style={{}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 17}}>MRP -</Text>
              <Text style={{fontSize: 17, marginLeft: 5}}>14599/-</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text
                style={{fontSize: 17, color: '#c79248', fontWeight: 'bold'}}>
                Offer Price -
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  marginLeft: 5,
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
            contentStyle={{height: 50}}
            labelStyle={{fontSize: 20}}
            style={{
              borderRadius: 50,
              marginLeft: 'auto',
              width: '50%',
              justifyContent: 'center',
            }}
            buttonColor="#c79248"
            textColor="white">
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
    padding: 15,
    marginVertical: 8,
  },
  subitem: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default ProductDetail;
