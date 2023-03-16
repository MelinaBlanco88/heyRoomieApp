import React from 'react'
import RoomsList from '../screens/RoomsList'
import Home from '../screens/Home';

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

    </Stack.Navigator>
  )
}

export default Navigator