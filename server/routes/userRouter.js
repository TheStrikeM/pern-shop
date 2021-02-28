const Router = require("express")
const {check} = require("express-validator")

const userController = require("../controllers/userController")

const router = new Router()

router.post(
    '/reg',
    [
        check("email", "Некорректный эмеил").isEmail(),
        check("password", "Некорректный пароль").isLength({min: 3, max: 20})
    ],
    userController.register
)
router.post('/login', userController.login)
router.get('/auth', userController.auth)

module.exports = router