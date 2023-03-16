import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RoomsList from '../screens/RoomsList'
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Navigator = ({ route }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Rooms'
          }}
        />
        <Stack.Screen
          name="RoomsList"
          component={RoomsList}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator