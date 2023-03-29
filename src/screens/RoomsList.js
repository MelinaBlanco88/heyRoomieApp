import React from "react";
import { SafeAreaView } from 'react-native';
import { Box, ScrollView } from "native-base";
import { useSelector, useDispatch } from 'react-redux'
import { RoomItem } from "../components/RoomItem";
import { selectedRoom } from "../store/actions/room.action";
import { ROOMS } from "../data/rooms"

const RoomsList = ({ navigation }) => {
	const rooms = useSelector((state) => state.rooms.rooms);

	const dispatch = useDispatch();

	const onSelectRoom = (roomid, name) => {
		dispatch(selectedRoom(roomid));
        navigation.navigate('RoomDetail', {
            name: name,
        });
    };

	return (
		<SafeAreaView>
			<ScrollView>
				<Box alignItems='center'>
					{rooms.map((room) => {
						return (
							<RoomItem
								onSelected={onSelectRoom}
								key={room.id}
								{...room}
							/>
						);
					})}
				</Box>
			</ScrollView>
		</SafeAreaView>
	);
};

export default RoomsList;
