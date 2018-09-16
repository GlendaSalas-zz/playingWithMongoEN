var mongoose=require('mongoose');
var Todo=mongoose.model('Todo',{
  text:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  },
  completed:{
    type: Boolean,
    default:false
  },
  completedAt:{
    type: Number,
    default:null
  },
  _creator:{
    type:mongoose.Schema.Types.ObjectId,
    requited:true
  }
});
module.exports={Todo}
// var newTodo= new Todo({
//   text:'     METTING WITH FRIENDS    '
// });
// newTodo.save().then((doc)=>{
//   console.log('Save todo', doc);
// },(err)=>{
//   console.log('Error',err.name);
// });
