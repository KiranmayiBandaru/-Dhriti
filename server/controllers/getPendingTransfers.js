const AdminProfile = require('../models/admin')
const StudentProfile = require('../models/student')
const RoomTransferRequest = require('../models/roomTransferRequest')
async function getPendingTransfers(req, res){
    try{
        let query = { status: 'pending' }
        
        if(req.user.role === 'admin'){
            
            const admin = await AdminProfile.findOne({userId: req.user.userId})
            if(!admin)
                return res.status(400).json({ message: "Admin profile not found" })
            const adminblockId = admin.blockId
            
            const students = await StudentProfile.find({blockId: adminblockId})
            
            const studentIds = students.map(s => s.userId)
            
            query.studentId = {$in: studentIds}
        }
        
        const requests = await RoomTransferRequest.find(query)
            .populate('studentId', 'name email') 
        
        return res.status(200).json({data: requests})
    }catch(err){
        return res.status(500).json({message: err.message})
    }
}

module.exports = { getPendingTransfers }