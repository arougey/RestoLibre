import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'


const HorizontalList = ({data, renderItem, keyExtractor, style}) => {
  return (
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
  );
};

export default HorizontalList;