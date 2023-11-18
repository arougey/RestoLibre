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
        <TopSearchBar/>
        <View style={styles.mainView}> 
          {/*Promoted*/}
          <View style={styles.firstView}>
            <Text style={styles.firstText}>Promoted:</Text>
          </View>
          <View style={styles.recentTrips}>
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
                    style={styles.restaurantImage}
                  />
                  <Text>{item.description}</Text>
                  <Text>{item.rating}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          {/*recent trips*/}
            <View style={styles.firstView}>
              <Text style={styles.firstText}>Your Recent Trips:</Text>
            </View>
          <View style={styles.recentTrips}>
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
                    style={styles.restaurantImage}
                  />
                  <Text>{item.description}</Text>
                  <Text>{item.rating}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          {/* recently viewed */}
          <View style={styles.firstView}>
              <Text style={styles.firstText}>Recently Viewed</Text>
            </View>
          <View style={styles.recentTrips}>
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
                    style={styles.restaurantImage}
                  />
                  <Text>{item.description}</Text>
                  <Text>{item.rating}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          {/*closest to you*/}
          <View style={styles.firstView}>
              <Text style={styles.firstText}>Closest To You</Text>
            </View>
          <View style={styles.recentTrips}>
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
                    style={styles.restaurantImage}
                  />
                  <Text>{item.description}</Text>
                  <Text>{item.rating}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          </View>
      </ScrollView>
      <BotNavBar/>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "orange",
    height: '90%',
  },
  restaurantButton: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width/3,
  },
  restaurantImage: {
    width: 100,
    height: 100,
  },
  searchView: {
    
  },
  safeView: {
    backgroundColor:"green",
  },
  mainView: {
    backgroundColor:"white",
  },
  firstView: {
    justifyContent: 'center'
  },
  firstText: {
    marginLeft: '10%',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'cafefrancoise',
  },
})