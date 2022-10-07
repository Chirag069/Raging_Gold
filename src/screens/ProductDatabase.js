import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SQLite from 'react-native-sqlite-storage';
import {Button, TextInput} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {useSelector, useDispatch} from 'react-redux';
import {ProductListAction} from '../../redux/actions/ProductListAction';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const db = SQLite.openDatabase(
  {
    name: 'chiragproductdb',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);

const ProductDatabase = () => {
  useFocusEffect(
    React.useCallback(() => {
      dispatch(ProductListAction(Token, 100));
      createTable();
      cartcreateTable();
      getData();
      getcartData();
    }, []),
  );
  const dispatch = useDispatch();
  const [productdetails, setProductdetails] = useState([]);
  const [cartdata, setCartdata] = useState([]);
  const [text, setText] = React.useState('');

  const navigation = useNavigation();

  const {ProductList} = useSelector(state => state.productlistState);
  const {Token} = useSelector(state => state.authState);

  const {serverResponse} = ProductList;
  let productdata = serverResponse?.data;

  // console.log(productdetails);
  // console.log(cartdata);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'products' +
          '(p_id INTEGER PRIMARY KEY  AUTOINCREMENT,main_id INTEGER,item_id	INTEGER ,item_group_id	INTEGER ,gr	NUMERIC ,ls	NUMERIC,amount	NUMERIC,nt	NUMERIC,design_code_id	TEXT ,image	TEXT ,item	TEXT ,design_name	TEXT ,gender	TEXT ,item_category	TEXT );',
      );
    });
  };

  const cartcreateTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'cart' +
          '(id INTEGER PRIMARY KEY  AUTOINCREMENT,p_id INTEGER,main_id INTEGER,item_id	INTEGER ,item_group_id	INTEGER ,gr	NUMERIC ,ls	NUMERIC,amount	NUMERIC,nt	NUMERIC,design_code_id	TEXT ,image	TEXT ,item	TEXT ,design_name	TEXT ,gender	TEXT,FOREIGN KEY (p_id) REFERENCES products (p_id));',
      );
    });
  };

  const setData = async () => {
    for (var i = 0; i < productdata?.length; i++) {
      const {
        id,
        item_id,
        item_group_id,
        gr,
        ls,
        amount,
        nt,
        design_code_id,
        image,
        item,
        design_name,
        gender,
        item_category,
      } = productdata[i];
      // console.log(item_id);

      if (id) {
        try {
          await db.transaction(async tx => {
            await tx.executeSql(
              'INSERT INTO products (main_id,item_id,item_group_id,gr,ls,amount,nt,design_code_id,image,item,design_name,gender,item_category) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
              [
                id,
                item_id,
                item_group_id,
                gr,
                ls,
                amount,
                nt,
                design_code_id,
                image,
                item,
                design_name,
                gender,
                item_category,
              ],
            );
          });
          getData();
          Toast.show({
            text1: 'data set successfully',
            visibilityTime: 3000,
            autoHide: true,
            position: 'top',
            type: 'success',
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        Toast.show({
          text1: 'selected data already added',
          visibilityTime: 3000,
          autoHide: true,
          position: 'top',
          type: 'success',
        });
      }
    }
  };

  const getData = () => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT p_id,main_id,item_id,item_group_id,gr,ls,amount,nt,design_code_id,image,item,design_name,gender,item_category FROM products',
          [],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              let result = [];
              for (let i = 0; i < len; i++) {
                let item = results.rows.item(i);

                // console.log(item.item_id);

                result.push({
                  p_id: item.p_id,
                  id: item.main_id,
                  item_id: item.item_id,
                  item_group_id: item.item_group_id,
                  gr: item.gr,
                  ls: item.ls,
                  amount: item.amount,
                  nt: item.nt,
                  design_code_id: item.design_code_id,
                  image: item.image,
                  item: item.item,
                  design_name: item.design_name,
                  gender: item.gender,
                  item_category: item.item_category,
                });
              }
              setProductdetails(result);
            }
          },
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getcartData = () => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT main_id,item_id,item_group_id,gr,ls,amount,nt,design_code_id,image,item,design_name,gender FROM cart',
          [],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              let result = [];
              for (let i = 0; i < len; i++) {
                let item = results.rows.item(i);

                // console.log(item.item_id);

                result.push({
                  id: item.main_id,
                  item_id: item.item_id,
                  item_group_id: item.item_group_id,
                  gr: item.gr,
                  ls: item.ls,
                  amount: item.amount,
                  nt: item.nt,
                  design_code_id: item.design_code_id,
                  image: item.image,
                  item: item.item,
                  design_name: item.design_name,
                  gender: item.gender,
                });
              }
              setCartdata(result);
            }
          },
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const cartpress = async items => {
    const {
      id,
      item_id,
      item_group_id,
      gr,
      ls,
      amount,
      nt,
      design_code_id,
      image,
      item,
      design_name,
      gender,
    } = items;

    try {
      await db.transaction(async tx => {
        await tx.executeSql(
          'INSERT INTO cart (main_id,item_id,item_group_id,gr,ls,amount,nt,design_code_id,image,item,design_name,gender) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
          [
            id,
            item_id,
            item_group_id,
            gr,
            ls,
            amount,
            nt,
            design_code_id,
            image,
            item,
            design_name,
            gender,
          ],
        );
      });
      getcartData();
      navigation.navigate('CartDB');

      Toast.show({
        text1: 'item successufully added in to cart',
        visibilityTime: 3000,
        autoHide: true,
        position: 'top',
        type: 'success',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const numbertoaddcart = async selectcartid => {
    console.log(selectcartid);
    if (selectcartid == 0 && selectcartid > 100) {
      Toast.show({
        text1: 'Please enter valid data.',
        visibilityTime: 3000,
        autoHide: true,
        position: 'top',
        type: 'success',
      });
    } else {
      try {
        db.transaction(tx => {
          tx.executeSql(
            `SELECT * FROM products WHERE p_id=${selectcartid}`,
            [],
            (tx, results) => {
              var len = results.rows.length;
              if (len > 0) {
                for (let i = 0; i < len; i++) {
                  let item = results.rows.item(i);

                  console.log(item.p_id);
                  try {
                    db.transaction(async tx => {
                      await tx.executeSql(
                        'INSERT INTO cart (main_id,item_id,item_group_id,gr,ls,amount,nt,design_code_id,image,item,design_name,gender) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
                        [
                          item.id,
                          item.item_id,
                          item.item_group_id,
                          item.gr,
                          item.ls,
                          item.amount,
                          item.nt,
                          item.design_code_id,
                          item.image,
                          item.item,
                          item.design_name,
                          item.gender,
                        ],
                      );
                    });
                    getcartData();
                    navigation.navigate('CartDB');

                    Toast.show({
                      text1: 'item successufully added in to cart',
                      visibilityTime: 3000,
                      autoHide: true,
                      position: 'top',
                      type: 'success',
                    });
                  } catch (error) {
                    console.log(error);
                  }
                }
              }
            },
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View>
      {/* <Button mode="contained" onPress={setData}>
        ADD DATA
      </Button> */}
      <TextInput
        label="Enter ID Add To Cart"
        value={text}
        keyboardType="number-pad"
        maxLength={3}
        onChangeText={text => setText(text)}
      />
      <Button
        mode="contained"
        style={{borderRadius: 0}}
        onPress={() => numbertoaddcart(text)}>
        Submit
      </Button>
      <FlatList
        // style={styles.list}
        contentContainerStyle={{
          paddingHorizontal: scale(5),
          backgroundColor: '#F5F5F5',
        }}
        data={productdetails}
        key={'*'}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id + '*';
        }}
        ItemSeparatorComponent={() => {
          return <View style={{marginTop: 10}} />;
        }}
        renderItem={post => {
          const item = post.item;
          const index = item.id;
          return (
            <Pressable onPress={() => {}}>
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
                  <TouchableOpacity onPress={() => cartpress(item)}>
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
                  {/* <Pressable
                    onPress={() => {
                      // handleOnpress(item);
                      // console.log(item.id);
                      // console.log(liked);
                      if (liked.includes(index)) {
                        let unlike = liked.filter(elem => elem !== index);
                        setLiked(unlike);
                      } else {
                        setLiked([...liked, index]);
                      }

                      try {
                        AsyncStorage.setItem('liked', JSON.stringify(liked));
                      } catch (error) {
                        // console.log(error.message);
                      }

                      liked.includes(index)
                        ? (dispatch(GetWishlistAction(Token)),
                          dispatch(RemoveWishlistAction(Token, item.id)))
                        : (dispatch(GetWishlistAction(Token)),
                          dispatch(AddWishlistAction(Token, item.id)));
                    }}>
                    <Ionicons
                      name={liked.includes(index) ? 'heart' : 'heart-outline'}
                      color={'#c79248'}
                      size={scale(30)}
                      style={{
                        alignSelf: 'flex-end',
                        padding: scale(2),
                      }}
                    />
                  </Pressable> */}
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
    </View>
  );
};

export default ProductDatabase;
