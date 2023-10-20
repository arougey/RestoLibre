import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Dimensions, TextInput} from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from  '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'
import debounce from 'lodash/debounce';

const data = [
  {
    id: 'hs',
    title: 'Home',
    screen: 'HomeScreen',
    image: '/Users/alexrougebec/Projects/RestoLibre/assets/house.jpg'
  },
  {
    id: 'es',
    title: 'Explore',
    screen: 'ExploreScreen',
    image: '/Users/alexrougebec/Projects/RestoLibre/assets/globe.png'
  },
  {
    id: 'rs',
    title: 'Reservations',
    screen: 'ReservationScreen',
    image: '/Users/alexrougebec/Projects/RestoLibre/assets/table.png'
  },
  {
    id: 'as',
    title: 'Account',
    screen: 'AccountScreen',
    image: '/Users/alexrougebec/Projects/RestoLibre/assets/account.png'
  },
]

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
  buttonContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/10
  },
  button: {
    width: Dimensions.get('window').width/4, // Each button takes up equal width
    margin: 0, // No spacing
    backgroundColor: 'white', // Change to your desired button style
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 40,
    width: 40,
  }
})