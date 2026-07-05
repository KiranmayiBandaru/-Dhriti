const roomTransferRequest = require('../models/roomTransferRequest')
const StudentProfile = require('../models/student')
const Bed = require('../models/bed')

async function approveTransfer(req, res) {
  try {
    if (!['admin', 'superadmin'].includes(req.user.role))
      return res.status(403).json({ message: "Not authorized" })

    const { requestId } = req.body
    if (!requestId)
      return res.status(400).json({ message: "requestId required" })

    // Find transfer request
    const transferReq = await roomTransferRequest.findById(requestId)
    if (!transferReq)
      return res.status(404).json({ message: "Request not found" })

    if (transferReq.status !== 'pending')
      return res.status(400).json({ message: "Request already processed" })

    // Find student
    const student = await StudentProfile.findOne({ userId: transferReq.studentId })
    if (!student)
      return res.status(404).json({ message: "Student not found" })

    // Get current room
    const currentBed = await Bed.findById(student.bedId)
    const currentRoomId = currentBed.roomId

    // Find available bed
    let newBed 
    if (transferReq.desiredRoomId) {
      newBed = await Bed.findOne({ roomId: transferReq.desiredRoomId, isAvailable: true })
    } else {
      newBed = await Bed.findOne({ isAvailable: true, roomId: { $ne: currentRoomId } })
    }

    if (!newBed)
      return res.status(400).json({ message: "No available bed found" })

    // Release old bed
    currentBed.isAvailable = true
    await currentBed.save()

    // Assign new bed
    student.bedId = newBed._id
    await student.save()

    newBed.isAvailable = false
    await newBed.save()

    // Update request
    transferReq.status = 'approved'
    transferReq.approvedOn = new Date()
    transferReq.approvedBy = req.user.userId
    await transferReq.save()

    return res.status(200).json({ message: "Transfer approved" })
    
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

module.exports = { approveTransfer }