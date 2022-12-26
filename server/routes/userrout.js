const Router = require('express')
const router = new Router()
const userController = require('../controllers/usercontrol.js')
const authMiddleware = require('../middleware/auth')

router.post('/registration', userController.reg)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
//router.get('/users', authMiddleware, userController.getUsers)

module.exports = router