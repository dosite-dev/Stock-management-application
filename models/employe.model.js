const mongoose = require('mongoose');
const Stockschema = new  mongoose.Schema({
    firstItem:{required:true,type: 'string'}, 
        amount: { required:true, type:'String'},
        owner:{required: true,type: 'string'},
        gender:{required:true, type:'String'},
        nationalId:{required:true, type:'String'},

        role:{
                enum:{
                    value:["HR","Manager", "IT_ADMIN","EMPLOYEE"   ],
                    message:"{value} is not a valid role"
                }
        },
        createDate :{
            required:true,
            type:date,default:new Date(),
        }
});

module.exports = momgoos.module.model('Stock',Stockschema); 