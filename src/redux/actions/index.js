import {
    ADD_PACKET,
    UPDATE_FILTER,
    DELETE_ALL_PACKETS,
    DELETE_PACKET
} from "../actionTypes";

export const addPacket = (payload) => ({
    type: ADD_PACKET,
    payload
});

export const updateFilter = (payload) => ({
    type: UPDATE_FILTER,
    payload
});

export const clearPackets = () => ({
    type: DELETE_ALL_PACKETS
});

export const deletePacket = (payload) => ({
    type: DELETE_PACKET,
    payload
});