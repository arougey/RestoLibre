import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import BotNavBar from '../components/global/BotNavBar'
import { ScrollView } from 'react-native-gesture-handler'
import TopSearchBar from '../components/global/TopSearchBar'
import Map from '../components/global/Map'
import { useSelector } from 'react-redux'
import { selectName, selectRating } from '../slices/RestaurantSlice'
import { selectTravelTimeInformation } from '../slices/NavSlice'

const ReservationScreen = () => {
  const name = useSelector(selectName)
  const rating = useSelector(selectRating)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.scrollView}>
        <TopSearchBar/>
          <View style={styles.mainView}>
            <Map/>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{rating}</Text>
            <Text style={styles.text}>{travelTimeInformation?.duration.text}</Text>
          </View>
      </ScrollView>
      <BotNavBar/>
    </SafeAreaView>
  )
}

export default ReservationScreen

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    alignSelf: 'center',
  },
  scrollView: {
    height: '100%',
  },
  safeView: {
    backgroundColor:"white",
    height:'100%'
  },
  mainView: {
    backgroundColor:"white",
  },
})