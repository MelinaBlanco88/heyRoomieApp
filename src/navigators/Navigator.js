import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RoomsList from '../screens/RoomsList'
import Home from '../screens/Home';
import RoomDetail from '../screens/RoomDetail';

const Stack = createNativeStackNavigator();

const RoomNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="RoomsList" component={ RoomsList } />
      <Stack.Screen name="RoomDetail" component={ RoomDetail } />
    </Stack.Navigator>
  )
}

export default RoomNavigator