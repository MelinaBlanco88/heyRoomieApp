import React from "react";
import { SafeAreaView } from 'react-native';
import { Box, NativeBaseProvider, ScrollView } from "native-base";
import { useSelector, useDispatch } from 'react-redux'
import { RoomItem } from "../components/RoomItem";
import { selectedRoom } from "../store/actions/room.action";

const RoomsList = ({ navigation }) => {
	const rooms = useSelector((state) => state.rooms);

	const dispatch = useDispatch();

	const onSelectRoom = (room) => {
		dispatch(selectedRoom(room.id))
        navigation.navigate('RoomDetail', {
            id: room.id,
            name: room.name,
        })
    }

    const renderRoomItem = ({ room }) => <RoomItem item={room} onSelected={onSelectRoom} />

	return (
		<NativeBaseProvider>
			<SafeAreaView>
				<ScrollView>
				<Box alignItems='center'>
						{rooms.map((room) => {
							return (
								<RoomItem
									keyExtractor={(room) => room.id}
									renderItem={renderRoomItem}
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
