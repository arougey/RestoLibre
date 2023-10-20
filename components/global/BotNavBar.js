import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Dimensions} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from  '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'

const data = [
  {
    id: 'hs',
    title: 'Home',
    screen: 'HomeScreen',
    image: '/Users/alexrougebec/Projects/RestoLibre/assets/home.png'
  },
  {
    id: 'es',
    title: 'Explore',
    screen: 'ExploreScreen',
    image: '/Users/alexrougebec/Projects/RestoLibre/assets/world.png'
  },
  {
    id: 'rs',
    title: 'Reservations',
    screen: 'ReservationScreen',
    image: '/Users/alexrougebec/Projects/RestoLibre/assets/notepad.png'
  },
  {
    id: 'as',
    title: 'Account',
    screen: 'AccountScreen',
    image: '/Users/alexrougebec/Projects/RestoLibre/assets/bust.png'
  },
]

const BotNavBar = () => {
  const navigation = useNavigation()

  return (
        <FlatList
          contentContainerStyle={styles.buttonContainer}
          showsHorizontalScrollIndicator={false}
          data={data}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.button}
              onPress={() => (
                navigation.navigate( item.screen ) //already expecting object, curly brackets not required
              )}
            >
              <Image
                source={{uri: item.image}}
                style={styles.image}
                resizeMode='contain'
              />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
  )
}

export default BotNavBar

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