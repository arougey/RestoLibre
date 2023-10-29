import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native'
import React, { useCallback } from 'react'
import BotNavBar from '../components/global/BotNavBar'
import TopSearchBar from '../components/global/TopSearchBar'
import tw from 'tailwind-react-native-classnames'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

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