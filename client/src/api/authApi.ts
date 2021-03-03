import {ApiDefaultResponseType, instance, UserResponseType} from "./index";


type AuthApiResponseType = ApiDefaultResponseType<UserResponseType>

export default class AuthApi {
    static register(email: string, password: string | undefined) {
        return instance.post<AuthApiResponseType>('user/reg', {
            email, password
        }).then(res => res.data)
    }

    static login(email: string, password: string | undefined) {
        return instance.post<AuthApiResponseType>('user/login', {
            email, password
        }).then(res => res.data)
    }

    static auth() {
        return instance.get<AuthApiResponseType>('user/auth', {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        }).then(res => res.data)
    }
}