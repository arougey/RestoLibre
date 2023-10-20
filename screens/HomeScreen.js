import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import BotNavBar from '../components/global/BotNavBar'
import TopSearchBar from '../components/global/TopSearchBar'
import tw from 'tailwind-react-native-classnames'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full w-full`}>
      <TopSearchBar/>
      <View style={styles.mainView}>
        <Text>HomeScreen</Text>
      </View>
      <BotNavBar/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  mainView: {
    height: '80%',
  }
})