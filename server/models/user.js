var mongoose=require('mongoose');
var User=mongoose.model('User',{
    email:{
      type:String,
      required:true,
      minlength:1,
      trim:true,
      unique:true
    }
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
