const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = Schema({

    UserId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    parentMail : {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    parentPhone :{
        type: String,
        required : true,
        
    },
    address : {
        type : String,
        required : true
    },
    
    dateOfJoining : Date,
    bedId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bed',
        required : true
    },
    blockId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Block',
        required: false
    },
    isActive : {
        type : Boolean,
        default : true
    }
}, {timestamps : true})

module.exports = mongoose.model('Student' , studentSchema)