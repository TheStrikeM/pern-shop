const ApiError = require('../error/ApiError')
const TypeService = require("../services/typeService")


class TypeController {

    async create(req, res, next) {
        try {
            const {name} = req.body

            const newType = await TypeService.create(name)

            return res.json({
                message: "Тип успешно создан!",
                type: newType
            })
        } catch (e) {
            console.log('Error:', e)
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const types = await TypeService.getAll()
        return res.json(types)
    }
}

module.exports = new TypeController()