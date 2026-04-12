const mongoose = require('mongoose');
const {Schema} = mongoose;

const menuSchema = Schema({
    day : {
        type : String,
        enum : ['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday']
    },
    breakfast : {
        type : String,
        required : true,
    },
    lunch : {
        type : String,
        required : true,
    },
    snacks : {
        type : String,
        required : true,
    },
    dinner : {
        type : String,
        required : true,
    },
    weekStartDate : {
        type : Date,
        required : true,
    }
} , { timestamps: true })

module.exports = mongoose.model('Menu' , menuSchema)