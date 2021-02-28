const {validationResult} = require("express-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const ApiError = require('../error/ApiError')
const {User, Basket} = require("../models/models")


const generateAccessToken = ({id, email, role}) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '1h'}
    )
}


class UserController {

    async register(req, res, next) {
        const {email, password, role} = req.body

        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return next(ApiError.badRequest('Некорректный эмеил или пароль или логин'))
        }

        const isBusyEmail = await User.findOne({where: {email}})
        if(isBusyEmail) {
            return next(ApiError.badRequest('Пользователь с таким именем уже существует'))
        }

        const hashPassword = await bcrypt.hash(password, 4)
        console.log(hashPassword)

        const newUser = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: newUser.id})

        const token = generateAccessToken({id: newUser.id, email, role})

        return res.json({
            message: "Пользователь успешно создан!",
            token,
            user: {
                id: newUser.id,
                email: newUser.email,
                role: newUser.role,
                basket: basket.id
            }
        })
    }

    async login(req, res, next) {
        const {email, password} = req.body

        const user = await User.findOne({where: {email}})
        if(!user) {
            return next(ApiError.badRequest('Неправильный эмеил'))
        }

        const isPassword = bcrypt.compareSync(password, user.password)
        if(!isPassword) {
            return next(ApiError.badRequest('Неправильный пароль'))
        }

        const token = generateAccessToken({id: user.id, email, role: user.role})

        return res.json({
            message: "Вы успешно авторизировались!",
            token,
            user: {
                email: user.email,
                role: user.role
            }
        })
    }

    async auth(req, res, next) {
        const {id} = req.query

        if(!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        return res.json(id)
    }
}

module.exports = new UserController()