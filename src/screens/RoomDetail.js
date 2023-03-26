import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { View, Text } from "react-native";

const RoomDetail = ({ route, navigation}) => {

  const room = useSelector((state) => state.rooms.rooms);

  useEffect(() => {
    navigation.setOptions({
      title: room.name
    })
  },[])

  return (
    <View>
      <Text>Texto</Text>
    </View>
  )
}

export default RoomDetail
