require('dotenv').config()
const express = require("express")
const cors = require("cors")

const sequelize = require("./db")
const models = require("./models/models")
const router = require("./routes/index")
const errorHandler = require("./middleware/ErrorHandlingMiddleware")


const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)

// Обработка ошибок
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => {
            console.log(`Server success started in port ${PORT}`)
        })
    } catch (e) {
        console.log('Error:', e)
    }
}

start()



