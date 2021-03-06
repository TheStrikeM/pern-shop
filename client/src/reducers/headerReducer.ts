import {SET_KEY} from "../utils/constants";

const initialState = {
    active: "shop"
}

export default function(state = initialState, {type, payload}: {type: string, payload: any}) {
    switch(type) {
        case SET_KEY:
            return {
                ...state,
                active: payload
            }
        default:
            return state
    }
}

export const setKey = (payload: string) => ({type: SET_KEY, payload})