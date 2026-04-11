require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt= require('bcryptjs')
const User = require('./models/User.js')

const seedSuperAdmin = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI)
       console.log("MongoDB connected")
       
       let existingSuperAdmin = await User.findOne({role : 'superadmin'})
       
       if(existingSuperAdmin){
         console.log("Super admin already created")
         process.exit(0)
       }

       const hash = await bcrypt.hash(process.env.SUPER_ADMIN_PASSWORD, 10)
       await User.create({name : process.env.SUPER_ADMIN_NAME , email : process.env.SUPER_ADMIN_EMAIL , password : hash , phone: process.env.SUPER_ADMIN_PHONE, role : 'superadmin'})
        
       console.log("Superadmin created successfully")

       mongoose.disconnect()
       process.exit(0)
    }catch(err){
       console.log("Seeding failed" , err)
       process.exit(1)
    }
}

seedSuperAdmin()