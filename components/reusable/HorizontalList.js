import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'


const HorizontalList = ({data, keyExtractor, style}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.list, style]}
      renderItem={({item}) => (
        <TouchableOpacity 
        style={styles.restaurantButton}
        onPress={() => (
          console.log("pressed res. button")
        )}
      >
        <Image
          source={item.image}
        />
        <Text>{item.description}</Text>
        <Text>{item.rating}</Text>
      </TouchableOpacity>

      )}
    />
  );
};

const styles = StyleSheet.create({
  restaurantList: {
    //default styling for the list
    
  },
  restaurantButton: {
    //default styling for each restaurant button
    backgroundColor: 'white',
    width: Dimensions.get('window').width/3,
    
  },
})
export default HorizontalList;