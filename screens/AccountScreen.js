import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import BotNavBar from '../components/global/BotNavBar'
import { ScrollView } from 'react-native-gesture-handler'
import TopSearchBar from '../components/global/TopSearchBar'

const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.scrollView}>
        <TopSearchBar/>
          <View style={styles.mainView}>
          </View>
      </ScrollView>
      <BotNavBar/>
    </SafeAreaView>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
  safeView: {
    backgroundColor:"white",
    height:'100%'
  },
  mainView: {
    backgroundColor:"blue",
  },
})