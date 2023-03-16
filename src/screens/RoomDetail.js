import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ROOMS } from '../data/rooms'

const RoomDetailScreen = ({ route, navigation}) => {

    

  const { room } = route.params

  useEffect(() => {
    navigation.setOptions({
      title: room.name
    })
  },[])

  return (
    <View>
      <Text>{room.name}</Text>
    </View>
  )
}

export default RoomDetailScreen
