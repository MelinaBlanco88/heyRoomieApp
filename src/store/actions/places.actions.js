import * as FileSystem from 'expo-file-system'
import { insertAddress, fetchAddress } from '../../db'


export const ADD_PLACE = 'ADD_PLACE'
export const LOAD_PLACES = 'LOAD_PLACES'

export const addPlace = (title, image) => {
    //return { type: ADD_PLACE, payload: {title}}

    return async dispatch => {
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch (error) {
            console.log(error.message)
            throw error
        }

        const dbResult = await insertAddress(title, Path);
        console.log("Db result: ", dbResult);
        dispatch({type: ADD_PLACE, payload: {id:dbResult.insetId, title, image: Path}})
    }
}

export const loadPlaces = () => {
    return async dispatch => {
        try {
            const dbResult = await fetchAddress()
            console.log('Db result: ',dbResult.rows._array)
            dispatch({type: LOAD_PLACES, payload: {places: dbResult.rows._array}})
        } catch (error) {
            throw error
        }
    }
}