const express = require('express')
const router = express.Router()

const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware')
const { removeStudent } = require('../controllers/removeStudent')

router.delete('/remove', authMiddleware, authorizeRoles('admin', 'superadmin'), removeStudent)

module.exports = router