import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import { ROOMS } from "../data/rooms"

const RoomDetail = ({ route, navigation}) => {
  const { name, price, imgSrc } = route.params;
  const room = useSelector((state) => state.rooms.rooms);

  useEffect(() => {
    navigation.setOptions({
      title: room.name
    })
  },[])

  return (
    <View>
      <Text>{ name }</Text>
      <Text>{ imgSrc }</Text>
      <Text>$ { price }</Text>
    </View>
  )
}

export default RoomDetail
