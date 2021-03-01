const Router = require("express")

const brandController = require('../controllers/brandController')
const checkRole = require("../middleware/checkRoleMiddleware")
const authMiddleware = require("../middleware/authMiddleware")

const router = new Router()

router.post('/', checkRole("ADMIN"), brandController.create)
router.get('/', authMiddleware, brandController.getAll)

module.exports = router