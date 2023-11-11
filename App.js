import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { KeyboardAvoidingView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import ReservationScreen from './screens/ReservationScreen';
import AccountScreen from './screens/AccountScreen';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { Asset } from 'expo-asset';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const Stack = createStackNavigator()

  const loadFonts = (fonts) => {
    return Font.loadAsync(fonts);
  };

  const cacheImages = (images) => {
    return images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
  };

  const loadResources = async () => {
    const fontAssets = loadFonts({
      'cafefrancoise': require('./assets/fonts/CafeFrancoise_D.otf'),

    });

    const imageAssets = cacheImages([
      require('./assets/pictures/navbar_pics/account.png'),
      require('./assets/pictures/navbar_pics/globe.png'),
      require('./assets/pictures/navbar_pics/house.png'),
      require('./assets/pictures/navbar_pics/table.jpg'),
      require('./assets/pictures/restaurants_pics/slathai.jpeg'),
      require('./assets/pictures/restaurants_pics/sunhees.jpg'),
      require('./assets/pictures/restaurants_pics/lebernardin.jpg'),
      // Add all images that you want to preload here
    ]);

  // Wait for all assets to be loaded
    await Promise.all([fontAssets, ...imageAssets]);
  };


  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Fetch fonts, make API calls, etc. here
        await loadResources();
      } 
      catch (e) {
        console.warn(e);
      } 
      finally {
        // Tell the app it is ready to load
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isReady) {
    return null; // Prevents the flicker of unstyled content
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen 
              name='HomeScreen' 
              component={HomeScreen} 
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name='ExploreScreen' 
              component={ExploreScreen} 
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name='ReservationScreen' 
              component={ReservationScreen} 
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name='AccountScreen' 
              component={AccountScreen} 
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

