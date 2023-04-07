import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RoomsList from '../screens/RoomsList'
import RoomDetail from '../screens/RoomDetail';
import RoomUpload from '../screens/RoomUpload';

const Stack = createNativeStackNavigator();

const RoomNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="RoomsList" component={ RoomsList } />
      <Stack.Screen name="RoomDetail" component={ RoomDetail } />
      <Stack.Screen name="RoomUpload" component={ RoomUpload } />
    </Stack.Navigator>
  )
}

export default RoomNavigator