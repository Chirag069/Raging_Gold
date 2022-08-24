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
  ScrollView
} from 'react-native';
import React, {useState, useRef, useCallback} from 'react';
import Dots from 'react-native-dots-pagination';
import Carousel from 'react-native-snap-carousel-v4';
import StarRating from 'react-native-star-rating-widget';
import { Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Accordion from "react-native-collapsible/Accordion";
import AntDesign from 'react-native-vector-icons/AntDesign'

const Screen_Width = Dimensions.get('window').width;


const sample = [
  {
    title: "Product Specification",
    data: ["golden Ring"]
  },
  
];

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
  const navigation=useNavigation()
  const ref = useRef(null);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [state, setState] = useState({
    activeSections: [],
    all: []
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

  

  const _renderHeader = (section) => (
    <View style={{marginHorizontal:10}}>
      <View style={[styles.item,{flexDirection:"row"}]}>
        <Text style={styles.title}>{section.title}</Text>
        <AntDesign name='down' size={30} style={{marginLeft:'auto'}}/>
      </View>
      {section.data.map((item, index) => {
        //show the first two examples
        if (index < 0) {
          return (
            <View style={styles.subitem}>
              <Text style={styles.subtitle}>{item}</Text>
            </View>
          );
        }
      })}
    </View>
  );

  const _renderContent = (section) => {
    if (state.all) {
      return section.data.map((item, index) => {
        //show everything else once the section title is clicked
        if (index >= 0) {
          return (
            <View style={styles.subitem}>
              <Text style={styles.subtitle}>{item}</Text>
            </View>
          );
        }
      });
    } else {
      return section.data.map((item, index) => {
        //show everything else once the section title is clicked
        if (index >= 0 && index < 2) {
          return (
            <View style={styles.subitem}>
              <Text style={styles.subtitle}>{item}</Text>
            </View>
          );
        }
      });
    }
  };

  const _renderFooter = (section) => {
    return (
      <TouchableOpacity style={styles.button} onPress={_updateSections}>
      </TouchableOpacity>
    );
  };

  const _updateSections = (activeSections) => {
    setState({ activeSections });
  };

  const _updateAll = (all) => {
    setState({ all });
  };

  const onPress = (all) => {
    _updateSections();
  };







  return (
    <SafeAreaView style={{}}>
      <ScrollView>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginBottom:10 
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
      <View style={{flexDirection: 'row', marginHorizontal: 10,marginBottom:20,marginTop:10}}>
        <View style={{}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 17}}>MRP -</Text>
            <Text style={{fontSize: 17, marginLeft: 5}}>14599/-</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={{fontSize: 17, color: '#c79248', fontWeight: 'bold'}}>
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
            navigation.navigate('Cart')
          }}
          
            contentStyle={{height: 50,}}
            labelStyle={{fontSize: 20}}
            style={{borderRadius: 50,marginLeft:'auto',width:'50%',justifyContent:"center"}}
            buttonColor="#c79248"
            textColor="white"
            >
            ADD TO CART
          </Button>
      </View>
      <Accordion
          sections={sample}
          activeSections={state.activeSections}
          renderHeader={_renderHeader}
          renderContent={_renderContent}
          renderFooter={_renderFooter}
          onChange={_updateSections}
        />
        </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  item: {
    backgroundColor: "white",
    padding: 15,
    marginVertical: 8
  },
  subitem: {
    backgroundColor: "lightblue",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});


export default ProducDetail;
