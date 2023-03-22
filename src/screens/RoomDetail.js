import React, { useEffect } from 'react';
import { ROOMS } from "../data/rooms";

const RoomDetail = ({ route, navigation}) => {

  const room = rooms.filter((room) => room.Id === route.params.Id);

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
