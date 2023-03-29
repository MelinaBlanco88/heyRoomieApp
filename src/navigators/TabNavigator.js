import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../../assets/css/styles.js";
import RoomNavigator from "./Navigator.js";
import RoomsList from "../screens/RoomsList.js";
import Home from "../screens/Home.js";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<BottomTabs.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBar }}>
			<BottomTabs.Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.tabBarIcon}>
							<AntDesign name='home' size={24} color={focused ? "#7F5DF0" : "#748C94"} />
							<Text style={{ color: focused ? "#7F5DF0" : "#748C94" }}>Home</Text>
						</View>
					),
				}}
			/>

			<BottomTabs.Screen
				name='RoomNavigator'
				component={RoomNavigator}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.tabBarIcon}>
							<FontAwesome5 name='bed' size={24} color={focused ? "#7F5DF0" : "#748C94"} />
							<Text style={{ color: focused ? "#7F5DF0" : "#748C94" }}>RoomsList</Text>
						</View>
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default TabNavigator;