const mongoose = require('mongoose')
const { Schema } = mongoose;

const attendanceSchema = Schema({
    studentId : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required: true
    },
    date : {
        type: Date,
        required :  true
    },
    status : {
        type: String,
        enum : ['present' , 'absent'],
        required : true
    },
    markedBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    }
},{ timestamps: true })

module.exports = mongoose.model('Attendance' , attendanceSchema) 