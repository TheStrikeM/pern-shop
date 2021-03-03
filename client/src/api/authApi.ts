import {ApiDefaultResponseType, instance, UserReponseType} from "./index";


type AuthApiResponseType = ApiDefaultResponseType<UserReponseType>

export const authApi = {
    reg(email: string, password: string) {
        return instance.post<AuthApiResponseType>('user/reg', {
            email, password
        }).then(res => res.data)
    },
    login(email: string, password: string) {
        return instance.post<AuthApiResponseType>('user/login', {
            email, password
        }).then(res => res.data)
    }
}