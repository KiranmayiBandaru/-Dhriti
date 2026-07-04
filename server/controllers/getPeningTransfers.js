const AdminProfile = require('../models/admin')
const StudentProfile = require('../models/student')
const RoomTransferRequest = require('../models/roomTransferRequest')
async function getPendingTransfers(req, res){
    try{
        let query = { status: 'pending' }
        
        if(req.user.role === 'admin'){
            // Step 1: Find admin's blockId
            const admin = await AdminProfile.findOne({userId: req.user.userId})
            if(!admin)
                return res.status(400).json({ message: "Admin profile not found" })
            const adminblockId = admin.blockId
            // Step 2: Find all students in that block
            const students = await StudentProfile.find({blockId: adminblockId})
            // Step 3: Get their userIds
            const studentIds = students.map(s => s.userId)
            // Step 4: Find transfers for only these students
            query.studentId = {$in: studentIds}
        }
        // If superadmin, query stays as just {status: 'pending'} — sees all
        
        // Step 5: Find transfer requests and populate student details
        const requests = await RoomTransferRequest.find(query)
            .populate('studentId', 'name email')  // Get name, email from User
        
        return res.status(200).json({data: requests})
    }catch(err){
        return res.status(500).json({message: err.message})
    }
}