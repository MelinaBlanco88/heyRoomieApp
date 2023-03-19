import React from 'react'
import RoomsList from '../screens/RoomsList'
import Home from '../screens/Home';
import RoomDetailScreen from '../screens/RoomDetail';

const Navigator = ({ route }) => {
  return (
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

      <Stack.Screen
        name="RoomDetail"
        component={RoomDetailScreen}
      />

    </Stack.Navigator>
  )
}

export default Navigator