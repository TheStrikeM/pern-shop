const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')


class TypeController {

    async create(req, res, next) {
        const {name} = req.body

        const isUnique = await Type.findOne({name})
        if(isUnique) {
            return next(ApiError.arleadyHas('Этот тип уже существует'))
        }

        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        return res.json(await Type.findAll())
    }
}

module.exports = new TypeController()