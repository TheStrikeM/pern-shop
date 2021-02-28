const {validationResult} = require("express-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const ApiError = require('../error/ApiError')
const {User} = require("../models/models")
const UserService = require("../services/userService")


const generateAccessToken = ({id, email, role}) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '1h'}
    )
}


class UserController {

    async register(req, res, next) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return next(ApiError.badRequest('Некорректный эмеил или пароль или логин'))
            }

            const newUser = await UserService.register(req.body)
            const token = generateAccessToken({id: newUser.id, email: newUser.email, role: newUser.role})

            return res.json({
                message: "Пользователь успешно создан!",
                token,
                user: {
                    id: newUser.id,
                    email: newUser.email,
                    role: newUser.role
                }
            })
        } catch (e) {
            console.log('Error:', e)
            next(ApiError.badRequest(e.message))
        }
    }

    async login(req, res, next) {
        try {
            const user = await UserService.login(req.body)
            const token = generateAccessToken({id: user.id, email: user.email, role: user.role})

            return res.json({
                message: "Вы успешно авторизировались!",
                token,
                user: {
                    email: user.email,
                    role: user.role
                }
            })
        } catch (e) {
            console.log('Error:', e)
            next(ApiError.badRequest(e.message))
        }
    }

    async auth(req, res, next) {
        try {
            const token = generateAccessToken(req.user.id, req.user.email, req.user.role)
            return res.json({token})
        } catch (e) {
            console.log('Error:', e)
            return next(ApiError.badRequest('Ошибка в auth'))
        }
    }
}

module.exports = new UserController()