const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')


class TypeController {

    async create(req, res, next) {
        const {name} = req.body

        return res.json(await Type.create({name}))
    }

    async getAll(req, res) {
        return res.json(await Type.findAll())
    }
}

module.exports = new TypeController()