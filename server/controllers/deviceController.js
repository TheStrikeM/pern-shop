const uuid = require("uuid")
const path = require("path")

const {Device, DeviceInfo} = require("../models/models")
const ApiError = require("../error/ApiError")
const DeviceService = require("../services/deviceService")


class DeviceController {

    async create(req, res, next) {
        try {
            const {img} = req.files

            const newDevice = await DeviceService.create(req.body, img)

            return res.json({
                message: "Девайс успешно создан!",
                device: newDevice
            })
        } catch (e) {
            console.log('Error:', e)
            next(ApiError.badRequest("Ошибка в добавлении девайса"))
        }
    }

    async getAll(req, res, next) {
        try {
            let {brandId, typeId, limit, page} = req.query

            limit = limit || 10
            page = page || 1

            const devices = await DeviceService.getAll({brandId, typeId}, limit, page)

            return res.json(devices)
        } catch (e) {
            console.log('Error:', e)
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const device = await DeviceService.getOne(req.params.id)

            return res.json(device)
        } catch (e) {
            console.log('Error:', e)
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params

            if(!id) {
                return next(ApiError.badRequest("ID не указан"))
            }

            const device = await Device.destroy({where: {id}})
            return res.json({
                message: `Девайс с ID ${id} успешно удален!`
            })
        } catch (e) {
            console.log('Error:', e)
            return next(ApiError.badRequest("Ошибка при удалении"))
        }
    }

    async update(req, res, next) {
        try {
            const {id, name, price, rating, img, typeId, brandId} = req.body

            if(!id) {
                return next(ApiError.badRequest("ID не указан"))
            }

            const updatedDevice = await Device.update(
                {id, name, price, rating, img, typeId, brandId},
                {where: {id}}
            )

            return res.json(updatedDevice)
        } catch (e) {
            console.log('Error:', e)
            return next(ApiError.badRequest("Ошибка при изменении"))
        }
    }
}

module.exports = new DeviceController()