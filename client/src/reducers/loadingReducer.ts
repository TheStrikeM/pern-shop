import {SET_LOGIN_LOADING, SET_REGISTER_LOADING} from "../utils/constants";

const initialState = {
    isLoginLoaded: true,
    isRegisterLoaded: true
}

export default function(state = initialState, {type, payload}: {type: string, payload: any}) {
    switch(type) {
        case SET_LOGIN_LOADING:
            return {
                ...state,
                isLoginLoaded: payload
            }

        case SET_REGISTER_LOADING:
            return {
                ...state,
                isRegisterLoaded: payload
            }

        default:
            return state
    }
}

export const setLoginLoading = (payload: any) => ({type: SET_LOGIN_LOADING, payload})
export const setRegisterLoading = (payload: any) => ({type: SET_REGISTER_LOADING, payload})