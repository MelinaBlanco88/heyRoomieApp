import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoomsList from "../screens/RoomsList";
import RoomDetailScreen from "../screens/RoomDetail";

const Stack = createNativeStackNavigator();

const RoomsNavigator = () => {
	return (
		<Stack.Navigator initialRouteName='Home'>
			<Stack.Screen name='RoomsList' component={RoomsList} />
			<Stack.Screen name='RoomDetail' component={RoomDetailScreen} />
		</Stack.Navigator>
	);
};

export default RoomsNavigator;
