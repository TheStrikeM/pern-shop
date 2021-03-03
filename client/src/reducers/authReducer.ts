import {LOGOUT, SET_USER} from "../utils/constants";
import {InferAuthActionTypes, LogoutType, SetUserActionType} from "../types/actionTypes";
import {UserResponseType} from "../api";

const initialState = {
    currentUser: {} as UserResponseType,
    isAuth: false
}

export default function(state = initialState, action: AuthActionsType) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
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


export type AuthActionsType = InferAuthActionTypes<typeof AuthActions>
export const AuthActions = {
    setUser: (payload: UserResponseType) => ({type: SET_USER, payload} as const),
    logoutUser: () => ({type: LOGOUT} as const)
}