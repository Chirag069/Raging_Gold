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
import {useFocusEffect} from '@react-navigation/native';
import {FilterAction} from '../../redux/actions/filterAction';
import {useDispatch, useSelector} from 'react-redux';

const data = [
  {
    id: 1,
    category: 'Ladies Ring',
    subcategory: 'Ladies Ring',
    itemgroup: '22 kt',
    gender: 'All',
    selected: false,
  },
  {
    id: 2,
    gender: 'Male',
    itemgroup: '18 kt',
    category: 'Jeans Ring',
    subcategory: 'Jeans Ring',
    selected: false,
  },
  {
    id: 3,
    gender: 'Female',
    itemgroup: '20 kt',
    category: 'Pendal Set',
    subcategory: 'Pendal Set',
    selected: false,
  },
  {
    id: 4,
    category: 'M.Set',
    selected: false,
  },
  {
    id: 5,
    category: 'Tops',
    subcategory: 'Tops',
    selected: false,
  },
  {
    id: 6,
    category: 'Pendal ',
    subcategory: 'Pendal ',
    selected: false,
  },
  {
    id: 7,
    category: 'Ladies Bracelet',

    selected: false,
  },
  {
    id: 8,
    category: 'Jeans Bracelet',

    selected: false,
  },
  {
    id: 9,
    category: 'Jeans Lose Kada',
    selected: false,
  },
];

const Screen_Width = Dimensions.get('window').width;
const Screen_height = Dimensions.get('window').height;

const Filter = () => {
  const [select, setSelect] = useState(data);
  const [filter, setFilter] = useState();
  const dispatch = useDispatch();
  const {userToken} = useSelector(state => state.authState);
  const {Filter} = useSelector(state => state.filterState);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(FilterAction(userToken));

      // return () => {
      //   Alert.alert('Screen was unfocused');
      //   // Useful for cleanup functions
      // };
    }, []),
  );

  console.log(Filter);

  const handleOnpress = item => {
    const newItem = select.map(val => {
      if (val.id === item.id) {
        return {...val, selected: !val.selected};
      } else {
        return val;
      }
    });
    setSelect(newItem);
  };

  const filterdata = tab => {
    if (tab === 'gender') {
      setFilter(tab);
    }
    if (tab === 'itemgroup') {
      setFilter(tab);
    }
    if (tab === 'category') {
      setFilter(tab);
    }
    if (tab === 'subcategory') {
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
                }}>
                <Text
                  style={{
                    color: 'black',
                    backgroundColor:
                      filter == 'gender' ? 'darkgrey' : 'lightgrey',
                    fontSize: scale(15),
                    paddingVertical: verticalScale(20),
                    paddingHorizontal: scale(10),
                    width: '100%',
                  }}>
                  Gender
                </Text>
              </View>
            </Pressable>

            <Pressable onPress={() => filterdata('itemgroup')}>
              <View
                style={{
                  alignItems: 'flex-start',
                  borderBottomWidth: scale(0.5),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: scale(15),
                    backgroundColor:
                      filter == 'itemgroup' ? 'darkgrey' : 'lightgrey',
                    paddingVertical: verticalScale(20),
                    paddingHorizontal: scale(10),
                    width: '100%',
                  }}>
                  Item Group
                </Text>
              </View>
            </Pressable>

            <Pressable onPress={() => filterdata('category')}>
              <View
                style={{
                  alignItems: 'flex-start',
                  borderBottomWidth: scale(0.5),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: scale(15),
                    backgroundColor:
                      filter == 'category' ? 'darkgrey' : 'lightgrey',
                    paddingVertical: verticalScale(20),
                    paddingHorizontal: scale(10),
                    width: '100%',
                  }}>
                  Category
                </Text>
              </View>
            </Pressable>

            <Pressable onPress={() => filterdata('subcategory')}>
              <View
                style={{
                  alignItems: 'flex-start',
                  borderBottomWidth: scale(0.5),
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: scale(15),
                    backgroundColor:
                      filter == 'subcategory' ? 'darkgrey' : 'lightgrey',
                    paddingVertical: verticalScale(20),
                    paddingHorizontal: scale(10),
                    width: '100%',
                  }}>
                  Sub Category
                </Text>
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
              <FlatList
                ref={ref => {
                  flatListRef = ref;
                }}
                contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
                data={select}
                horizontal={false}
                keyExtractor={item => {
                  return item.id;
                }}
                renderItem={({item}) => {
                  return (
                    <Pressable onPress={() => handleOnpress(item)} style={{}}>
                      <View style={{marginVertical: 10, marginHorizontal: 5}}>
                        {filter == 'gender' ? (
                          item.gender == null ? (
                            ''
                          ) : (
                            <>
                              <Text
                                style={{
                                  borderWidth: scale(1),
                                  borderColor: '#c79248',
                                  backgroundColor: item.selected
                                    ? '#c79248'
                                    : 'white',
                                  color: item.selected ? 'white' : '#c79248',
                                  paddingHorizontal: scale(5),
                                  paddingVertical: verticalScale(5),
                                  borderRadius: scale(5),
                                  fontSize: scale(20),
                                }}>
                                {item.gender}
                              </Text>
                            </>
                          )
                        ) : (
                          ''
                        )}
                        {filter == 'itemgroup' ? (
                          item.itemgroup == null ? (
                            ''
                          ) : (
                            <>
                              <Text
                                style={{
                                  borderWidth: scale(1),
                                  borderColor: '#c79248',
                                  backgroundColor: item.selected
                                    ? '#c79248'
                                    : 'white',
                                  color: item.selected ? 'white' : '#c79248',
                                  paddingHorizontal: scale(5),
                                  paddingVertical: verticalScale(5),
                                  borderRadius: scale(5),
                                  fontSize: scale(20),
                                }}>
                                {item.itemgroup}
                              </Text>
                            </>
                          )
                        ) : (
                          ''
                        )}
                        {filter == 'category' ? (
                          item.category == null ? (
                            ''
                          ) : (
                            <>
                              <Text
                                style={{
                                  borderWidth: scale(1),
                                  borderColor: '#c79248',
                                  backgroundColor: item.selected
                                    ? '#c79248'
                                    : 'white',
                                  color: item.selected ? 'white' : '#c79248',
                                  paddingHorizontal: scale(5),
                                  paddingVertical: verticalScale(5),
                                  borderRadius: scale(5),
                                  fontSize: scale(20),
                                }}>
                                {item.category}
                              </Text>
                            </>
                          )
                        ) : (
                          ''
                        )}
                        {filter == 'subcategory' ? (
                          item.subcategory == null ? (
                            ''
                          ) : (
                            <>
                              <Text
                                style={{
                                  borderWidth: scale(1),
                                  borderColor: '#c79248',
                                  backgroundColor: item.selected
                                    ? '#c79248'
                                    : 'white',
                                  color: item.selected ? 'white' : '#c79248',
                                  paddingHorizontal: scale(5),
                                  paddingVertical: verticalScale(5),
                                  borderRadius: scale(5),
                                  fontSize: scale(20),
                                }}>
                                {item.subcategory}
                              </Text>
                            </>
                          )
                        ) : (
                          ''
                        )}
                      </View>
                    </Pressable>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Filter;
