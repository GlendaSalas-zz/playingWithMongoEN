const mongoose=require('mongoose');
const validor=require('validator');

var User=mongoose.model('User',{
    email:{
      type:String,
      required:true,
      minlength:1,
      trim:true,
      unique:true,
      validate:{
        validator:validor.isEmail,
        message:'{VALUE} is not valid'
      }
    },
    password:{
      type:String,
      require:true,
      minlength:6
    },
    tokens:[{
      acccess:{
        type:String,
        required:true
      },
      token:{
        type:String,
        required:true
      }
    }]
  });
  module.exports={User}
// var newUser= new User({
//   email:'     glenda.salas.a@gmail.com    '
// });
// newUser.save().then((doc)=>{
//   console.log('Save user', doc);
// },(err)=>{
//   console.log('Error',err.name);
// });
