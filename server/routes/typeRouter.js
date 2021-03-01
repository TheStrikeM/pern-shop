const Router = require("express")

const typeController = require('../controllers/typeController')
const checkRole = require("../middleware/checkRoleMiddleware")
const authMiddleware = require("../middleware/authMiddleware")

const router = new Router()

router.post('/', checkRole("ADMIN"), typeController.create)
router.get('/', authMiddleware, typeController.getAll)

module.exports = router