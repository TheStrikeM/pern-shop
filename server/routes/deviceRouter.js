const Router = require("express")

const deviceController = require('../controllers/deviceController')
const checkRole = require("../middleware/checkRoleMiddleware")
const authMiddleware = require("../middleware/authMiddleware")

const router = new Router()

router.post('/', checkRole("ADMIN"), deviceController.create)
router.get('/', authMiddleware, deviceController.getAll)
router.get('/:id', authMiddleware, deviceController.getOne)
router.delete('/:id', checkRole("ADMIN"), deviceController.delete)
router.put('/', checkRole("ADMIN"), deviceController.update)

module.exports = router