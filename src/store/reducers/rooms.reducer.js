import { ROOMS } from "../../data/rooms";
import { SELECT_ROOM } from "../actions/room.action";

const initialState = {
	rooms: ROOMS,
	selected: null,
};

const RoomReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_ROOM:
			const indexRoom = state.rooms.find((room) => room.id === action.roomId);
			// Si .find() no encuentra nada que cumpla las condiciones, devuelve undefined
			// !indexRoom será true si indexRoom es undefined o null, devolverá selected:null si no encuentra un match
			if (!indexRoom) {
				return { ...state, selected: null };
			} else {
				return { ...state, selected: indexRoom };
			}
		// Que se supone que hace esta linea?
		// if (indexRoom === 1) return state;

		default:
			return state;
	}
};

export default RoomReducer;
