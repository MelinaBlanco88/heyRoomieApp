import React from "react";
import { Box, NativeBaseProvider } from "native-base";
import { ROOMS } from "../data/rooms";
import { RoomItem } from "../components/RoomItem";

const RoomsList = ({ route, navigation }) => {
	return (
		<NativeBaseProvider>
			<Box alignItems='center'>
				{ROOMS.map((room) => {
					return <RoomItem key={room.id} name={room.name} description={room.description} />;
				})}
			</Box>
		</NativeBaseProvider>
	);
};

export default RoomsList;
