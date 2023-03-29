import { StyleSheet } from "react-native";
import Colors from "../../src/constants/Colors";

export const styles = StyleSheet.create({
	colorWhite: {
		color: Colors.white,
	},

	fontBold: {
		fontWeight: "bold",
		fontFamily: "open-sans-bold",
	},

	button: {
		backgroundColor: Colors.primary,
		paddingLeft: 20,
		paddingRight: 20,
		height: 50,
		borderRadius: 5,
		marginTop: 10,
		alignItems: "center",
		maxWidth: 200,
		marginLeft: "auto",
		marginRight: "auto",
		justifyContent: "center",
	},

	buttonSecondary: {
		backgroundColor: Colors.secondary,
	},

	header: {
		height: 90,
		paddingTop: 36,
		backgroundColor: Colors.primary,
		alignItems: "center",
		justifyContent: "center",
	},

	textHeader: {
		color: Colors.white,
		fontFamily: "open-sans",
		fontSize: 16,
	},

	screen: {
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 10,
		paddingBottom: 10,
	},

	container: {
		marginTop: 20,
	},

	tabBar: {
		position: 'fixed',
		bottom: 0,
		left: 0,
		right: 0,
		borderRadius: 15,
		height: 80
	},
	
	tabBarIcon: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	boxRooms: {
		marginTop: 20,
		marginBottom: 20,
	},
});
