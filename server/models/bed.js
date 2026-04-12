const mongoose = require('mongoose')
const { Schema } = mongoose;

const bedSchema = Schema({
    bedNo : {
        type : Number,
        required : true
    },
    roomId: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    isAvailiable : {
        type : Boolean,
        default : true
    },
    assignedTo : {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
        ref : 'User'
    }
},{ timestamps: true })

module.exports = mongoose.model('Bed', bedSchema)