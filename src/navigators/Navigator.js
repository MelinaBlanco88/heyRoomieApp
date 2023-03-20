import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RoomsList from '../screens/RoomsList'
import Home from '../screens/Home';
import RoomDetailScreen from '../screens/RoomDetail';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={ Home } options={{ title: 'Rooms' }} />
      <Stack.Screen name="RoomsList" component={ RoomsList } />
      <Stack.Screen name="RoomDetail" component={ RoomDetailScreen } />
    </Stack.Navigator>
  )
}

export default Navigator