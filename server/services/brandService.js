const {Brand} = require("../models/models")


class BrandService {
    async create(name) {
        const candidate = await Brand.findOne({where: {name}})
        if(candidate) {
            throw new Error("Брэнд с таким именем уже существует")
        }

        return await Brand.create({name})
    }

    async getAll() {
        return await Brand.findAll()
    }
}

module.exports = new BrandService()