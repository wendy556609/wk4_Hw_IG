import React from 'react';
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import Post from './src/components/PostList.js'
import Header from './src/components/Header.js'
import PostScreen from './src/screens/PostScreen'
import PostData from './src/json/container.json'
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        component={PostScreen}
        options={{
          headerLeft:()=><Image source={{uri:PostData.icons.camera}} style={styles.cameraStyle}/>,
          headerTitle:()=><Image source={{uri:PostData.icons.ins}} style={styles.titleStyle}/>,
          headerRight:()=><Image source={{uri:PostData.icons.message}} style={styles.messageStyle}/>
        }}
        />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  cameraStyle:{
    marginLeft: 15,
    marginBottom: 5,
    width: 25,
    height: 25
  },
  titleStyle:{
    //alignItems:'center',
    //marginBottom: 5,
    width: 100,
    height: 40
  },
  messageStyle:{
    marginRight: 15,
    marginBottom: 5,
    width: 25,
    height: 25
  }
});

export default App;