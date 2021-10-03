import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/home";
import DetailsScreen from "./screens/details";
import AboutScreen from "./screens/about";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>
        <Stack.Screen name= "Movies" component={HomeScreen} />
        <Stack.Screen name = "Details" component = {DetailsScreen}  />
        <Stack.Screen name = "About" component = {AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App
