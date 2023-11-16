import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from  '@react-navigation/native'
import debounce from 'lodash/debounce';
import Icon from 'react-native-vector-icons/FontAwesome';

const debouncedRestaurantSearch = debounce((text) => {
  //restaurant search logic here use backend or API
  console.log(text);
}, 300)

const TopSearchBar = () => {
  const [query, setQuery] = useState('') //query is var, setquery changes the var and '' is initial state
  
  const textchangeHandler = (text) => {
    setQuery(text)
    debouncedRestaurantSearch(text)
  }

  const navigation = useNavigation()

  return (
    <View style={styles.searchView}>
      <TextInput
        autoCorrect={false}
        value={query}
        onChangeText={(text) => {
          textchangeHandler(text)
        }}
        placeholder="Time To Eat!..."
      />
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="search" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  )
}

export default TopSearchBar

const styles = StyleSheet.create({
  searchView: {

  },
})