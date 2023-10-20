import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import BotNavBar from '../components/global/BotNavBar'

const AccountScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>AccountScreen</Text>
      </View>
      <BotNavBar/>
    </SafeAreaView>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})