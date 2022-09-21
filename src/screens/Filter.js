import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
  Dimensions,
  FlatList,
  LogBox,
} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {FilterAction} from '../../redux/actions/filterAction';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../components/Custom/CustomButton';
import {ProductListAction} from '../../redux/actions/ProductListAction';
import Feather from 'react-native-vector-icons/Feather';

const Screen_Width = Dimensions.get('window').width;
const Screen_height = Dimensions.get('window').height;

const Filter = () => {
  const navigation = useNavigation();
  const [filter, setFilter] = useState();
  const dispatch = useDispatch();
  const {Token} = useSelector(state => state.authState);
  const {Filter} = useSelector(state => state.filterState);
  const {gender, sub_category, item_group, category} = Filter;
  const [select, setSelect] = useState(gender);
  const [genderselect, setGenderselect] = useState([]);
  const [itemgroupselect, setItemgroupselect] = useState([]);
  const [categoryselect, setCategoryselect] = useState([]);
  const [subcategoryslelct, setSubcategoryselect] = useState([]);
  const [clear, setClear] = useState();

  // console.log(clear);

  // console.log(Filter);
  useFocusEffect(
    React.useCallback(() => {
      dispatch(FilterAction(Token));
    }, []),
  );

  const filterapplydata = {
    genderselect,
    itemgroupselect,
    categoryselect,
    subcategoryslelct,
  };

  const filterdata = tab => {
    if (tab === 'itemgroup') {
      setFilter(tab);
    }
    if (tab === 'category') {
      setFilter(tab);
    }
    if (tab === 'subcategory') {
      setFilter(tab);
    }
    if (tab === 'gender') {
      setFilter(tab);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      LogBox.ignoreLogs([
        'VirtualizedLists should never be nested',
        'is not supported with the',
      ]);

      // return () => {
      //   Alert.alert('Screen was unfocused');
      //   // Useful for cleanup functions
      // };
    }, []),
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={{flexDirection: 'row', height: Screen_height}}>
          <View style={{backgroundColor: 'lightgrey', flex: 0.7}}>
            <View
              style={{alignItems: 'center', marginVertical: verticalScale(20)}}>
              <Text style={{color: 'grey', fontSize: scale(15)}}>
                FILTER BY
              </Text>
            </View>

            <Pressable onPress={() => filterdata('gender')} style={{}}>
              <View
                style={{
                  alignItems: 'flex-start',
                  borderBottomWidth: scale(0.5),
                  flexDirection: 'row',
                  backgroundColor:
                    filter == 'gender' ? 'darkgrey' : 'lightgrey',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: scale(15),
                    paddingVertical: verticalScale(20),
                    paddingHorizontal: scale(10),
                    flex: 1,
                  }}>
                  Gender
                </Text>
                {genderselect.length != 0 ? (
                  <Feather
                    style={{alignSelf: 'center', marginRight: scale(10)}}
                    name="check"
                    size={scale(20)}
                    color={'grey'}
                  />
                ) : (
                  ''
                )}
              </View>
            </Pressable>

            <Pressable onPress={() => filterdata('itemgroup')}>
              <View
                style={{
                  alignItems: 'flex-start',
                  borderBottomWidth: scale(0.5),
                  backgroundColor:
                    filter == 'itemgroup' ? 'darkgrey' : 'lightgrey',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: scale(15),
                    paddingVertical: verticalScale(
                      itemgroupselect.length != 0 ? 10 : 20,
                    ),
                    paddingHorizontal: scale(10),
                    flex: 1,
                  }}>
                  Item Group
                </Text>
                {itemgroupselect.length != 0 ? (
                  <Feather
                    style={{alignSelf: 'center', marginRight: scale(10)}}
                    name="check"
                    size={scale(20)}
                    color={'grey'}
                  />
                ) : (
                  ''
                )}
              </View>
            </Pressable>

            <Pressable onPress={() => filterdata('category')}>
              <View
                style={{
                  alignItems: 'flex-start',
                  borderBottomWidth: scale(0.5),
                  backgroundColor:
                    filter == 'category' ? 'darkgrey' : 'lightgrey',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: scale(15),

                    paddingVertical: verticalScale(20),
                    paddingHorizontal: scale(10),
                    width: '100%',
                    flex: 1,
                  }}>
                  Category
                </Text>
                {categoryselect.length != 0 ? (
                  <Feather
                    style={{alignSelf: 'center', marginRight: scale(10)}}
                    name="check"
                    size={scale(20)}
                    color={'grey'}
                  />
                ) : (
                  ''
                )}
              </View>
            </Pressable>

            <Pressable onPress={() => filterdata('subcategory')}>
              <View
                style={{
                  alignItems: 'flex-start',
                  borderBottomWidth: scale(0.5),
                  backgroundColor:
                    filter == 'subcategory' ? 'darkgrey' : 'lightgrey',
                  paddingVertical: verticalScale(10),
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: scale(15),
                    paddingVertical: verticalScale(
                      subcategoryslelct.length != 0 ? 2 : 10,
                    ),
                    paddingHorizontal: scale(10),
                    width: '100%',
                    flex: 1,
                  }}>
                  Sub Category
                </Text>
                {subcategoryslelct.length != 0 ? (
                  <Feather
                    style={{alignSelf: 'center', marginRight: scale(10)}}
                    name="check"
                    size={scale(20)}
                    color={'grey'}
                  />
                ) : (
                  ''
                )}
              </View>
            </Pressable>
          </View>

          <View style={{flex: 1.5}}>
            <View
              style={{
                alignItems: 'center',
                borderBottomWidth: scale(0.5),
                borderBottomColor: 'lightgrey',
                width: '100%',
              }}>
              <Text
                style={{
                  color: 'grey',
                  fontSize: scale(15),
                  paddingVertical: verticalScale(20),
                }}>
                {filter}
              </Text>
            </View>
            <View>
              {filter == 'subcategory' ? (
                <FlatList
                  ref={ref => {
                    flatListRef = ref;
                  }}
                  contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}
                  data={sub_category}
                  horizontal={false}
                  keyExtractor={item => {
                    return item.id;
                  }}
                  renderItem={({item}) => {
                    const index = item.id;

                    return (
                      <Pressable
                        onPress={() => {
                          if (subcategoryslelct.includes(index)) {
                            let unlike = subcategoryslelct.filter(
                              elem => elem !== index,
                            );
                            setSubcategoryselect(unlike);
                          } else {
                            setSubcategoryselect([...subcategoryslelct, index]);
                          }
                        }}>
                        <View style={{marginVertical: 10, marginHorizontal: 5}}>
                          <Text
                            style={{
                              borderWidth: scale(1),
                              borderColor: '#c79248',
                              backgroundColor: subcategoryslelct.includes(index)
                                ? '#c79248'
                                : 'white',
                              color: subcategoryslelct.includes(index)
                                ? 'white'
                                : '#c79248',
                              paddingHorizontal: scale(5),
                              paddingVertical: verticalScale(5),
                              borderRadius: scale(5),
                              fontSize: scale(20),
                            }}>
                            {item.name}
                          </Text>
                        </View>
                      </Pressable>
                    );
                  }}
                />
              ) : filter == 'itemgroup' ? (
                <FlatList
                  ref={ref => {
                    flatListRef = ref;
                  }}
                  contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}
                  data={item_group}
                  horizontal={false}
                  keyExtractor={item => {
                    return item.id;
                  }}
                  renderItem={({item}) => {
                    const index = item.id;
                    return (
                      <Pressable
                        onPress={() => {
                          if (itemgroupselect.includes(index)) {
                            let unlike = itemgroupselect.filter(
                              elem => elem !== index,
                            );
                            setItemgroupselect(unlike);
                          } else {
                            setItemgroupselect([...itemgroupselect, index]);
                          }
                        }}
                        style={{}}>
                        <View style={{marginVertical: 10, marginHorizontal: 5}}>
                          <Text
                            style={{
                              borderWidth: scale(1),
                              borderColor: '#c79248',
                              backgroundColor: itemgroupselect.includes(index)
                                ? '#c79248'
                                : 'white',
                              color: itemgroupselect.includes(index)
                                ? 'white'
                                : '#c79248',
                              paddingHorizontal: scale(5),
                              paddingVertical: verticalScale(5),
                              borderRadius: scale(5),
                              fontSize: scale(20),
                            }}>
                            {item.name}
                          </Text>
                        </View>
                      </Pressable>
                    );
                  }}
                />
              ) : filter == 'category' ? (
                <FlatList
                  ref={ref => {
                    flatListRef = ref;
                  }}
                  contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}
                  data={category}
                  horizontal={false}
                  keyExtractor={item => {
                    return item.id;
                  }}
                  renderItem={({item}) => {
                    const index = item.id;
                    return (
                      <Pressable
                        onPress={() => {
                          if (categoryselect.includes(index)) {
                            let unlike = categoryselect.filter(
                              elem => elem !== index,
                            );
                            setCategoryselect(unlike);
                          } else {
                            setCategoryselect([...categoryselect, index]);
                          }
                        }}
                        style={{}}>
                        <View style={{marginVertical: 10, marginHorizontal: 5}}>
                          <Text
                            style={{
                              borderWidth: scale(1),
                              borderColor: '#c79248',
                              backgroundColor: categoryselect.includes(index)
                                ? '#c79248'
                                : 'white',
                              color: categoryselect.includes(index)
                                ? 'white'
                                : '#c79248',
                              paddingHorizontal: scale(5),
                              paddingVertical: verticalScale(5),
                              borderRadius: scale(5),
                              fontSize: scale(20),
                            }}>
                            {item.name}
                          </Text>
                        </View>
                      </Pressable>
                    );
                  }}
                />
              ) : filter == 'gender' ? (
                <FlatList
                  ref={ref => {
                    flatListRef = ref;
                  }}
                  contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}
                  data={gender}
                  horizontal={false}
                  keyExtractor={item => {
                    return item.id;
                  }}
                  renderItem={({item}) => {
                    const index = item.id;

                    return (
                      <Pressable
                        onPress={() => {
                          if (genderselect.includes(index)) {
                            let unlike = genderselect.filter(
                              elem => elem !== index,
                            );
                            setGenderselect(unlike);
                          } else {
                            setGenderselect([...genderselect, index]);
                          }
                        }}>
                        <View style={{marginVertical: 10, marginHorizontal: 5}}>
                          <Text
                            style={{
                              borderWidth: scale(1),
                              borderColor: '#c79248',
                              backgroundColor: genderselect.includes(index)
                                ? '#c79248'
                                : 'white',
                              color: genderselect.includes(index)
                                ? 'white'
                                : '#c79248',
                              paddingHorizontal: scale(5),
                              paddingVertical: verticalScale(5),
                              borderRadius: scale(5),
                              fontSize: scale(20),
                            }}>
                            {item.name}
                          </Text>
                        </View>
                      </Pressable>
                    );
                  }}
                />
              ) : (
                ''
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: scale(5),
          paddingVertical: verticalScale(5),
        }}>
        <CustomButton
          onPress={() => setClear('clear')}
          buttonwidth={scale(167)}
          buttoncolor={'lightgrey'}
          text={'CLEAR ALL'}
          fontcolor={'#c79248'}
          buttonheight={verticalScale(40)}
          borderradius={scale(10)}
        />
        <CustomButton
          onPress={() => {
            dispatch(ProductListAction(Token, 10, filterapplydata));
            navigation.navigate('ProductList');
          }}
          buttonwidth={scale(167)}
          buttoncolor={'#c79248'}
          text={'APPLY'}
          fontcolor={'white'}
          buttonheight={verticalScale(40)}
          borderradius={scale(10)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Filter;
