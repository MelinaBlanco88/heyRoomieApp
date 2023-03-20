import React from "react";
import { SafeAreaView } from 'react-native';
import { Box, NativeBaseProvider, ScrollView } from "native-base";
import { ROOMS } from "../data/rooms";
import { RoomItem } from "../components/RoomItem";

const RoomsList = ({ route, navigation }) => {

	const onSelectRoom = (room) => {
        navigation.navigate('RoomDetail', {
            id: ROOMS.id,
            name: ROOMS.name,
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
								keyExtractor={(room) => room.id}
								name={room.name} 
								country={room.country} 
								city={room.city} 
								price={room.price} 
								imgSrc={room.imgSrc} 								
								description={room.description} 
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
