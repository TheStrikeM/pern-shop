import {SET_ITEMS} from "../utils/constants";

const initialState = {
    items: []
}

export default function(state = initialState, {type, payload}: {type: string, payload: any}) {
    switch(type) {
        case SET_ITEMS:
            return {
                ...state,
                items: payload
            }
        default:
            return state
    }
}

export const setItems = (payload: any) => ({type: SET_ITEMS, payload})