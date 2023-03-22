import { createStore, combineReducers } from 'redux';
import RoomReducer from './reducers/rooms.reducer';

const RootReducer = combineReducers({
    rooms: RoomReducer,
})

export default createStore(RoomReducer)