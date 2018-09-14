// const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
// var obj=new ObjectID();
// console.log(obj);
// var user={name:'andrew', age:25};
// var{name}=user;

// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err, client)=>{
  if(err){
    return console.log('Uabled to connect to mongodb SERVER');
  }
  console.log('Connected');
  const db=client.db('TodoApp');
//   db.collection('TodoApp').insertOne({
//     text:'Something to do',
//     completed:false
//   },(err, result)=>{
//     if(err){
//       return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });
  db.collection('Users').insertOne({
    name:'Glenda',
    age:29,
    location:'SLP,SLP'
  },(err, result)=>{
    if(err){
      return console.log('Unable to insert USER', err);
    }
    console.log((result.ops[0]._id.getTimestamp()));
  });
  client.close();
});
