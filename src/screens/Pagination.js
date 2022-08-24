import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel-v4' // 3.6.0
import ProductList from './ProductList'
import ProducDetail from './ProductDetail'
const SCREEN_WIDTH = Dimensions.get('window').width


const Screen = (props) => (
  <View style={{ flex : 1, backgroundColor:"#369" }}>
    <Text>{ props.text }</Text>
  </View>
);

export default class App extends Component {
  
  SCREENS = [
    <ProductList/>,
   <ProducDetail/>,
    <Screen text='second screen' />,
    <Screen text='third screen' />
  ]
  
  constructor(props) {
    super(props)
    this.state = {
      activeTab : 0
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
      
      
        <Carousel
        
          ref={ ref => this.carouselRef = ref }
          data={ this.SCREENS }
          renderItem={ ({ item }) => item }
          
          onSnapToItem={ i => this.setState({ activeTab : i }) }
          sliderWidth={ SCREEN_WIDTH }
          itemWidth={ SCREEN_WIDTH }
          slideStyle={{ width : SCREEN_WIDTH }}
          inactiveSlideOpacity={ 1 }
          inactiveSlideScale={ 1 }
        
        />
        
        <View
          style={ styles.tabBar }
        >
          <Pagination
            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
              dotStyle={styles.ww}
       inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            activeDotIndex={ this.state.activeTab }
          
          
          />
        </View>
        
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ww:{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8, backgroundColor: 'rgba(255, 255, 255, 0.92)'
              },
  container: {
    flex: 1,
    paddingTop: 40
  },
  tabBar : {
    position : 'absolute',
    right : 0,
    bottom : 0,
    left : 0,
    borderTopWidth : 1,
    borderColor : '#ddd',
    backgroundColor : '#fff'
  },
  tabsContainer : {
    flexDirection : 'row',
    height : 50,
    paddingTop : 0,
    paddingBottom : 0
  }
})