const ApiError = require('../error/ApiError')
const BrandService = require("../services/brandService")


class BrandController {
    async create(req, res, next) {
        try {
            const {name} = req.body

            const newBrand = await BrandService.create(name)

            return res.json({
                message: "Брэнд успешно создан!",
                brand: newBrand
            })
        } catch (e) {
            console.log('Error:', e)
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const types = await BrandService.getAll()

            return res.json(types)
        } catch (e) {
            console.log('Error:', e)
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BrandController()