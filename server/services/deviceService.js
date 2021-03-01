const {Device, DeviceInfo} = require("../models/models")
const FileService = require("../services/FileService")


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

    async getAll({brandId, typeId}, limit, offset) {
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
}

module.exports = new DeviceService()