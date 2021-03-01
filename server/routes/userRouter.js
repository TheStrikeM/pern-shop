const Router = require("express")
const {check} = require("express-validator")

const userController = require("../controllers/userController")
const authMiddleware = require("../middleware/authMiddleware")

const router = new Router()

router.post(
    '/reg',
    [
        check("email", "Некорректный эмеил").isEmail(),
        check("password", "Некорректный пароль").isLength({min: 3, max: 20})
    ],
    userController.register
)
router.post('/auth', userController.login)
router.get('/auth', authMiddleware, userController.auth)

module.exports = router