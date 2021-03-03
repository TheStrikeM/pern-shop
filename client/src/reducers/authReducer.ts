import {LOGOUT, SET_USER} from "../utils/constants";
import {LogoutType, SetUserActionType} from "../types/actionTypes";
import {UserResponseType} from "../api";

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

export class AuthActions {
    static setUser(payload: UserResponseType): SetUserActionType {
        return {type: SET_USER, payload}
    }

    static logoutUser(): LogoutType {
        return {type: LOGOUT}
    }
}