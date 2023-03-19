import React, { useEffect } from 'react'

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
