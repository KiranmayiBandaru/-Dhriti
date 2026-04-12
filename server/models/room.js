const mongoose = require('mongoose');
const {Schema} = mongoose;

const roomSchema = Schema({
    roomNumber : {
       type: Number,
       required : true
    },
    blockId : {
        type: Schema.Types.ObjectId,
        ref: 'Block',
        required: true
    },
    floorNumber : {
        required : true,
        type : Number
    },
    capacity : {
        type : Number,
        required : true
    }
} , {timestamps : true})

module.exports = mongoose.model('Room' , roomSchema)