const Router = require('express')
const router = new Router()
const userController = require('../controllers/usercontrol.js')
const authMiddleware = require('../middleware/auth')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)

module.exports = router