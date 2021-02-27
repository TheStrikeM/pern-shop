const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')


class BrandController {

    async create(req, res, next) {
        const {name} = req.body

        const isUnique = await Brand.findOne({name})
        if(isUnique) {
            return next(ApiError.arleadyHas('Этот брэнд уже существует'))
        }

        return res.json(await Brand.create({name}))
    }

    async getAll(req, res) {
        return res.json(await Brand.findAll())
    }
}

module.exports = new BrandController()