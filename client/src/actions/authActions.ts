import axios from "axios"
import {AuthActions, AuthActionsType} from "../reducers/authReducer"
import {Dispatch} from "redux";
import {UserResponseType} from "../api";
import AuthApi from "../api/authApi";


export const registerUser = ({email, password}: UserResponseType) => {
    return async (dispatch: Dispatch<AuthActionsType>) => {
        try {
            const authData = await AuthApi.register(email, password)
            console.log("Поздравляю, вы успешно зарегистрировались!")

            dispatch(AuthActions.setUser(authData.user))
            localStorage.setItem('token', authData.token)

            return authData
        } catch (e) {
            return e.response.data.message
        }
    }
}

export const loginUser = ({email, password}: UserResponseType) => {
    return async (dispatch: Dispatch<AuthActionsType>) => {
        try {
            const authData = await AuthApi.login(email, password)
            console.log("Поздравляю, вы успешно авторизировались!")

            dispatch(AuthActions.setUser(authData.user))
            localStorage.setItem('token', authData.token)

            return authData
        } catch (e) {
            return e.response.data.message
        }
    }
}

export const authUser = () => {
    return async (dispatch: Dispatch<AuthActionsType>) => {
        try {
            const authData = await AuthApi.auth()

            console.log(authData)
            dispatch(AuthActions.setUser(authData.user))

            localStorage.setItem('token', authData.token)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}