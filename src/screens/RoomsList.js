import React from "react";
import { SafeAreaView } from 'react-native';
import { Box, NativeBaseProvider, ScrollView } from "native-base";
import { useSelector, useDispatch } from 'react-redux'
import { RoomItem } from "../components/RoomItem";
import { selectedRoom } from "../store/actions/room.action";

const RoomsList = ({ navigation }) => {
	const rooms = useSelector((state) => state.rooms.rooms);

	const dispatch = useDispatch();

	const onSelectRoom = (data) => {
		dispatch(selectedRoom(data.id))
        navigation.navigate('RoomDetail', {
            name: data.name,
        });
    };

	return (
		<NativeBaseProvider>
			<SafeAreaView>
				<ScrollView>
					<Box alignItems='center'>
						{rooms.map((room) => {
							return (
								<RoomItem
									data={room}
									onSelected={onSelectRoom}
									key={room.id}
									{...room}
								/>
							);
						})}
					</Box>
				</ScrollView>
			</SafeAreaView>
		</NativeBaseProvider>
	);
};

export default RoomsList;
