const {ObjectID}= require('mongodb');
const {mongoose}= require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');
const {User}= require('./../server/models/user');

// Todo.remove({}).then((result)=>{ // do no get back the information that was deleted
//   console.log(result);
// });
// Todo.findOneAndRemove({_id:'5b9bea029a83efccbb0eda39'}).then((result)=>{ // find and remove return the value deleted
//   console.log(result);
// });
Todo.findByIdAndRemove('5b9bea119a83efccbb0eda40').then((result)=>{ // find and remove return the value deleted
  console.log(result);
});
