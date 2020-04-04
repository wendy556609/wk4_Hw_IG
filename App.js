import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PostScreen from './src/screens/PostScreen'
import MessageScreen from './src/screens/MessageScreen'
import PostData from './src/json/container.json'
import MessageData from "./src/json/message.json";

const Stack = createStackNavigator();

const App = () => {
  const ref = React.useRef(null);
  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator>
        <Stack.Screen name="Home"
          component={PostScreen}
          options={{
            headerLeft: () => <Image source={{ uri: PostData.icons.camera }} style={styles.cameraStyle} />,
            headerTitle: () => <Image source={{ uri: PostData.icons.ins }} style={styles.titleStyle} />,
            headerTitleAlign: 'center',
            headerRight: () => {
              return (
                <TouchableOpacity
                  onPress={() => ref.current?.navigate('Message')}
                >
                  <Image source={{ uri: PostData.icons.message }} style={styles.messageStyle} />
                </TouchableOpacity>
              )
            }
          }}
        />
        <Stack.Screen name="Message"
          component={MessageScreen}
          options={{
            title: MessageData.user,
            headerTitleStyle: {
              fontSize: 15
            },
            headerTitleAlign: 'center',
            headerRight: () => {
              return (
                <View style={{ flexDirection: 'row' }}>
                  <Image source={{ uri: PostData.icons.film }} style={styles.messageStyle} />
                  <Image source={{ uri: PostData.icons.edit }} style={styles.messageStyle} />
                </View>
              )
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  cameraStyle: {
    marginLeft: 15,
    marginBottom: 5,
    width: 25,
    height: 25
  },
  titleStyle: {
    width: 100,
    height: 40
  },
  headerStyle: {
    height: 40,
    width: null,
  },
  userStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    height: 40
  },
  messageStyle: {
    marginRight: 15,
    marginBottom: 5,
    width: 25,
    height: 25
  }
});

export default App;