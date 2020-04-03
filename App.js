import React from 'react';
//import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Post from './src/components/PostList.js'
import Header from './src/components/Header.js'
import PostScreen from './src/screens/PostScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        component={PostScreen}
        />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

export default App;