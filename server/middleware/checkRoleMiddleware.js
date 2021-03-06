const jwt = require("jsonwebtoken")
const config = require("config")


module.exports = function(role) {
    return function(req, res, next) {
        if(req.method === "OPTIONS") {
            next()
        }

        try {
            const token = req.headers.authorization.split(' ')[1]
            if(!token) {
                return res.status(403).json({message: "Пользователь не авторизован"})
            }

            const decodedData = jwt.verify(token, process.env.SECRET_KEY)
            if(decodedData.role != role.toUpperCase()) {
                return res.status(403).json({message: "Ваша роль не соответствует требуемой"})
            }
            req.user = decodedData
            next()
        } catch (e) {
            console.log('Error:', e)
            return res.status(403).json({message: "Пользователь не авторизован"})
        }
}



}