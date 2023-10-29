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
    image: require('/Users/alexrougebec/Projects/RestoLibre/assets/pictures/house.png')
  },
  {
    id: 'es',
    title: 'Explore',
    screen: 'ExploreScreen',
    image: require('/Users/alexrougebec/Projects/RestoLibre/assets/pictures/globe.png')
  },
  {
    id: 'rs',
    title: 'Reservations',
    screen: 'ReservationScreen',
    image: require('/Users/alexrougebec/Projects/RestoLibre/assets/pictures/table.jpg')
  },
  {
    id: 'as',
    title: 'Account',
    screen: 'AccountScreen',
    image: require('/Users/alexrougebec/Projects/RestoLibre/assets/pictures/account.png')
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
                source={item.image}
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
    flex:1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/10,
    backgroundColor: "red",
  },
  button: {
    width: Dimensions.get('window').width/4, // Each button takes up equal width
    margin: 0, // No spacing
    backgroundColor: 'white', // Change to your desired button style
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor:"black",
    borderTopWidth: 1
  },
  image: {
    height: 40,
    width: 40,
  }
})