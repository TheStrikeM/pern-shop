const Router = require("express")

const userController = require("../controllers/userController")

const router = new Router()

router.post('/reg', userController.register)
router.post('/login', userController.login)
router.get('/auth', userController.auth)

module.exports = router