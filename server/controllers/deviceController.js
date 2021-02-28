const uuid = require("uuid")
const path = require("path")

const {Device, DeviceInfo} = require("../models/models")
const ApiError = require("../error/ApiError")


class DeviceController {

    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body

            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({name, price, brandId, typeId, img: fileName, })

            if(info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                })
            }

            return res.json(device)
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
            let offset = page * limit - limit

            let devices;
            if(!brandId && !typeId) {
                devices = await Device.findAndCountAll({limit, offset})
            } else if(brandId && !typeId) {
                devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
            } else if(!brandId && typeId) {
                devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
            } else if(brandId && typeId) {
                devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset})
            }

            return res.json(devices)
        } catch (e) {
            console.log('Error:', e)
            next(ApiError)
        }
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'device_infos'}]
            }
        )
        return res.json(device)
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