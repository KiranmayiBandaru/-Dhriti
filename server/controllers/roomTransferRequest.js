const StudentProfile = require('../models/student')
const RoomTransferRequest = require('../models/RoomTransferRequest')

async function requestTransfer(req, res){
    try{
        const { reason } = req.body
        if(!reason)
            return res.status(400).json({ message: "reason required" })
        
        const student = await StudentProfile.findOne({ userId: req.user.userId })
        if(!student)
            return res.status(400).json({ message: "student not found" })
  
        await RoomTransferRequest.create({
            studentId: req.user.userId,
            currentBedId: student.bedId,
            reason,
            status: 'pending',
            requestedOn: new Date()
        })
        
        return res.status(201).json({ message: "request submitted" })
    }catch(err){
        return res.status(500).json({ message: err.message })
    }
}

module.exports = { requestTransfer }