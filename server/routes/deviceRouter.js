const Router = require("express")

const deviceController = require('../controllers/deviceController')
const checkRole = require("../middleware/checkRoleMiddleware")
const authMiddleware = require("../middleware/authMiddleware")

const router = new Router()

router.post('/', checkRole("ADMIN"), deviceController.create)
router.get('/', authMiddleware, deviceController.getAll)
router.get('/:id', authMiddleware, deviceController.getOne)

module.exports = router