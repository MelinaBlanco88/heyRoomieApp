import React from "react";
import { SafeAreaView } from 'react-native';
import { Box, NativeBaseProvider, ScrollView } from "native-base";
import { ROOMS } from "../data/rooms";
import { RoomItem } from "../components/RoomItem";
import { styles } from '../../assets/css/styles.js';

const RoomsList = ({ route, navigation }) => {

	let roomID = ROOMS.id

	roomID = route.params

  	const rooms = ROOMS.filter(room => room.id === roomID)

	const handleOnSelected = (item) => {
		navigation.navigate('Detail', {
			room: item
		})
	}

	const renderRoomItem = ({ item }) => (<RoomItem item={item} onSelected={handleOnSelected} />)

	return (
		<NativeBaseProvider>
			<SafeAreaView>
				<ScrollView>
					<Box alignItems='center'>
						{ROOMS.map((room) => {
							return <RoomItem 
								key={room.id} 
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
