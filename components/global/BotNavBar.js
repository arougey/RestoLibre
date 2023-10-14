import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from  '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'

const data = [
  {
    id: 'hs',
    title: 'Home',
    screen: 'HomeScreen',
    image: ''
  },
  {
    id: 'es',
    title: 'Explore',
    screen: 'ExploreScreen',
    image: ''
  },
  {
    id: 'rs',
    title: 'Reservations',
    screen: 'ReservationScreen',
    image: ''
  },
  {
    id: 'as',
    title: 'Account',
    screen: 'AccountScreen',
    image: ''
  },
]
const BotNavBar = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={tw `h-1/5 w-1/4`}
            onPress={() => (
              navigation.navigate( item.screen ) //already expecting object, curly brackets not required
            )}
          >
            <Image
              source={{uri: item.image}}
            />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

export default BotNavBar

const styles = StyleSheet.create({})