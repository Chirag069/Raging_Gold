import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome} from 'react-native-vector-icons/FontAwesome';

const articleData = ['one', 'two', 'three', 'four', 'five'];
const likeSystem = () => {
  /* 
    to determine if the list item is liked or not, 
    we will set up a state "liked", which is an array and holds 
    the indexes of liked list items.
  */
  const [liked, setLiked] = useState([]);

  /*
on TouchableOpacity we will use the below function, 
it will first see if the index of cliked list item is already present, 
if yes then we remove that index from "liked" state array, which is 
similar to unlike functionality, and if the index is not present, 
then we push that index to the "liked" state. 
-----------------------------------------
onPress={() => {
            console.log(liked);
            if (liked.includes(index)) {
              let unlike = liked.filter((elem) => elem !== index);
              setLiked(unlike);
            } else {
              setLiked([...liked, index]);
            }
          }}
------------------------------------------
then comes the styling of the icon, which is pretty simple, 
we just see if the index of that list item is present in the "liked" state, 
if yes then it means, that item is liked and we set the color of the icon "red" else "black"

<FontAwesome
              name="heart"
              size={20}
          😏 ➡ style={{ color: liked.includes(index) ? 'red' : 'black' }}
            />
*/

  return (
    <View style={styles.container}>
      {articleData.map((article, index) => (
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
          <View style={styles.list}>
            <Text>{article}</Text>
            <FontAwesome
              name="heart"
              size={20}
              style={{color: liked.includes(index) ? 'red' : 'black'}}
            />
          </View>
        </TouchableOpacity>
      ))}
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

export default likeSystem;
