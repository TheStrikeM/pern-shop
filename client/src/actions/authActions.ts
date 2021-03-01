import axios from "axios";
import {setUser} from "../reducers/authReducer";

interface IDefaultProps {
    email: string,
    password: string
}

export const registerUser = async ({email, password}: IDefaultProps, dispatch: any): Promise<void> => {
    try {
        const response = axios.post('http://localhost:5000/user/reg', {email, password})
        const data = (await response).data

        console.log("Поздравляю, вы успешно зарегистрировались!")

        dispatch(setUser(data.user))
        localStorage.setItem('token', data.token)
        return data
    } catch (e) {
        return e.response.data.message
    }
}

export const loginUser = async ({email, password}: IDefaultProps, dispatch: any): Promise<any> => {
    try {
        const response = axios.post('http://localhost:5000/user/login', {email, password})
        const data = (await response).data

        console.log("Поздравляю, вы успешно авторизировались!")

        dispatch(setUser(data.user))
        localStorage.setItem('token', data.token)
        return data
    } catch (e) {
        return e.response.data.message
    }
}

export const authUser = async (dispatch: any): Promise<void> => {
    try {
        axios.get('http://localhost:5000/user/auth',
            {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            .then(({data}) => {
                dispatch(setUser(data.user))
            })
    } catch (e) {
        console.log('Error:', e)
        localStorage.removeItem('token')
    }
}