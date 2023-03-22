import React from "react";
import { SafeAreaView } from 'react-native';
import { Box, NativeBaseProvider, ScrollView } from "native-base";
import { useSelector, useDispatch } from 'react-redux'
import { RoomItem } from "../components/RoomItem";
import { selectedRoom } from "../store/actions/room.action";

const RoomsList = ({ navigation }) => {
	const dispatch = useDispatch();
	const item =  useSelector(state => state.room.room);

	const onSelectRoom = (room) => {
		dispatch(selectedRoom(room.id))
        navigation.navigate('RoomDetail', {
            id: room.id,
            name: room.name,
        })
    }

    const renderRoomItem = ({ room }) => <RoomItem item={room} onSelect={onSelectRoom} />

	return (
		<NativeBaseProvider>
			<SafeAreaView>
				<ScrollView>
					<Box alignItems='center'>
						{ROOMS.map((room) => {
							return <RoomItem 
								data={room} 
								keyExtractor={(room) => room.id}
								renderItem={renderRoomItem}
							/>;
						})}
					</Box>
				</ScrollView>
			</SafeAreaView>
		</NativeBaseProvider>
	);
};

export default RoomsList;
