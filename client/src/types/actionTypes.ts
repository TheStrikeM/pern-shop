import {LOGOUT, SET_USER} from "../utils/constants";
import {UserResponseType} from "../api";

export type SetUserActionType = {
    type: typeof SET_USER,
    payload: UserResponseType
}

export type LogoutType = {
    type: typeof LOGOUT
}

export type AuthActionTypes = SetUserActionType | LogoutType