// const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
// var ObjectId = require('mongodb')
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
  // db.collection('Todos').deleteMany({name:'Glenda'}).then((res)=>{
  //   console.log(res.result);
  //   console.log('HEY');
  // },(err)=>{
  //   console.log(err);
  // });
  // db.collection('Users').deleteMany({
  //   name:'Glenda'
  // }).then((res)=>{
  //   console.log(res.result);
  // },(err)=>{
  //   console.log(err);
  // });
  db.collection('Users').findOneAndDelete({
     _id: new ObjectID("5b9a73ebe3ab75120aa2f323")
  }).then((res)=>{
     console.log(JSON.stringify(res, undefined, 2));
  },(err)=>{
    console.log(err);
  });

  // client.close();
});
