const {ObjectID}= require('mongodb');
const {mongoose}= require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');
const {User}= require('./../server/models/user');

var id='5b9aac0de3ab75120aa3013033';
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
// Todo.find({
//   _id:id
// }).then((data)=>{
//   console.log(data);
// });
//
// Todo.findOne({
//   _id:id
// }).then((data)=>{
//   console.log(data);
// });
// Todo.findById(id).then((data)=>{
//   console.log(data);
// }).catch((e)=>{ console.log(e);});
User.findById(id).then((user)=>{
  if(!user){
    return console.log('Not user');
  }
  console.log(JSON.stringify(user, undefined, 2));
},(e)=>{
  console.log(e);
});
