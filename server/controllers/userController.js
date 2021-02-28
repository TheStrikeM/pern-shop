const {validationResult} = require("express-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const ApiError = require('../error/ApiError')
const {User, Basket} = require("../models/models")


class UserController {

    async register(req, res) {
        const {email, password, role} = req.body

        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return next(ApiError.badRequest('Некорректный эмеил или пароль или логин'))
        }

        const isBusyEmail = await User.findOne({where: {email}})
        if(isBusyEmail) {
            return next(ApiError.badRequest('Пользователь с таким именем уже существует'))
        }

        const hashPassword = bcrypt.hash(password, 4)
        console.log(hashPassword)

        const newUser = await User.create({email, role, password: 'testtest'})
        const basket = await Basket.create({userId: newUser.id})

        const token = jwt.sign(
            {id: newUser.id, email, role},
            process.env.SECRET_KEY,
            {expiresIn: '1h'}
        )
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

    async login(req, res) {}

    async auth(req, res, next) {
        const {id} = req.query

        if(!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        return res.json(id)
    }
}

module.exports = new UserController()