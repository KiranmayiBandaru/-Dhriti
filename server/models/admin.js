const mongoose = require('mongoose')
const { Schema } = mongoose

const adminSchema = Schema({
    userId :{
       type : Schema.Types.ObjectId,
       required : true,
       ref : 'User',

    },
    adminName : String,
    adminPhoto: {
        type: String,
        default: null
    },
    blockId: {
        type: Schema.Types.ObjectId,
        ref: 'Block',
        required: true
    },
},{ 
    timestamps: true 
})

module.exports = mongoose.model('Admin' , adminSchema)