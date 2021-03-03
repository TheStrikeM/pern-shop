import {LOGOUT, SET_USER} from "../utils/constants";
import {UserResponseType} from "../api";

export type SetUserActionType = {
    type: typeof SET_USER,
    payload: UserResponseType
}

export type LogoutType = {
    type: typeof LOGOUT
}

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferAuthActionTypes<T extends {[key: string]: (...args: any[]) => any} > = ReturnType<PropertiesTypes<T>>
