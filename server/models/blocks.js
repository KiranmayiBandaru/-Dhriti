const mongoose = require('mongoose')
const {Schema} = mongoose;

const blockSchema = Schema({
    
    blockName : {
        type :String,
        required: true
    }, 
    managedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
    }
},{ timestamps: true })

module.exports = mongoose.model('Block' , blockSchema)
