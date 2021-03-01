import {LOGOUT, SET_USER} from "../utils/constants";

const initialState = {
    currentUser: {},
    isAuth: false
}

export default function(state = initialState, {type, payload}: {type: string, payload: any}) {
    switch(type) {
        case SET_USER:
            return {
                ...state,
                currentUser: payload,
                isAuth: true
            }

        case LOGOUT:
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default:
            return state
    }
}

export const setUser = (payload: any) => ({type: SET_USER, payload})
export const logoutUser = () => ({type: LOGOUT})