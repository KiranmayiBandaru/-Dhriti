const mongoose = require('mongoose');
const { Schema } = mongoose;

const TransferRequestSchema = Schema({
    studentId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    currentBedId : {
        type: Schema.Types.ObjectId,
        ref: 'Bed',
        required: true
    },
    reason : {
        type : String,
        required: true
    },
    status :{
        type : String,
        enum: ['pending' , 'approved' , 'rejected'],
        default : 'pending'
    },
    requestedOn : {type : Date , default : Date.now},
    desiredRoomId : {
        type : Schema.Types.ObjectId,
        ref : 'Room',
        default :  null
    }
},{
    timestamps: true
})

module.exports = mongoose.model('TransferRequest' , TransferRequestSchema)