const {Device, DeviceInfo} = require("../models/models")
const FileService = require("./fileService")


class DeviceService {
    async create(device, file) {
        const candidate = await Device.findOne({where: {name: device.name}})
        if(candidate) {
            throw new Error("Девайс с таким именем уже существует")
        }

        const fileName = FileService.saveFile(file)

        const newDevice = await Device.create({...device, img: fileName})

        let info = device.info
        if(info) {
            info = JSON.parse(info)
            info.forEach(i => {
                DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: newDevice.id
                })
            })
        }

        return newDevice
    }

    async getAll({brandId, typeId}, limit, page) {
        const offset = page * limit - limit

        let devices
        if(!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        } else if(brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        } else if(!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        } else if(brandId && typeId) {
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset})
        }
        return devices
    }

    async getOne(id) {
        if(!id) {
            throw new Error('ID не указан')
        }

        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'device_infos'}]
            }
        )

        return device
    }

    async delete(id) {
        if(!id) {
            throw new Error('ID не указан.')
        }

        const candidate = await Device.findOne({where: {id}})
        if(!candidate) {
            throw new Error('Данного девайса не существует')
        }

        await Device.destroy({where: {id}})
        FileService.deleteFile(candidate.img)
    }

    async update(device) {
        if(!device) {
            throw new Error('Девайс не найден.')
        }

        const candidate = await Device.findOne({where: {id: device.id}})
        if(!candidate) {
            throw new Error('Данного девайса не существует')
        }

        const updatedDevice = await Device.update(
            {...device},
            {where: {id: device.id}}
        )

        return updatedDevice
    }
}

module.exports = new DeviceService()