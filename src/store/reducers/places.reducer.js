import { ADD_PLACE } from '../actions/places.actions'
import Place from '../../models/Place'

const initialState = {
    places: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(Date.now(), action.payload.title, action.payload.image)
            return {
                ...state,
                places: state.places.concat(newPlace)
            }

        case LOAD_PLACES:
            return {
                ...state,
                places: action.payload.places.map(pl => new Place(pl.id.toString(), pl.title, pl.image))
            }
        default:
            return state
    }
}