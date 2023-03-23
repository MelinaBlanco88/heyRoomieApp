import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";

const RoomDetail = ({ route, navigation }) => {
	// Del estado, pedimos solo "selected" pero le cambiamos el nombre a room para mejor legibilidad
	const { selected: room } = useSelector((state) => state);

	useEffect(() => {
		navigation.setOptions({
			title: room.name,
		});
	}, []);

	return (
		<View>
			<Text>{room.name}</Text>
		</View>
	);
};

export default RoomDetail;
