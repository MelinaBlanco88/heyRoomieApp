import { ROOMS } from "../../data/rooms";
import { SELECT_ROOM } from "../actions/room.action";

const initialState = {
    rooms: ROOMS,
    selected: null,
}

const RoomReducer = (state=initialState, action) => {
    switch(action.type) {
        case SELECT_ROOM:
            const indexRoom = state.rooms.find(room => room.id === state.action.roomId);  

            if(indexRoom === 1) return state;
            return { ...state, selected: state.rooms[indexRoom]}
        default: 
            return state;
    }
}

export default RoomReducer;