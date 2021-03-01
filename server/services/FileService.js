

class FileService {

    saveFile(file) {
        let fileName = uuid.v4() + ".jpg"
        file.mv(path.resolve(__dirname, '..', 'static', fileName))

        return fileName
    }
}

module.exports = new FileService()