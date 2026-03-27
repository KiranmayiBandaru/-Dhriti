const mongoose = require('mongoose');
const blocks = require('./blocks');

const {Schema} = mongoose;

const roomSchema = Schema({
    roomNumber : {
       type: Number,
       required : true
    },
    blockumber : {
        required: true,
        type : Number
    },
    floorNumber : {
        required : true,
        type : Number
    },
    bedCount : {
        type : Number,
        required : ture
    }
})

module.exports = mongoose.model('Room' , roomSchema)