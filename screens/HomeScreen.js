import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useCallback } from 'react'
import BotNavBar from '../components/global/BotNavBar'
import TopSearchBar from '../components/global/TopSearchBar'
import tw from 'tailwind-react-native-classnames'
import { ScrollView, FlatList } from 'react-native-gesture-handler'


data = [
  {
    id: '1',
    name: 'Sla',
    rating: 4.3,
    image: require('../assets/pictures/restaurants_pics/slathai.jpeg'),
    description: 'An authentic Thai restaurant in Montclair NJ',
  },
  {
    id: "2",
    name: 'Sunhees',
    rating: 2.5,
    image: require('../assets/pictures/restaurants_pics/sunhees.jpg'),
    description: 'A quaint Korean Restaurant in Troy NY',
  },
  {
    id: "3",
    name: 'Le Bernardin',
    rating: '4.9',
    image: require('../assets/pictures/restaurants_pics/lebernardin.jpg'),
    description: 'A Michelin star restaurant in New York City, NY',
  },
]


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.scrollView}>
        <View style={tw`flex-1 bg-white`}>
          <TopSearchBar/>
          <View style={styles.mainView}>
            <View style={styles.titleView}>
              <Text style={styles.title}>Your Recent Trips:</Text>
            </View>
          {/*Promoted*/}

          {/*recent trips*/}
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
          {/* recently viewed */}
          
          {/*closest to you*/}
          </View>
        </View>
      </ScrollView>
        <BotNavBar/>
      </SafeAreaView>
    
  );
};

export default HomeScreen

const styles = StyleSheet.create({
  searchView: {
    
  },
  safeView: {
    backgroundColor:"green",
    height:'100%'
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