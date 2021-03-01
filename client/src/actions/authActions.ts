import axios from "axios";
import {setUser} from "../reducers/authReducer";
import set = Reflect.set;

interface IDefaultProps {
    email: string,
    password: string
}

export const registerUser = async ({email, password}: IDefaultProps, dispatch: any): Promise<void> => {
    try {
        axios.post('http://localhost:5000/user/reg', {email, password})
            .then(({data}) => {
                console.log("Поздравляю, вы успешно зарегистрировались!")
                dispatch(setUser(data.user))
                localStorage.setItem('token', data.token)
            })
            .catch(reason => {
                console.error(`Прозошла ошибка: ${reason}`)
            })
    } catch (e) {
        console.log('Error:', e)
    }
}

export const loginUser = async ({email, password}: IDefaultProps, dispatch: any): Promise<void> => {
    try {
        axios.post('http://localhost:5000/user/login', {email, password})
            .then(({data}) => {
                console.log("Поздравляю, вы успешно авторизировались!")
                dispatch(setUser(data.user))
                localStorage.setItem('token', data.token)
            })
            .catch(reason => {
                console.error(`Прозошла ошибка: ${reason}`)
            })
    } catch (e) {
        console.log('Error:', e)
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