import React, { useEffect } from 'react'

const RoomDetail = ({ route, navigation}) => {

  const { room } = route.params;

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

export default RoomDetail
