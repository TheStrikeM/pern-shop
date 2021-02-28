const {Type} = require("../models/models")


class TypeService {
    async create(name) {
        const candidate = await Type.findOne({where: {name}})
        if(candidate) {
            throw new Error("Тип с таким именем уже существует")
        }

        return await Type.create({name})
    }

    async getAll() {
        return await Type.findAll()
    }
}

module.exports = new TypeService()