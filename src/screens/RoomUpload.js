import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native'
import { Box, ScrollView, Button } from "native-base";
import { useSelector, useDispatch } from 'react-redux'
import { RoomItem } from "../components/RoomItem";
import { selectedRoom } from "../store/actions/room.action";
import { ROOMS } from "../data/rooms";
import { styles } from "../../assets/css/styles.js";
import { addPlace } from "../store/actions/places.actions";
import ImageSelector from '../components/ImageSelector'

const RoomUpload = ({ navigation }) => {
	const dispatch = useDispatch()
    const [titleValue, setTitleValue] = React.useState('')
    const [imageValue, setImageValue] = React.useState('')

    const titleChangeHandler = text => {
        setTitleValue(text)
    }

    const savePlaceHandler = () => {
        dispatch(addPlace(titleValue,imageValue))
        navigation.navigate('RoomUpload')
    }

    return (
		<SafeAreaView>
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.label}>Sube tu habitación</Text>

					<Text>Título:</Text>
					<TextInput style={styles.input} onChangeText={titleChangeHandler}/>
					<ImageSelector onImage={image=>setImageValue(image)} />
					<Button onPress={savePlaceHandler}>Guardar</Button>
				</View>
			</ScrollView>
		</SafeAreaView>
    )
};

export default RoomUpload;
