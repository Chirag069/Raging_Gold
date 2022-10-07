import {
  View,
  Text,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  Alert,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useNavigation} from '@react-navigation/native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import {GetWishlistAction} from '../../redux/actions/WishListAction';

import {
  AddWishlistAction,
  RemoveWishlistAction,
} from '../../redux/actions/WishListAction';
import {useDispatch} from 'react-redux';
import {ProductListAction} from '../../redux/actions/ProductListAction';
import {ActivityIndicator} from 'react-native-paper';
import {UpdateCartAction, GetCartAction} from '../../redux/actions/CartAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const viewstyledata = [
  {id: 1, image: require('../../assets/Images/grid1.jpg')},
  {id: 2, image: require('../../assets/Images/grid2.jpg')},
  {id: 3, image: require('../../assets/Images/grid3.jpg')},
  {id: 4, image: require('../../assets/Images/grid4.jpg')},
];

const ProductList = () => {
  const dispatch = useDispatch();
  const {Token} = useSelector(state => state.authState);
  const {ProductList, productlistloading} = useSelector(
    state => state.productlistState,
  );
  const {wishlist, wishlistLoading} = useSelector(state => state.wishlistState);
  const {cartLoading} = useSelector(state => state.cartState);
  const data = ProductList.serverResponse?.data;
  const categoryid = ProductList.category;
  const navigation = useNavigation();
  const wishlistdata = wishlist?.data;
  const [liked, setLiked] = useState([]);
  const [wishlistlike, setWishlistlike] = useState([]);
  const [wishlistid, setWishlistid] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [viewstylepress, setViewstylepress] = useState();

  const limit = data?.length + 10;

  const viewstylehandlepress = item => {
    setViewstylepress(item);
  };

  return (
    <>
      {wishlistLoading ? (
        <View
          style={{
            marginTop: 'auto',
            marginBottom: 'auto',
            alignItems: 'center',
            paddingVertical: verticalScale(20),
          }}>
          <ActivityIndicator
            animating={wishlistLoading}
            color={'#c79248'}
            size={scale(30)}
          />
        </View>
      ) : (
        <>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: scale(10),
              paddingVertical: verticalScale(10),
            }}>
            <Text style={{color: '#c79248', fontSize: scale(20)}}>
              Exclusive Gold Ring
            </Text>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              padding: scale(10),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="cart-sharp" size={scale(25)} color="#333" />
              <Text
                style={{
                  fontSize: scale(15),
                  color: '#333',
                  marginLeft: scale(10),
                }}>
                CART
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Filter')}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="filter"
                size={scale(25)}
                color="#333"
              />
              <Text
                style={{
                  fontSize: scale(15),
                  color: '#333',
                  marginLeft: scale(10),
                }}>
                FILTER
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Entypo name="grid" size={scale(25)} color="#333" />
              <Text
                style={{
                  fontSize: scale(15),
                  color: '#333',
                  marginLeft: scale(10),
                }}>
                VIEW STYLE
              </Text>
            </TouchableOpacity>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <TouchableWithoutFeedback
              onPress={() => setModalVisible(!modalVisible)}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: scale(15),
                    paddingHorizontal: scale(20),
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: scale(2),
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: scale(20),
                      color: '#c79248',
                      fontWeight: 'bold',
                      marginTop: verticalScale(10),
                    }}>
                    View Style
                  </Text>

                  <FlatList
                    data={viewstyledata}
                    horizontal
                    contentContainerStyle={{marginVertical: verticalScale(20)}}
                    keyExtractor={item => {
                      return item.id;
                    }}
                    renderItem={post => {
                      const item = post.item;

                      const index = item.id;
                      return (
                        <Pressable
                          onPress={() => {
                            viewstylehandlepress(item.id),
                              setModalVisible(false);
                          }}>
                          <Image
                            style={{
                              height: scale(100),
                              width: scale(100),
                              marginRight: scale(10),
                            }}
                            source={item.image}
                          />
                        </Pressable>
                      );
                    }}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          <View style={{flex: 1}}>
            {viewstylepress == 4 ? (
              <>
                {data?.length != 0 ? (
                  <FlatList
                    style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={data}
                    key={'*'}
                    horizontal={false}
                    numColumns={1}
                    onEndReached={() =>
                      dispatch(ProductListAction(Token, limit, categoryid))
                    }
                    ListFooterComponent={() => (
                      <View
                        style={{
                          marginTop: 'auto',
                          marginBottom: 'auto',
                          alignItems: 'center',
                          paddingVertical: verticalScale(20),
                        }}>
                        <ActivityIndicator
                          animating={productlistloading}
                          color={'#c79248'}
                          size={scale(30)}
                        />
                      </View>
                    )}
                    keyExtractor={item => {
                      return item.id + '*';
                    }}
                    ItemSeparatorComponent={() => {
                      return <View style={styles.separator} />;
                    }}
                    renderItem={post => {
                      const item = post.item;
                      const index = item.id;
                      return (
                        <Pressable
                          onPress={() => navigation.navigate('ProductDetail')}>
                          <View
                            style={{
                              backgroundColor: 'white',
                              width: scale(320),
                              marginHorizontal: scale(5),
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              }}>
                              <TouchableOpacity
                                onPress={() => {
                                  return (
                                    dispatch(
                                      UpdateCartAction(Token, 1, item.id),
                                    ),
                                    dispatch(GetCartAction(Token))
                                  );
                                }}>
                                <Ionicons
                                  name={'cart-outline'}
                                  color={'#c79248'}
                                  size={scale(30)}
                                  style={{
                                    alignSelf: 'flex-end',
                                    padding: scale(2),
                                  }}
                                />
                              </TouchableOpacity>
                              <Pressable
                                onPress={() => {
                                  // handleOnpress(item);
                                  // console.log(item.id);
                                  // console.log(liked);
                                  if (liked.includes(index)) {
                                    let unlike = liked.filter(
                                      elem => elem !== index,
                                    );
                                    setLiked(unlike);
                                  } else {
                                    setLiked([...liked, index]);
                                  }

                                  try {
                                    AsyncStorage.setItem(
                                      'liked',
                                      JSON.stringify(liked),
                                    );
                                  } catch (error) {
                                    // console.log(error.message);
                                  }

                                  liked.includes(index)
                                    ? (dispatch(GetWishlistAction(Token)),
                                      dispatch(
                                        RemoveWishlistAction(Token, item.id),
                                      ))
                                    : (dispatch(GetWishlistAction(Token)),
                                      dispatch(
                                        AddWishlistAction(Token, item.id),
                                      ));
                                }}>
                                <Ionicons
                                  name={
                                    liked.includes(index)
                                      ? 'heart'
                                      : 'heart-outline'
                                  }
                                  color={'#c79248'}
                                  size={scale(30)}
                                  style={{
                                    alignSelf: 'flex-end',
                                    padding: scale(2),
                                  }}
                                />
                              </Pressable>
                            </View>

                            <Image
                              style={{
                                height: scale(300),
                                width: scale(300),
                                alignSelf: 'center',
                              }}
                              source={{
                                uri: item.image,
                              }}
                            />

                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: scale(5),
                              }}>
                              <Text
                                style={{
                                  fontSize: scale(17),
                                  marginTop: verticalScale(5),
                                  marginBottom: verticalScale(5),
                                }}>
                                {item.design_name}
                              </Text>
                              <Text
                                style={{
                                  fontSize: scale(17),
                                  marginTop: verticalScale(5),
                                  marginBottom: verticalScale(5),
                                }}>
                                GW:{item.item}
                              </Text>
                            </View>

                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: scale(5),
                              }}>
                              <Text
                                style={{
                                  fontSize: scale(17),
                                  marginTop: verticalScale(5),
                                  marginBottom: verticalScale(5),
                                }}>
                                {item.amount}
                              </Text>
                              <Text
                                style={{
                                  fontSize: scale(17),
                                  marginTop: verticalScale(5),
                                  marginBottom: verticalScale(5),
                                }}>
                                GW: {item.gr}
                              </Text>
                            </View>
                          </View>
                        </Pressable>
                      );
                    }}
                  />
                ) : (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: scale(20), color: '#333'}}>
                      Sorry! Product Not Found
                    </Text>
                  </View>
                )}
              </>
            ) : viewstylepress == 2 ? (
              <>
                {data?.length != 0 ? (
                  <FlatList
                    style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={data}
                    key={'%'}
                    horizontal
                    numColumns={1}
                    onEndReached={() =>
                      dispatch(ProductListAction(Token, limit, categoryid))
                    }
                    ListFooterComponent={() => (
                      <View
                        style={{
                          marginTop: 'auto',
                          marginBottom: 'auto',
                          alignItems: 'center',
                          paddingVertical: verticalScale(20),
                        }}>
                        <ActivityIndicator
                          animating={productlistloading}
                          color={'#c79248'}
                          size={scale(30)}
                        />
                      </View>
                    )}
                    keyExtractor={item => {
                      return item.id + '%';
                    }}
                    ItemSeparatorComponent={() => {
                      return <View style={styles.separator} />;
                    }}
                    renderItem={post => {
                      const item = post.item;
                      const index = item.id;
                      return (
                        <Pressable
                          onPress={() => navigation.navigate('ProductDetail')}>
                          <View
                            style={{
                              backgroundColor: 'white',
                              width: scale(160),
                              marginHorizontal: scale(5),
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              }}>
                              <TouchableOpacity
                                onPress={() => {
                                  return (
                                    dispatch(
                                      UpdateCartAction(Token, 1, item.id),
                                    ),
                                    dispatch(GetCartAction(Token))
                                  );
                                }}>
                                <Ionicons
                                  name={'cart-outline'}
                                  color={'#c79248'}
                                  size={scale(30)}
                                  style={{
                                    alignSelf: 'flex-end',
                                    padding: scale(2),
                                  }}
                                />
                              </TouchableOpacity>
                              <Pressable
                                onPress={() => {
                                  if (liked.includes(index)) {
                                    let unlike = liked.filter(
                                      elem => elem !== index,
                                    );
                                    setLiked(unlike);
                                  } else {
                                    setLiked([...liked, index]);
                                  }

                                  try {
                                    AsyncStorage.setItem(
                                      'liked',
                                      JSON.stringify(liked),
                                    );
                                  } catch (error) {
                                    // console.log(error.message);
                                  }

                                  liked.includes(index)
                                    ? (dispatch(GetWishlistAction(Token)),
                                      dispatch(
                                        RemoveWishlistAction(Token, item.id),
                                      ))
                                    : (dispatch(GetWishlistAction(Token)),
                                      dispatch(
                                        AddWishlistAction(Token, item.id),
                                      ));
                                  // console.log(liked.includes(index), index);
                                }}>
                                <Ionicons
                                  name={
                                    liked.includes(index)
                                      ? 'heart'
                                      : 'heart-outline'
                                  }
                                  color={'#c79248'}
                                  size={scale(30)}
                                  style={{
                                    alignSelf: 'flex-end',
                                    padding: scale(2),
                                  }}
                                />
                              </Pressable>
                            </View>

                            <Image
                              style={{
                                marginVertical: verticalScale(40),
                                height: scale(160),
                                width: scale(160),
                                alignSelf: 'center',
                              }}
                              source={{
                                uri: item.image,
                              }}
                            />

                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: scale(5),
                              }}>
                              <Text
                                style={{
                                  fontSize: scale(13),
                                  marginTop: verticalScale(5),
                                  marginBottom: verticalScale(5),
                                }}>
                                {item.design_name}
                              </Text>
                              <Text
                                style={{
                                  fontSize: scale(13),
                                  marginTop: verticalScale(5),
                                  marginBottom: verticalScale(5),
                                }}>
                                GW:{item.item}
                              </Text>
                            </View>

                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: scale(5),
                              }}>
                              <Text
                                style={{
                                  fontSize: scale(13),
                                  marginTop: verticalScale(5),
                                  marginBottom: verticalScale(5),
                                }}>
                                {item.amount}
                              </Text>
                              <Text
                                style={{
                                  fontSize: scale(13),
                                  marginTop: verticalScale(5),
                                  marginBottom: verticalScale(5),
                                }}>
                                GW: {item.gr}
                              </Text>
                            </View>
                          </View>
                        </Pressable>
                      );
                    }}
                  />
                ) : (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: scale(20), color: '#333'}}>
                      Sorry! Product Not Found
                    </Text>
                  </View>
                )}
              </>
            ) : viewstylepress == 3 ? (
              <>
                {data?.length != 0 ? (
                  <FlatList
                    style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={data}
                    key={'#'}
                    horizontal={false}
                    numColumns={1}
                    onEndReached={() =>
                      dispatch(ProductListAction(Token, limit, categoryid))
                    }
                    ListFooterComponent={() => (
                      <View
                        style={{
                          marginTop: 'auto',
                          marginBottom: 'auto',
                          alignItems: 'center',
                          paddingVertical: verticalScale(20),
                        }}>
                        <ActivityIndicator
                          animating={productlistloading}
                          color={'#c79248'}
                          size={scale(30)}
                        />
                      </View>
                    )}
                    keyExtractor={item => {
                      return item.id + '#';
                    }}
                    ItemSeparatorComponent={() => {
                      return <View style={styles.separator} />;
                    }}
                    renderItem={post => {
                      const item = post.item;
                      const index = item.id;
                      return (
                        <Pressable
                          onPress={() => navigation.navigate('ProductDetail')}>
                          <View
                            style={{
                              backgroundColor: 'white',
                              width: scale(320),
                              marginHorizontal: scale(5),
                              flexDirection: 'row',
                            }}>
                            <Image
                              style={{
                                height: scale(140),
                                width: scale(160),
                              }}
                              source={{
                                uri: item.image,
                              }}
                            />

                            <View style={{flex: 1}}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                }}>
                                <TouchableOpacity
                                  onPress={() => {
                                    return (
                                      dispatch(
                                        UpdateCartAction(Token, 1, item.id),
                                      ),
                                      dispatch(GetCartAction(Token))
                                    );
                                  }}>
                                  <Ionicons
                                    name={'cart-outline'}
                                    color={'#c79248'}
                                    size={scale(30)}
                                    style={{
                                      alignSelf: 'flex-end',
                                      padding: scale(2),
                                    }}
                                  />
                                </TouchableOpacity>
                                <Pressable
                                  onPress={() => {
                                    // handleOnpress(item);
                                    // console.log(item.id);
                                    // console.log(liked);
                                    if (liked.includes(index)) {
                                      let unlike = liked.filter(
                                        elem => elem !== index,
                                      );
                                      setLiked(unlike);
                                    } else {
                                      setLiked([...liked, index]);
                                    }

                                    try {
                                      AsyncStorage.setItem(
                                        'liked',
                                        JSON.stringify(liked),
                                      );
                                    } catch (error) {
                                      // console.log(error.message);
                                    }

                                    liked.includes(index)
                                      ? (dispatch(GetWishlistAction(Token)),
                                        dispatch(
                                          RemoveWishlistAction(Token, item.id),
                                        ))
                                      : (dispatch(GetWishlistAction(Token)),
                                        dispatch(
                                          AddWishlistAction(Token, item.id),
                                        ));
                                    // console.log(liked.includes(index), index);
                                  }}>
                                  <Ionicons
                                    name={
                                      liked.includes(index)
                                        ? 'heart'
                                        : 'heart-outline'
                                    }
                                    color={'#c79248'}
                                    size={scale(30)}
                                    style={{
                                      alignSelf: 'flex-end',
                                      padding: scale(2),
                                    }}
                                  />
                                </Pressable>
                              </View>

                              <View
                                style={{
                                  justifyContent: 'space-between',
                                  paddingHorizontal: scale(5),
                                }}>
                                <Text
                                  style={{
                                    fontSize: scale(15),
                                    marginTop: verticalScale(5),
                                    marginBottom: verticalScale(5),
                                    color: '#c79248',
                                  }}>
                                  {item.design_name}
                                </Text>
                                <Text
                                  style={{
                                    fontSize: scale(12),
                                    marginTop: verticalScale(5),
                                    marginBottom: verticalScale(5),
                                  }}>
                                  GW:{item.item}
                                </Text>
                              </View>

                              <View
                                style={{
                                  justifyContent: 'space-between',
                                  paddingHorizontal: scale(5),
                                }}>
                                <Text
                                  style={{
                                    fontSize: scale(12),
                                    marginTop: verticalScale(5),
                                    marginBottom: verticalScale(5),
                                  }}>
                                  {item.gender}
                                </Text>
                                <Text
                                  style={{
                                    fontSize: scale(12),
                                    marginTop: verticalScale(5),
                                    marginBottom: verticalScale(5),
                                  }}>
                                  Gross Rate: {item.gr}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </Pressable>
                      );
                    }}
                  />
                ) : (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: scale(20), color: '#333'}}>
                      Sorry! Product Not Found
                    </Text>
                  </View>
                )}
              </>
            ) : (
              <>
                {data?.length != 0 ? (
                  <FlatList
                    style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={data}
                    key={'_'}
                    horizontal={false}
                    numColumns={2}
                    onEndReached={() =>
                      dispatch(ProductListAction(Token, limit, categoryid))
                    }
                    ListFooterComponent={() => (
                      <View
                        style={{
                          marginTop: 'auto',
                          marginBottom: 'auto',
                          alignItems: 'center',
                          paddingVertical: verticalScale(20),
                        }}>
                        <ActivityIndicator
                          animating={productlistloading}
                          color={'#c79248'}
                          size={scale(30)}
                        />
                      </View>
                    )}
                    keyExtractor={item => {
                      return item.id + '_';
                    }}
                    ItemSeparatorComponent={() => {
                      return <View style={styles.separator} />;
                    }}
                    renderItem={post => {
                      const item = post.item;
                      const index = item.id;
                      return (
                        <Pressable
                          onPress={() => navigation.navigate('ProductDetail')}>
                          <View
                            style={{
                              backgroundColor: 'white',
                              width: scale(160),
                              marginHorizontal: scale(5),
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              }}>
                              <TouchableOpacity
                                onPress={() => {
                                  return (
                                    dispatch(
                                      UpdateCartAction(Token, 1, item.id),
                                    ),
                                    dispatch(GetCartAction(Token))
                                  );
                                }}>
                                <Ionicons
                                  name={'cart-outline'}
                                  color={'#c79248'}
                                  size={scale(30)}
                                  style={{
                                    alignSelf: 'flex-end',
                                    padding: scale(2),
                                  }}
                                />
                              </TouchableOpacity>
                              <Pressable
                                onPress={() => {
                                  if (liked.includes(index)) {
                                    let unlike = liked.filter(
                                      elem => elem !== index,
                                    );
                                    setLiked(unlike);
                                  } else {
                                    setLiked([...liked, index]);
                                  }

                                  liked.includes(index)
                                    ? (dispatch(GetWishlistAction(Token)),
                                      dispatch(
                                        RemoveWishlistAction(Token, item.id),
                                      ))
                                    : (dispatch(GetWishlistAction(Token)),
                                      dispatch(
                                        AddWishlistAction(Token, item.id),
                                      ));
                                  // console.log(liked.includes(index), index);
                                }}>
                                <Ionicons
                                  name={
                                    liked.includes(index)
                                      ? 'heart'
                                      : 'heart-outline'
                                  }
                                  color={'#c79248'}
                                  size={scale(30)}
                                  style={{
                                    alignSelf: 'flex-end',
                                    padding: scale(2),
                                  }}
                                />
                              </Pressable>
                            </View>

                            <Image
                              style={{
                                height: scale(140),
                                width: scale(160),
                                alignSelf: 'center',
                              }}
                              source={{
                                uri: item.image,
                              }}
                            />

                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: scale(5),
                              }}>
                              <Text
                                style={{
                                  fontSize: scale(12),
                                  marginTop: verticalScale(5),
                                  marginBottom: verticalScale(5),
                                }}>
                                {item.design_name}
                              </Text>
                              <Text
                                style={{
                                  fontSize: scale(12),
                                  marginTop: verticalScale(5),
                                  marginBottom: verticalScale(5),
                                }}>
                                GW:{item.item}
                              </Text>
                            </View>

                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: scale(5),
                              }}>
                              <Text
                                style={{
                                  fontSize: scale(12),
                                  marginTop: verticalScale(5),
                                  marginBottom: verticalScale(5),
                                }}>
                                {item.amount}
                              </Text>
                              <Text
                                style={{
                                  fontSize: scale(12),
                                  marginTop: verticalScale(5),
                                  marginBottom: verticalScale(5),
                                }}>
                                GW: {item.gr}
                              </Text>
                            </View>
                          </View>
                        </Pressable>
                      );
                    }}
                  />
                ) : (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: scale(20), color: '#333'}}>
                      Sorry! Product Not Found
                    </Text>
                  </View>
                )}
              </>
            )}
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: scale(5),
    backgroundColor: '#F5F5F5',
  },
  listContainer: {
    alignItems: 'center',
  },
  separator: {
    marginTop: scale(10),
  },
});

export default ProductList;
