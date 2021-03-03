import axios from 'axios'

export const instance = axios.create({
    withCredentials: true,
    baseURL: "http://127.0.0.1:5000/"
})

export enum RoleResponseType {
    ADMIN = "ADMIN",
    USER = "USER"
}

export type ApiDefaultResponseType<U = {}> = {
    user: U,
    token: string,
    message: string
}

export type UserReponseType = {
    id: number
    email: string,
    role: RoleResponseType
}