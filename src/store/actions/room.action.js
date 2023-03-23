export const SELECT_ROOM = "SELECT_ROOM";

export const selectedRoom = (id) => {
	return {
		type: SELECT_ROOM,
		roomId: id,
	};
};
