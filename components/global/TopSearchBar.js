import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Dimensions, TextInput} from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from  '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'
import debounce from 'lodash/debounce';

const textchangeHandler = (text) => {
  setQuery(text)
  searchFunc(text)
}

const debouncedRestaurantSearch = debounce((text) => {
  //restaurant search logic here use backend or API

}, 300)

const TopSearchBar = () => {
  const [query, setQuery] = useState('') //query is var, setquery changes the var and '' is initial state
  
  const navigation = useNavigation()
  return (
    <View>
      <TextInput
        autoCorrect={false}
        value={query}
        onChangeText={(text) => {
          textchangeHandler(text)
        }}
        placeholder="Time To Eat!..."
        
      />
    </View>
  )
}

export default TopSearchBar

const styles = StyleSheet.create({
  
  image: {
    height: 40,
    width: 40,
  }
})