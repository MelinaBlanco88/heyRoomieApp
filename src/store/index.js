import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RoomReducer from './reducers/rooms.reducer';

const RootReducer = combineReducers({
    rooms: RoomReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))