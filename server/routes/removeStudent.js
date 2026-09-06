const express = require('express')
const router = express.Router()

const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware')
const { removeStudent } = require('../controllers/removeStudent')

router.patch('/', authMiddleware, authorizeRoles('admin', 'superadmin'), removeStudent)

module.exports = router