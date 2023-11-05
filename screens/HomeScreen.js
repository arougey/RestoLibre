import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useCallback } from 'react'
import BotNavBar from '../components/global/BotNavBar'
import TopSearchBar from '../components/global/TopSearchBar'
import tw from 'tailwind-react-native-classnames'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { FlatList } from 'react-native-gesture-handler'

data = [
  {
    id: '1',
    name: 'Sla',
    rating: 4.3,
    image: require('/Users/alexrougebec/Projects/RestoLibre/assets/pictures/RestoLibLogoblack&white.pdf'),
    description: 'An authentic Thai restaurant in Montclair NJ',
  },
  {
    id: "2",
    name: 'Sunhees',
    rating: 2.5,
    image: require('/Users/alexrougebec/Projects/RestoLibre/assets/pictures/RestoLibLogoblack&white.pdf'),
    description: 'A quaint Korean Restaurant in Troy NY',
  },
  {
    id: "3",
    name: 'Le Bernardin',
    rating: '4.9',
    image: require('/Users/alexrougebec/Projects/RestoLibre/assets/pictures/RestoLibLogoblack&white.pdf'),
    description: 'A Michelin star restaurant in New York City, NY',
  },
]

SplashScreen.preventAutoHideAsync();

const HomeScreen = () => {

  const [fontsLoaded, fontError] = useFonts({
    'cafefrancoise': require('/Users/alexrougebec/Projects/RestoLibre/assets/fonts/CafeFrancoise_D.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={tw`flex-1 bg-white`}>
    <SafeAreaView style={styles.safeView}>
      <TopSearchBar/>
      <View style={styles.mainView}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Your Recent Trips:</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.recentTripsContainer}
          horizontal
          data={data}
          keyExtractor={(item) => item.id}
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
      </View>
    </SafeAreaView>
    <BotNavBar/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  searchView: {
    
  },
  safeView: {
    backgroundColor:"green",
    height:'86%'
  },
  mainView: {
    backgroundColor:"blue",
    height: '80%',
  },
  titleView: {
    height: '10%',
    justifyContent: 'center'
  },
  title: {
    marginLeft: '10%',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'cafefrancoise',
  },
})