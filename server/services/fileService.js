const uuid = require("uuid")
const path = require("path")
const fs = require('fs');


class FileService {

    saveFile(file) {
        let fileName = uuid.v4() + ".jpg"
        file.mv(path.resolve(__dirname, '..', 'static', fileName))

        return fileName
    }

    deleteFile(fileName) {
        const filePath = path.resolve(__dirname, '..', 'static', fileName)
        fs.unlinkSync(filePath)

        return fileName
    }
}

module.exports = new FileService()