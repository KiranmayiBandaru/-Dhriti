const express = require('express')
const router = express.Router()

const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware')
const { addMenu, getMenu } = require('../controllers/menuController')

router.post('/', authMiddleware, authorizeRoles('superadmin','admin'), addMenu)
router.get('/', getMenu)

module.exports = router