const express = require('express')
const router = express.Router()
const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware')
const { requestTransfer } = require('../controllers/roomTransferRequest')
const { approveTransfer } = require('../controllers/approveTransferRequest')
const { getPendingTransfers } = require('../controllers/getPendingTransfers')

router.post('/request', authMiddleware, authorizeRoles('student'), requestTransfer)
router.post('/approve', authMiddleware, authorizeRoles('admin', 'superadmin'), approveTransfer)
router.get('/pending', authMiddleware, authorizeRoles('admin', 'superadmin'), getPendingTransfers)

module.exports = router