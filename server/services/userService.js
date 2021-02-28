const bcrypt = require("bcryptjs")

const {User} = require("../models/models")


class UserService {
    
    async register({email, password, role}) {
        const isBusyEmail = await User.findOne({where: {email}})
        if(isBusyEmail) {
            throw new Error('Эмеил уже занят')
        }

        const hashPassword = await bcrypt.hash(password, 4)
        console.log(hashPassword)

        const newUser = await User.create({email, role, password: hashPassword})
        return newUser
    }

    async login({email, password}) {
        const user = await User.findOne({where: {email}})
        if(!user) {
            throw new Error('Неправильный эмеил')
        }

        const isPassword = bcrypt.compareSync(password, user.password)
        if(!isPassword) {
            throw new Error('Неправильный пароль')
        }
        return user
    }
}

module.exports = new UserService()