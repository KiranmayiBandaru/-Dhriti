const express = require('express')
const router = express.Router()

const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware')
const { addMenu, getMenu } = require('../controllers/menuController')

router.post('/addMenu', authMiddleware, authorizeRoles('superadmin','admin'), addMenu)
router.get('/getMenu', getMenu)

module.exports = router