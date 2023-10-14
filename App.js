import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
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

export default function App() {
  const Stack = createStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
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
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

