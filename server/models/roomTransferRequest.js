const mongoose = require('mongoose');
const { timeStamp } = require('node:console');
const { ref } = require('node:process');

const { Schema } = mongoose;

const TransferREquestSchema = Schema({
    studentId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    currentBedId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: Bed,
        required: true
    },
    reason : {
        type : text,
        required: true
    },
    status :{
        type : String,
        enum: ['pending' , 'approved' , 'rejected'],
        required : true
    },
    requestedOn : Date,
    DesiredRoomNo : Number
},{
    timeStamp: true
})