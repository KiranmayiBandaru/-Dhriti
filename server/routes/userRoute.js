const express = require('express')
const router = express.Router()
const {authMiddleware , authorizeRoles} = require('../middlewares/authMiddleware')
const { createStudent } = require('../controllers/userController')

router.post('/createStudent', authMiddleware, authorizeRoles('admin' , 'superadmin'), createStudent)

module.exports = router