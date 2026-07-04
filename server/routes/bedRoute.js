const express = require('express')
const router = express.Router()

const {authMiddleware , authorizeRoles} = require('../middlewares/authMiddleware')
const { createBeds } = require('../controllers/bedController')

router.post('/createBeds', authMiddleware, authorizeRoles('admin','superadmin'), createBeds)

module.exports = router