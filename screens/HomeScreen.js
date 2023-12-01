import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useCallback } from 'react'
import BotNavBar from '../components/global/BotNavBar'
import TopSearchBar from '../components/global/TopSearchBar'
import tw from 'tailwind-react-native-classnames'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/NavSlice'
import { setId, setImage, setName, setRating } from '../slices/RestaurantSlice'


data = [
  {
    id: '1',
    name: 'Sla',
    rating: 4.3,
    image: require('../assets/pictures/restaurants_pics/slathai.jpeg'),
    description: "SLA thai restaurant, Valley Road, Montclair, NJ, USA",
    location: {"lat": 40.84083779999999, "lng": -74.2081668}
  },
  {
    id: "2",
    name: 'Sunhees',
    rating: 2.5,
    image: require('../assets/pictures/restaurants_pics/sunhees.jpg'),
    description: "Sunhee's Farm and Kitchen, Ferry Street, Troy, NY, USA",
    location: {"lat": 42.7276507, "lng": -73.689377}
  },
  {
    id: "3",
    name: 'Le Bernardin',
    rating: '4.9',
    image: require('../assets/pictures/restaurants_pics/lebernardin.jpg'),
    description: "Le Bernardin, West 51st Street, New York, NY, USA",
    location: {"lat": 40.76142179999999, "lng": -73.9817558}
  },
]


const HomeScreen = () => {
  const dispatch = useDispatch()

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
                  onPress={() => {
                    dispatch(
                      setDestination({
                        location: item.location,
                        description: item.description
                      })),
                      dispatch(setId(item.id));
                      dispatch(setImage(item.image));
                      dispatch(setName(item.name));
                      dispatch(setRating(item.rating));
                  }}
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
          {/*Most Visited*/}
          <View style={styles.firstView}>
              <Text style={styles.firstText}>Most Visited</Text>
            </View>
          <View style={styles.mostVisited}>
            <FlatList
              contentContainerStyle={styles.mostVisitedContainer}
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
          {/*Loved by Friends*/}
          <View style={styles.firstView}>
              <Text style={styles.firstText}>Loved by Friends</Text>
            </View>
          <View style={styles.mostVisited}>
            <FlatList
              contentContainerStyle={styles.mostVisitedContainer}
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
    backgroundColor:"white",
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