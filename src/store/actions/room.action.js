export const SELECT_ROOM = 'SELECT_ROOM'

export const selectedRoom = (id) => ({
    type: SELECT_ROOM,
    roomID: id
})