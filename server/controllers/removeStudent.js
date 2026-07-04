const studentProfile = require('../models/student')
const beds = require('../models/bed')
async function removeStudent(req, res){
    try{
       
      if(!['admin', 'superadmin'].includes(req.user.role))
            return res.status(403).json({ message: "Not authorized" })
      const { studentId } = req.body

      const student = await studentProfile.findOne({userId : studentId})
      if(!student) 
        return res.status(400).json("student doesn't exist or wrong id")

      student.isActive = false;
      await student.save()
      const studentBedId = student.bedId
      const bed = await beds.findOne({_id : studentBedId})
      if(!bed) 
        return res.status(400).json("invalid bedId")

      bed.isAvailable = true;
      await bed.save()
      return res.status(200).json("student removed successfully")
    }catch(err){
         return res.status(500).json({message : err.message})
    }
}

module.exports = {removeStudent}