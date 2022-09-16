import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from 'react-native-vector-icons/Ionicons';

const articleData = ['one', 'two', 'three', 'four', 'five'];

const LikeSystem = () => {
  const [liked, setLiked] = useState([]);
  return (
    <View>
      <FlatList
        data={articleData}
        horizontal={false}
        numColumns={1}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={post => {
          const item = post.item;
          const index = post.index;
          return (
            <>
              <TouchableOpacity
                onPress={() => {
                  console.log(liked);
                  if (liked.includes(index)) {
                    let unlike = liked.filter(elem => elem !== index);
                    setLiked(unlike);
                  } else {
                    setLiked([...liked, index]);
                  }
                }}>
                <View
                  style={[
                    styles.list,
                    {backgroundColor: liked.includes(index) ? 'red' : 'black'},
                  ]}>
                  <Text>{item}</Text>
                  {/* <Ionicons name={'cart-outline'} color={'#c79248'} size={30} /> */}
                </View>
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  list: {
    padding: 10,
    margin: 5,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
});

export default LikeSystem;
